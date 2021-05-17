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

const loader = new GLTFLoader();

loader.load(
    "path/to/model.glb",
    function (gltf) {
        scene.add(gltf.scene);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);
