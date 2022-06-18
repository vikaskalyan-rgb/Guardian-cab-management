import { onAuthStateChanged } from "firebase/auth";
import { useState,useEffect,useContext,createContext } from "react";
import {auth} from '../Config/Firebase'
const Admin=createContext()
const AdminContext=({children})=>{
    const[user,setUser]=useState(null)
    const[alert,setAlert]=useState({
        open:false,
        message:'',
        type:'success'
    })

useEffect(()=>{
    return()=>{
        onAuthStateChanged(auth,user=>
            {
                if(user){
                    setUser(user)
                }
                else{
                    setUser(null)
                }
            })
    }
})
return(
    <Admin.Provider value={{user,setUser,alert,setAlert}}>
        {children}
    </Admin.Provider>
)}

export default AdminContext

export const UserState=()=>{
  return  useContext(Admin)
}