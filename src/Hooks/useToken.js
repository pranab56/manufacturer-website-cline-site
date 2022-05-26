import { useEffect, useState } from "react"

const useToken=user=>{
    const [token,setToken]=useState('');
    useEffect(()=>{
        const email=user?.user.email;
        const currentUser={email:email};
        if(email){
            fetch(`https://protected-headland-11600.herokuapp.com/users/${email}`,{
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(currentUser),
                })
                .then(response => response.json())
                .then(data => {
                  const accessToken=data.token;
                  
                  localStorage.setItem('accessToken',accessToken)
                  setToken(accessToken)
                  
                 
                  
            
            })
        }
    },[user])
    return [token]
}
export default useToken;