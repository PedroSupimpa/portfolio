import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create a group for all objects
    const group = new THREE.Group();
    scene.add(group);

    // Create geometric shapes
    const geometries = [
      new THREE.TetrahedronGeometry(1),
      new THREE.OctahedronGeometry(1),
      new THREE.IcosahedronGeometry(1),
      new THREE.DodecahedronGeometry(1),
    ];

    // Blue palette:
    // Main Blue: #3B82F6 (0x3B82F6)
    // Light Blue: #60A5FA (0x60A5FA)
    // Dark Blue: #2563EB (0x2563EB)
    const materials = [
      new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        roughness: 0.5,
        metalness: 0.8,
        wireframe: true,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x60a5fa,
        roughness: 0.3,
        metalness: 0.7,
        wireframe: true,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x2563eb,
        roughness: 0.7,
        metalness: 0.5,
        wireframe: true,
      }),
    ];

    // Create objects at random positions
    for (let i = 0; i < 8; i++) {
      const geometry =
        geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      // Random position in a spherical volume
      const radius = 3 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
      mesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
      mesh.position.z = radius * Math.cos(phi);

      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;

      // Random scale
      const scale = 0.3 + Math.random() * 0.5;
      mesh.scale.set(scale, scale, scale);

      group.add(mesh);
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x3b82f6, 1, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x2563eb, 1, 100);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Position camera
    camera.position.z = 8;

    // Animation loop
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Rotate the entire group
      group.rotation.x += 0.002;
      group.rotation.y += 0.003;

      // Rotate each object individually
      group.children.forEach((child, i) => {
        child.rotation.x += 0.01 * (i % 2 ? 1 : -1);
        child.rotation.y += 0.01 * (i % 3 ? 1 : -1);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;

      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeScene;
