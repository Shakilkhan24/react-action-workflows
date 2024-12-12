import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sudoo from './Sudo.jsx'
import DictionaryDisplay from './js.jsx'
// import Greeting from './login.jsx'
// import Cond from './cond.jsx'
import PrimeNumbers from './Prime.jsx'

const isLoggedIn=true;
let number=2;
createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Sudoo />
    <DictionaryDisplay />
    {/* <Greeting isLoggedIn={isLoggedIn}/>
    <Cond number={number} /> */}
    <PrimeNumbers />
  </>

)
