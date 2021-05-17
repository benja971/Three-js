//Création de la scene
const scene = new THREE.Scene();
//Création de la caméra (fov en degrés, rapport hauteur / largeur, dist min de rendu, dist max de rendu)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);
//Création du moteur de rendu
const renderer = new THREE.WebGLRenderer();
//Adaptation du moteur de rendu à la fenêtre
renderer.setSize(window.innerWidth, window.innerHeight);
//Ajout du moteur de rendu à la page
document.body.appendChild(renderer.domElement);

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

const points = [];
points.push(new THREE.Vector3(-10, 50, 0));
points.push(new THREE.Vector3(0, 40, 0));
points.push(new THREE.Vector3(10, 50, 0));
points.push(new THREE.Vector3(0, 40, 0));
points.push(new THREE.Vector3(-10, 50, 0));
points.push(new THREE.Vector3(0, 50, 10));
points.push(new THREE.Vector3(10, 50, 0));
points.push(new THREE.Vector3(0, 50, -10));
points.push(new THREE.Vector3(-10, 50, 0));
points.push(new THREE.Vector3(0, 60, 0));
points.push(new THREE.Vector3(10, 50, 0));
points.push(new THREE.Vector3(0, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene, camera);

let y = 0,
    v = 0.5;

function rotate() {
    requestAnimationFrame(rotate);
    camera.position.set(0, y, 100);
    renderer.render(scene, camera);
    if (y == 100 || y == -5) {
        v = -v;
    }
    y += v;
}

rotate();
