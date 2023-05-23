import React from 'react'
import { initializeApp } from "firebase/app"
import { getDatabase, ref } from "firebase/database";
import Form from './components/Form';
import Fänge from './components/Fänge';

function App() {

  const firebaseConfig = {
    databaseURL: "https://fangtagebuch-6db8d-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: 'gs://fangtagebuch-6db8d.appspot.com',
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const fängeInDB = ref(database,"fänge")



  return (
    <div>
      <h1 style={{textAlign:"center"}}>Fangtagebuch</h1>
      <Form fängeInDB={fängeInDB}/>
      <Fänge fängeInDB={fängeInDB} database={database}/>
    </div>

  )
}

export default App
