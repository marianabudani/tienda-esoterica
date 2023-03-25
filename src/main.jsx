import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app"
import { ChakraProvider } from '@chakra-ui/react'
const firebaseConfig = {
  apiKey: "AIzaSyDRZcUbfHNF09-rhrnAG4df_5EcUvt4Vxc",
  authDomain: "tienda-react-914d4.firebaseapp.com",
  projectId: "tienda-react-914d4",
  storageBucket: "tienda-react-914d4.appspot.com",
  messagingSenderId: "209341789988",
  appId: "1:209341789988:web:8dda029a746809bb1ba5b1"
};

initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
