'use client';

import { Suspense, lazy } from 'react';

// Carga perezosa del componente Spline para no bloquear el renderizado inicial
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Robot3D() {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <Suspense fallback={
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-primary/60 text-sm font-medium animate-pulse">Invocando al Nexbot...</p>
                </div>
            }>
                <Spline
                    scene="https://prod.spline.design/ZAdESHlRkiJZUgSL/scene.splinecode"
                    className="w-full h-full"
                />
            </Suspense>
        </div>
    );
}
