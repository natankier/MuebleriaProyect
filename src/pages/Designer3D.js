import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Designer3D = () => {
    const mountRef = useRef(null);
    const [width, setWidth] = useState(2);
    const [height, setHeight] = useState(2);
    const [depth, setDepth] = useState(2);
    const [color, setColor] = useState('#8B4513');
    const [texture, setTexture] = useState(null);
    const [rotationX, setRotationX] = useState(0); // Rotación en el eje X
    const [rotationY, setRotationY] = useState(0); // Rotación en el eje Y
    const [rotationZ, setRotationZ] = useState(0); // Rotación en el eje Z

    // Cargar textura de madera
    useEffect(() => {
        const loader = new THREE.TextureLoader();
        loader.load('/textures/wood.jpg', (texture) => {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(2, 2);
            setTexture(texture);
        });
    }, []);

    // Validar que el valor no sea negativo
    const validatePositiveNumber = (value) => {
        return Math.max(0, value);
    };

    useEffect(() => {
        const mountNode = mountRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountNode.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        // Grupo para el mueble (permite rotar todo el mueble como un solo objeto)
        const furnitureGroup = new THREE.Group();
        scene.add(furnitureGroup);

        const createFurniture = () => {
            furnitureGroup.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    furnitureGroup.remove(child);
                }
            });

            const baseGeometry = new THREE.BoxGeometry(width, 0.2, depth);
            const baseMaterial = new THREE.MeshStandardMaterial({
                color: color,
                map: texture,
            });
            const base = new THREE.Mesh(baseGeometry, baseMaterial);
            base.position.y = -height / 2 + 0.1;
            furnitureGroup.add(base);

            const legGeometry = new THREE.BoxGeometry(0.2, height - 0.2, 0.2);
            const legMaterial = new THREE.MeshStandardMaterial({
                color: color,
                map: texture,
            });

            const legPositions = [
                { x: -width / 2 + 0.1, z: -depth / 2 + 0.1 },
                { x: width / 2 - 0.1, z: -depth / 2 + 0.1 },
                { x: -width / 2 + 0.1, z: depth / 2 - 0.1 },
                { x: width / 2 - 0.1, z: depth / 2 - 0.1 },
            ];

            legPositions.forEach((pos) => {
                const leg = new THREE.Mesh(legGeometry, legMaterial);
                leg.position.set(pos.x, -height / 2 + (height - 0.2) / 2, pos.z);
                furnitureGroup.add(leg);
            });

            const shelfGeometry = new THREE.BoxGeometry(width - 0.2, 0.1, depth - 0.2);
            const shelfMaterial = new THREE.MeshStandardMaterial({
                color: color,
                map: texture,
            });

            const shelf = new THREE.Mesh(shelfGeometry, shelfMaterial);
            shelf.position.y = -height / 2 + 1;
            furnitureGroup.add(shelf);
        };

        createFurniture();

        camera.position.z = 5;
        camera.position.y = 2;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();

            // Aplicar rotación al grupo del mueble
            furnitureGroup.rotation.x = rotationX;
            furnitureGroup.rotation.y = rotationY;
            furnitureGroup.rotation.z = rotationZ;

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mountNode.removeChild(renderer.domElement);
        };
    }, [width, height, depth, color, texture, rotationX, rotationY, rotationZ]);

    return (
        <div className="designer3d-container">
            <div className="controls">
                <label>
                    Ancho:
                    <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(validatePositiveNumber(parseFloat(e.target.value)))}
                        min="0"
                    />
                </label>
                <label>
                    Alto:
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(validatePositiveNumber(parseFloat(e.target.value)))}
                        min="0"
                    />
                </label>
                <label>
                    Profundidad:
                    <input
                        type="number"
                        value={depth}
                        onChange={(e) => setDepth(validatePositiveNumber(parseFloat(e.target.value)))}
                        min="0"
                    />
                </label>
                <label>
                    Color:
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </label>
                <label>
                    Rotación X:
                    <input
                        type="number"
                        value={rotationX}
                        onChange={(e) => setRotationX(parseFloat(e.target.value))}
                        step="0.1"
                    />
                </label>
                <label>
                    Rotación Y:
                    <input
                        type="number"
                        value={rotationY}
                        onChange={(e) => setRotationY(parseFloat(e.target.value))}
                        step="0.1"
                    />
                </label>
                <label>
                    Rotación Z:
                    <input
                        type="number"
                        value={rotationZ}
                        onChange={(e) => setRotationZ(parseFloat(e.target.value))}
                        step="0.1"
                    />
                </label>
            </div>
            <div ref={mountRef}></div>
        </div>
    );
};

export default Designer3D;