import * as THREE from '../../node_modules/three/src/Three.js';
import { BloomEffect, EffectComposer, EffectPass, RenderPass }
	from "../../node_modules/postprocessing/build/postprocessing.js";

//Setup
const scene = new THREE.Scene(); 
//Fov, aspect ratio, near and far clipping planes
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
	powerPreference: "highPerformance",
	antialias : false,
	stencil : false,
	depth : false
});


const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new EffectPass(camera, new BloomEffect()));


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Define a mesh
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const cube = new THREE.Mesh( geometry, material );

//Define a line
const points = [];
const lineMat = new THREE.LineBasicMaterial( { color: 0x0000ff } );
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
const lineMesh = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( lineMesh, material );

scene.add( cube );
scene.add(line);

camera.position.z = 5;



//Loop function
function animate() {

    let frequency = 0.01;
    cube.rotation.x += Math.sin(1) * frequency;
    cube.rotation.y += Math.sin(1) * frequency;

    if (Math.random() >= 0.99){
        cube.position.x = Math.random() * 5;
        cube.position.y = Math.random() * 5;
    }

    cube.position.z = Math.sin(1) * frequency;

    line.position.y -= frequency;

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

requestAnimationFrame(function render() {

	requestAnimationFrame(render);
	composer.render();

});

//Run
animate();
