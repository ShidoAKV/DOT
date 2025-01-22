import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { motion, useInView } from 'framer-motion';

const ThreeScene = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let camera, scene, renderer;
    const loader = new GLTFLoader();

    const init = () => {
      // Set up camera
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);
      camera.position.z = 5;
      camera.rotation.z = 2;

      // Create scene
      scene = new THREE.Scene();

      // Add ambient light
      const light = new THREE.AmbientLight(0xffffff, 2);
      scene.add(light);

      // Load model
      loader.load("/scene.gltf", (gltf) => {
        let model = gltf.scene;
        model.scale.set(0.45, 0.45, 0.45);

        // GSAP animations for camera and model
        gsap.to(camera.position, {
          z: 1,
          duration: 1,
          ease: "back.out(1.8)",
        });

        gsap.to(camera.rotation, {
          z: 0,
          duration: 1,
        });

        gsap.to(model.rotation, {
          z: 1,
          duration: 1,
          delay: 1,
        });

        gsap.to(model.rotation, {
          z: Math.PI * 1.75,
          duration: 2,
          delay: 1,
        });

        gsap.to(model.scale, {
          delay: 1,
          duration: 1,
          x: 0.40,
          y: 0.40,
          z: 0.40,
        });

        gsap.to(model.position, {
          delay: 1,
          duration: 1,
          x:-0.6,
          y:0,
          z:0
        });

        gsap.to(model.rotation, {
          y: Math.PI * 1.75,
          duration: 2,
          delay: 1,
        });
       

        scene.add(model);
      });

      // Set up renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      // renderer.setClearColor('white', 1);

      if (containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
      }

      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize);

      // Animation loop
      const animate = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener("resize", handleResize);
        if (containerRef.current) containerRef.current.innerHTML = "";
      };
    };

    init();
  }, [isInView]);

  return (
    <div
      className="relative w-screen h-screen pr-7 z-50 border-b-2 "
    >
      {/* Three.js Canvas (fixed background) */}
      <div
        ref={containerRef}
        className="absolute top-0 left-0 right-0 w-full h-full  "
      />
    </div>
  );
};

export default ThreeScene;
