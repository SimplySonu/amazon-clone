import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyBLQcKS0g41g9gV6FVTIucXyZSOGUzZ5b4",
	authDomain: "clone-4e51c.firebaseapp.com",
	projectId: "clone-4e51c",
	storageBucket: "clone-4e51c.appspot.com",
	messagingSenderId: "618863605586",
	appId: "1:618863605586:web:bd315dedb7a4dcc21eac8b",
	measurementId: "G-FBTGL5CJWR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth(firebaseApp);
