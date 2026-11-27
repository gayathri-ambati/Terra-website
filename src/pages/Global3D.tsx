import { useEffect, useMemo, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export type GlobeHotspot = {
  id: string;
  label: string;
  note?: string;
  lat: number;
  lon: number;
  meta?: string;
};

type Props = {
  hotspots: GlobeHotspot[];
  interactive?: boolean;
  still?: boolean;
  className?: string;
};

const R = 1.5;
const LIME = '#a3e635';
const TEAL = '#14b8a6';

function toVec(lat: number, lon: number, r = R) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

function useDots(count = 4200) {
  return useMemo(() => {
    const arr = new Float32Array(count * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const rad = Math.sqrt(1 - y * y);
      const t = golden * i;
      arr[i * 3] = Math.cos(t) * rad * R;
      arr[i * 3 + 1] = y * R;
      arr[i * 3 + 2] = Math.sin(t) * rad * R;
    }
    return arr;
  }, [count]);
}

function useAtmosphere() {
  return useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: /* glsl */ `
          varying vec3 vNormal;
          varying vec3 vPos;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
        fragmentShader: /* glsl */ `
          varying vec3 vNormal;
          varying vec3 vPos;
          void main() {
            float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.6);
            vec3 col = mix(vec3(0.08, 0.72, 0.65), vec3(0.64, 0.90, 0.20), rim);
            gl_FragColor = vec4(col, rim * 0.85);
          }`,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
      }),
    [],
  );
}

function Arc({
  a,
  b,
  still,
  dim,
}: {
  a: THREE.Vector3;
  b: THREE.Vector3;
  still: boolean;
  dim: boolean;
}) {
  const pulse = useRef<THREE.Mesh>(null);
  const offset = useMemo(() => Math.random(), []);
  const curve = useMemo(() => {
    const mid = a
      .clone()
      .add(b)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(R + a.distanceTo(b) * 0.42);
    return new THREE.QuadraticBezierCurve3(a, mid, b);
  }, [a, b]);
  const line = useMemo(
    () =>
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(80)),
        new THREE.LineBasicMaterial({
          color: LIME,
          transparent: true,
          opacity: dim ? 0.14 : 0.6,
        }),
      ),
    [curve, dim],
  );

  useFrame(({ clock }) => {
    if (still || !pulse.current) return;
    pulse.current.position.copy(curve.getPoint((clock.elapsedTime * 0.24 + offset) % 1));
  });

  return (
    <group>
      <primitive object={line} />
      <mesh ref={pulse} position={curve.getPoint(0.5)}>
        <sphereGeometry args={[dim ? 0.018 : 0.03, 12, 12]} />
        <meshBasicMaterial color="#ecfccb" transparent opacity={dim ? 0.4 : 1} />
      </mesh>
    </group>
  );
}

function Hotspot({
  position,
  label,
  active,
  interactive,
  occluder,
  onToggle,
}: {
  position: THREE.Vector3;
  label: string;
  active: boolean;
  interactive: boolean;
  occluder: RefObject<THREE.Mesh>;
  onToggle: () => void;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ringRef.current) return;
    const t = (clock.elapsedTime % 2) / 2;
    ringRef.current.scale.setScalar(0.1 + t * 0.5);
    const mat = ringRef.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.45 * (1 - t);
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[active ? 0.055 : 0.04, 20, 20]} />
        <meshBasicMaterial color={active ? '#ffffff' : LIME} />
      </mesh>
      <mesh ref={ringRef}>
        <ringGeometry args={[0.07, 0.09, 24]} />
        <meshBasicMaterial color={LIME} transparent opacity={0.5} depthWrite={false} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshBasicMaterial color={LIME} transparent opacity={0.12} depthWrite={false} />
      </mesh>
      {interactive && (
        <Html distanceFactor={7} occlude={[occluder]} zIndexRange={[30, 10]}>
          <button
            type="button"
            onClick={onToggle}
            aria-pressed={active}
            className={`whitespace-nowrap rounded-full border px-3 py-1 text-[11px] backdrop-blur-md transition ${
              active
                ? 'border-[#a3e635] bg-[#a3e635] text-forest-900'
                : 'border-white/25 bg-black/55 text-white hover:border-[#a3e635] hover:text-[#a3e635]'
            }`}
            style={{ transform: 'translate(12px,-50%)' }}
          >
            {label}
          </button>
        </Html>
      )}
    </group>
  );
}

function Scene({
  hotspots,
  interactive,
  still,
}: Required<Pick<Props, 'hotspots' | 'interactive' | 'still'>>) {
  const spin = useRef<THREE.Group>(null);
  const tilt = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const [active, setActive] = useState<string | null>(null);
  const dots = useDots();
  const atmosphere = useAtmosphere();
  const points = useMemo(() => hotspots.map((h) => toVec(h.lat, h.lon)), [hotspots]);
  const { camera } = useThree();

  useFrame((_, dt) => {
    if (!spin.current || !tilt.current) return;
    const target = hotspots.find((h) => h.id === active);
    if (target) {
      const v = toVec(target.lat, target.lon);
      const cur = spin.current.rotation.y;
      const want = -Math.atan2(v.x, v.z);
      const ty = cur + Math.atan2(Math.sin(want - cur), Math.cos(want - cur));
      spin.current.rotation.y = THREE.MathUtils.damp(cur, ty, 3, dt);
      tilt.current.rotation.x = THREE.MathUtils.damp(
        tilt.current.rotation.x,
        (target.lat * Math.PI) / 180,
        3,
        dt,
      );
      camera.position.z = THREE.MathUtils.damp(camera.position.z, 5.6, 2, dt);
    } else {
      if (!still) spin.current.rotation.y += dt * 0.11;
      tilt.current.rotation.x = THREE.MathUtils.damp(tilt.current.rotation.x, 0.22, 2, dt);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, 6.4, 2, dt);
    }
  });

  return (
    <>
      <mesh ref={core}>
        <sphereGeometry args={[R - 0.012, 64, 64]} />
        <meshBasicMaterial colorWrite={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[R - 0.006, 64, 64]} />
        <meshBasicMaterial color={TEAL} transparent opacity={0.08} depthWrite={false} />
      </mesh>

      <group ref={tilt}>
        <group ref={spin}>
          <points>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[dots, 3]} />
            </bufferGeometry>
            <pointsMaterial color="#bef264" size={0.018} sizeAttenuation transparent opacity={0.85} depthWrite={false} />
          </points>

          {points.map((p, i) => (
            <Arc
              key={i}
              a={p}
              b={points[(i + 1) % points.length]}
              still={still}
              dim={active !== null && hotspots[i].id !== active && hotspots[(i + 1) % points.length].id !== active}
            />
          ))}

          {hotspots.map((h, i) => (
            <Hotspot
              key={h.id}
              position={points[i]}
              label={h.label}
              active={active === h.id}
              interactive={interactive}
              occluder={core}
              onToggle={() => setActive(active === h.id ? null : h.id)}
            />
          ))}
        </group>
      </group>

      <mesh scale={1.22}>
        <sphereGeometry args={[R, 64, 64]} />
        <primitive object={atmosphere} attach="material" />
      </mesh>
    </>
  );
}

export default function Globe3D({
  hotspots,
  interactive = false,
  still = false,
  className = '',
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      rootMargin: '140px',
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className={`h-full w-full ${className}`}>
      <Canvas
        dpr={[1, 1.75]}
        frameloop={visible ? 'always' : 'demand'}
        camera={{ position: [0, 0, 6.4], fov: 40 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%' }}
        aria-hidden={!interactive}
      >
        <Scene hotspots={hotspots} interactive={interactive} still={still} />
      </Canvas>
    </div>
  );
}