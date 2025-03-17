import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom";


const useAuth = ()=>{

    const [authstate, setauthstate] = useState({isLoggedin : false, id:"", role:""})
    const [loading, setloading] = useState(true)

    useEffect(()=>{

        const id = localStorage.getItem("id")
        const role = localStorage.getItem("role")

        if (id && role){
            setauthstate({isLoggedin:true, id:id,role:role})
        }
            setloading(false)
    },[]);
    return {...authstate, loading};
}



const PrivateRoute = ()=>{

    const auth = useAuth();
    if (auth.loading) {
        return <h1>loading....</h1>
    } else {
        return auth.isLoggedin ? <Outlet/> : <Navigate to="/login"/>
    }

}

export default  PrivateRoute;