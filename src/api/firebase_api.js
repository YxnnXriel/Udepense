import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDLSNFP4nhNxqJQbON9H-PsvOBXOwZCDk4",
  authDomain: "udepense-5e938.firebaseapp.com",
  projectId: "udepense-5e938",
  storageBucket: "udepense-5e938.appspot.com",
  messagingSenderId: "642710766745",
  appId: "1:642710766745:web:029875e4e11e1fd4e3a408",
  measurementId: "G-GBCQPNLZMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
