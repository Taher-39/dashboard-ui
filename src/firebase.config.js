import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCghsNPM_PPAa1t7K3tKMtYnPPxVVXnpXM",
  authDomain: "dashboard-app-9afc8.firebaseapp.com",
  projectId: "dashboard-app-9afc8",
  storageBucket: "dashboard-app-9afc8.appspot.com",
  messagingSenderId: "967767550234",
  appId: "1:967767550234:web:62d69eb366da4170f3e4a3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
