import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyA0fbwhCP64VVxOpb4q2bdq5utAbH1c1KA',
    authDomain: 'robinhood-41810.firebaseapp.com',
    projectId: 'robinhood-41810',
    storageBucket: 'robinhood-41810.appspot.com',
    messagingSenderId: '465579135165',
    appId: '1:465579135165:web:c7ad0f2adb85ebe48fa7d4',
    measurementId: 'G-F4TL0K44PT',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
