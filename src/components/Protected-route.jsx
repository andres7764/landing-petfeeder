import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/context";

export default function ProtectedRoute({ isAuthenticated, redirectPath = '/inicio' }) {
    const { appState } = useContext(AppContext);
    console.log("ProtectedRoute: isAuthenticated =", isAuthenticated, "appState =", appState);

    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
}