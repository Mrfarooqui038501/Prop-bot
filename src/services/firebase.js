import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDlPJoo6qcie_-GszQ_oEhOBFnn4q1Lkwg",
  authDomain: "propbot-real-estate-bdff3.firebaseapp.com",
  projectId: "propbot-real-estate-bdff3",
  storageBucket: "propbot-real-estate-bdff3.appspot.com",  // ✅ FIXED
  messagingSenderId: "158397263908",
  appId: "1:158397263908:web:406e0243c168aa8978a8b1",
  measurementId: "G-W9VNPQQD1R"
};


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app