//Setup
const scene = new THREE.Scene(); 
//Fov, aspect ratio, near and far clipping planes
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Define a mesh
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const cube = new THREE.Mesh( geometry, material );

//const loader = new OBJLoader();ath.sin(1) * frequency;
/*
loader.load(
	// resource URL
	"../models/Buster_Sword.obj",
	// called when resource is loaded
	function ( object ) {

		scene.add( object );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
*/

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

//Run
animate();
