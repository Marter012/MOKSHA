import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const useRedirect = (redirectTo)=> {
    const user = useSelector(state=> state.user?.currentUser?.user)

    const navigate = useNavigate();

    useEffect(() => {
        if(user?.verifiel){
            navigate(redirectTo)
        }
    }, [navigate,redirectTo,user])
    
};

export default useRedirect;