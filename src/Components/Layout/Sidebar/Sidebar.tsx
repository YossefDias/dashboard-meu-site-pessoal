import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.scss";

import { useAuth } from "../../../Context/AuthContext";

const Sidebar = () => {
    const { logout } = useAuth();
    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigation}>
                
                <ul>
                <li>
                    <NavLink to="/"><h3>Home</h3>
                    </NavLink>
                </li>
                </ul>

                <h3>Currículo</h3>
                <ul>
                    <li>
                        <NavLink to="/Curriculo/informacoes">
                            Informações
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Curriculo/experiencia/cadastrar">
                            cadastrar Experiência
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Curriculo/experiencia/listar">
                            Listar Experiências
                        </NavLink>
                    </li>
                    </ul>
                 <h3>Portfólio</h3>
                 <ul>
                    <li>
                        <NavLink to="/Projeto/cadastrar">
                            Cadastrar Projeto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio/listar">
                            Listar Portfólio
                        </NavLink>
                    </li>
                 </ul>
                 <ul>
                    <li>
                        <NavLink onClick={logout} to="/login"> 
                        <h3>Logout</h3>
                        </NavLink>
                    </li>
                 </ul>
            </nav>
        </div>
    );
};

export default Sidebar;