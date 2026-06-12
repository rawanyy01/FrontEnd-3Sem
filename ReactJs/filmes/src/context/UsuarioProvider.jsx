import { useEffect, useState } from "react";
import { UsuarioContext } from "./UsuarioContext";

const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            setUsuario(true);
        }
    }, []);

    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    );
};

export default UsuarioProvider;