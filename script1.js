//Création de la scene
const scene = new THREE.Scene();
//Création de la caméra (fov en degrés, rapport hauteur / largeur, dist min de rendu, dist max de rendu)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//Création du moteur de rendu
const renderer = new THREE.WebGLRenderer();
//Adaptation du moteur de rendu à la fenêtre
renderer.setSize(window.innerWidth, window.innerHeight);
//Ajout du moteur de rendu à la page
document.body.appendChild(renderer.domElement);
//Créatio d'un objet qui contient tous les sommets et faces du cube
const geometry = new THREE.BoxGeometry();
//Création du matérieau de remplissage de la forme
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//Création d'une forme géométrique
const cube = new THREE.Mesh(geometry, material);
//Ajout de la forme à la page
scene.add(cube);
//Positionement de la caméra
camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);
    //Rendre le model 3d
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
};
animate();
