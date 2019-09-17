import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebasei.initializeApp({
  apiKey: "AIzaSyCTZ5tXtTTskFMTRKnnrHNpTNL5L2G5Wf8",
  authDomain: "react-hooks-tutorial-todoist.firebaseapp.com",
  databaseURL: "https://react-hooks-tutorial-todoist.firebaseio.com",
  projectId: "react-hooks-tutorial-todoist",
  storageBucket: "react-hooks-tutorial-todoist.appspot.com",
  messagingSenderId: "1088128086377",
  appId: "1:1088128086377:web:2d5a09095a7113f5084df8"
})

export { firebaseConfig as firebase }
