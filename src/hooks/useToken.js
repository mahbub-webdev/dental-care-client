import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('')
    useEffect(()=>{
        const email = user?.user?.email;
        const currentUser = {email:email};
        if(email){
            fetch(`https://afternoon-inlet-07025.herokuapp.com/user/${email}`,{
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                const accessToken = data?.token;
                localStorage.setItem('access-token', accessToken)
                setToken(accessToken);
            })
        }
    },[user])
    return [token]
}
export default useToken