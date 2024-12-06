import * as THREE from 'three';

const canvas = document.getElementById('canvas');

// 1. Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

// 2. Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({ color: "#468585" });
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2 );
const boxMaterial = new THREE.MeshBasicMaterial({ color: "#B4B4B3"});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Renderer
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);

function animate() {
  requestAnimationFrame(animate);
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}

animate();