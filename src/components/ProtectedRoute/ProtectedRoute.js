import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children, redirectTo})=> {
    const user = useSelector(state=> state.user.currentUser.user);
    console.log(user.verifiel)

    return !user?.verifiel ? (
        children
    ) : (
        <Navigate to={redirectTo}/>
    )
}   

export default ProtectedRoute;