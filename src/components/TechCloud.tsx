'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, TrackballControls } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
    'JAVASCRIPT', 'TAILWIND', 'NESTJS', 'DJANGO',
    'JAVA', 'REACT', 'PYTHON', 'VUE.JS',
    'AWS', 'DOCKER', 'POSTGRES', 'FASTAPI'
];

function Cloud({ count = 4, radius = 20 }) {
    const words = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;

        for (let i = 1; i < count + 1; i++) {
            for (let j = 0; j < count; j++) {
                const word = skills[(i * count + j) % skills.length];
                temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), word]);
            }
        }
        return temp;
    }, [count, radius]);

    const groupRef = useRef<THREE.Group>(null!);
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.002;
            groupRef.current.rotation.x += 0.001;
        }
    });

    return (
        <group ref={groupRef}>
            {words.map(([pos, word], index) => (
                <Word key={index} position={pos as THREE.Vector3}>{word as string}</Word>
            ))}
        </group>
    );
}

function Word({ children, position }: { children: string, position: THREE.Vector3 }) {
    const ref = useRef<any>(null!);

    useFrame(() => {
        if (ref.current && ref.current.parent?.parent) {
            ref.current.quaternion.copy(ref.current.parent.parent.quaternion).invert();
        }
    });

    return (
        <Text
            ref={ref}
            position={position}
            fontSize={2}
            letterSpacing={-0.05}
            lineHeight={1}
            material-toneMapped={false}
            color="#00f0ff"
            onPointerOver={() => (ref.current.color = '#ffffff')}
            onPointerOut={() => (ref.current.color = '#00f0ff')}
        >
            {children}
        </Text>
    );
}

export default function TechCloud() {
    return (
        <section className="h-[60vh] md:h-[80vh] w-full bg-[#0a0a0a] relative cursor-grab active:cursor-grabbing">
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
                <div className="w-[80%] h-[80%] border-white/5 rounded-full border border-dashed animate-[spin_60s_linear_infinite]" />
            </div>

            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-primary/20 font-mono text-xs uppercase tracking-widest">Cargando Ecosistema...</div>}>
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                    <fog attach="fog" args={['#0a0a0a', 0, 80]} />
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                        <Cloud count={8} radius={22} />
                    </Float>
                    <TrackballControls rotateSpeed={2} noPan noZoom />
                </Canvas>
            </Suspense>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.4em]">Interactúa con el ecosistema</p>
            </div>
        </section>
    );
}
