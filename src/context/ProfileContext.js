import { createContext, useState, useEffect } from "react";
import genericProfile from "../assets/exemplo_perfil.jpg"


export const ProfileContext = createContext({});

export const ProfileProvider = (props) => {

    const [profile, setProfile] = useState ({
        
        })
        
        useEffect (()=>{
            const imgProfile = localStorage.getItem("img")
           
            if (imgProfile){
                
              setProfile(`"${imgProfile}"`)
            } else {
              setProfile({genericProfile})
            }
            
          },[])
    
    return(
        <ProfileContext.Provider value = {{profile, setProfile}}>
            {props.children}
        </ProfileContext.Provider>
    )
}