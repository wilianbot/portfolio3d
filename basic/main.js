import * as THREE from 'three';

// 1 - Create a scene
const scene: THREE.scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');
// 2 - Add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3 - Create and add a cube object 
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4 - Add a light
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

// 5 - Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6 - Animate the scene
renderer.render(scene, camera);