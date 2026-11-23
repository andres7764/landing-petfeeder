import { createContext, useState } from "react";

export const AppContext = createContext();
export const CartContext = createContext();
//create a context provider component
export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [appState, setAppState] = useState({ user: null, isAuthenticated: false, theme: "light" });
    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            <CartContext.Provider value={{ cart, setCart }}>

                {children}
            </CartContext.Provider>
        </AppContext.Provider>
    );
};

//export const useApp = () => useContext(AppContext);
//export const useCart = () => useContext(CartContext);
