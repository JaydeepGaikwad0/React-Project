import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    let auth = { 'token': localStorage.getItem('token') || null };

    return (
        auth.token ? <Outlet /> : <Navigate to="/Login" />
    )
}
export default ProtectedRoute
