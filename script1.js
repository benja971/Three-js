//Création de la scene
const scene = new THREE.Scene();
//Création de la caméra (fov en degrés, rapport hauteur / largeur, dist min de rendu, dist max de rendu)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);
//Création du moteur de rendu
const renderer = new THREE.WebGLRenderer();
//Adaptation du moteur de rendu à la fenêtre
renderer.setSize(window.innerWidth, window.innerHeight);
//Ajout du moteur de rendu à la page
document.body.appendChild(renderer.domElement);
//Créatio d'un objet qui contient tous les sommets et faces du cube
const geometry = new THREE.BoxGeometry();
//Création du matérieau de remplissage de la forme
const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material2 = new THREE.LineBasicMaterial({ color: 0xff0000 });
const material3 = new THREE.LineBasicMaterial({ color: 0xff0000 });

const points = [];
points.push(new THREE.Vector3(-1, -1, -1));
points.push(new THREE.Vector3(1, -1, -1));
points.push(new THREE.Vector3(1, 1, -1));
points.push(new THREE.Vector3(-1, 1, -1));
points.push(new THREE.Vector3(-1, -1, -1));
points.push(new THREE.Vector3(-1, -1, 1));
points.push(new THREE.Vector3(1, -1, 1));
points.push(new THREE.Vector3(1, 1, 1));
points.push(new THREE.Vector3(-1, 1, 1));
points.push(new THREE.Vector3(-1, -1, 1));
points.push(new THREE.Vector3(-1, 1, 1));
points.push(new THREE.Vector3(-1, 1, -1));
points.push(new THREE.Vector3(1, 1, -1));
points.push(new THREE.Vector3(1, 1, 1));
points.push(new THREE.Vector3(1, -1, 1));
points.push(new THREE.Vector3(1, -1, -1));

//Création d'une forme géométrique
const cube = new THREE.Mesh(geometry, material1);
const geometry2 = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry2, material2);

//Ajout de la forme à la page
scene.add(cube);
scene.add(line);

const animate = function () {
    requestAnimationFrame(animate);
    //Rendre le model 3d
    renderer.render(scene, camera);
    geometry2.rotateX(0.01);
    geometry2.rotateY(0.01);
    geometry2.rotateZ(0.01);

    cube.rotateX(-0.01);
    cube.rotateY(-0.01);
    cube.rotateZ(-0.01);
};
animate();
