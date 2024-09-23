import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// render
const width = window.innerWidth;
const height = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// camera
const fov = 75;
const aspect = width / height;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();

const controls =new OrbitControls(camera ,renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor=0.03;

// object creation
const geo = new THREE.IcosahedronGeometry(1.0, 5);
const mat = new THREE.MeshStandardMaterial({
  color:0,
  flatShading:true
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const meshh = new THREE.Mesh(geo, mat);
scene.add(meshh);

const wire = new THREE.MeshBasicMaterial({
    color:0x0099ff,
    wireframe:true
})

const wireRed = new THREE.MeshBasicMaterial({
    color:0xaa5500,
    wireframe:true
})


const wireMesh = new THREE.Mesh(geo,wire);
wireMesh.scale.setScalar(1.0001)
mesh.add(wireMesh)

const wireRedd = new THREE.Mesh(geo,wireRed);
wireRedd.scale.setScalar(1.1)
meshh.add(wireRedd)


// light

const hemiLight = new THREE.HemisphereLight(0x0099ff ,0xaa5500)
scene.add(hemiLight)

function animate(t=0) {
    requestAnimationFrame(animate)
    mesh.rotation.y=t*0.0001;
    meshh.rotation.x=t*0.0001;
  renderer.render(scene, camera);
  controls.update();
}
animate();
