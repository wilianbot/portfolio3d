import * as THREE from 'three';

// 1 - Criar uma cena
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F');

// 2 - Adicionar a câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3 - Criar e adicionar um objeto cubo
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4 - Adicionar uma luz
const light = new THREE.PointLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

// 5 - Configurar o renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6 - Loop de animação
function animate() {
    requestAnimationFrame(animate);

    // Rotação do cubo para visualização
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Iniciar animação
animate();
