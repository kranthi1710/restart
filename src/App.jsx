import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userlist from './components/Userlist'

function App() {
  const [users, setUsers]=useState([])
  const [userName,setUserName]=useState("")
   const [email,setEmail]=useState("")

   const handleUsers=(e)=>{
   if(!userName.trim()) return;
   setUsers(prev=>[...users,userName])
   setUserName('')
   }
 
  return (
   <>
   <p>{userName}</p>
   <input type="text" value={userName} onChange={e=>setUserName(e.target.value)}/>
    <p>{email}</p>
   <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
   <button onClick={handleUsers}>Add</button>
   <Userlist users={users}/>
   </>
  );
}

export default App
