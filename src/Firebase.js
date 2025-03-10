import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCSNkfsS2gd3Dd9Yc1_XzUEy2gUCrB71fQ",
    authDomain: "plataformacarpinteria-b3a3d.firebaseapp.com",
    projectId: "plataformacarpinteria-b3a3d",
    storageBucket: "plataformacarpinteria-b3a3d.firebasestorage.app",
    messagingSenderId: "1015676901478",
    appId: "1:1015676901478:web:fc97279db4e5b5ac5af5a7",
    measurementId: "G-2NJDE74LB7"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
