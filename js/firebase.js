// Configuración de Firebase
const firebaseConfig = {
//reemplazar este bloque
};

// Inicializar la app de Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db; //es la unica que exporto porque es la que se va a usar afuera