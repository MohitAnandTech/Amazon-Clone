import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyChIIqzGdx0LmewFJs-qrNkk3UgPx5zKMs',
	authDomain: 'clone-69a05.firebaseapp.com',
	databaseURL: 'https://clone-69a05.firebaseio.com',
	projectId: 'clone-69a05',
	storageBucket: 'clone-69a05.appspot.com',
	messagingSenderId: '85291874413',
	appId: '1:85291874413:web:7cc58a0100060514ffe764',
	measurementId: 'G-NTLDV7TVLY'
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
