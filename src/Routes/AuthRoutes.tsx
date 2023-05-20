import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import ListarPortfolio from "../Pages/Portfolio/ListarPortfolio";
import ListarExperiencia from "../Pages/Curriculo/ListarExperiencia";
import ManipularProjeto from "../Pages/Portfolio/ManipularProjeto";
import ManipularInformacoes from "../Pages/Curriculo/ManipularInformacoes";
import ManipularExperiencia from "../Pages/Curriculo/ManipularExperiencia";

import Layout from "../Components/Layout";

import { useAuth} from "../Contexts/AuthContext";

const AppRoutes: React.FC = () => {
    const { authenticated, isLoading } = useAuth(); 
    if (isLoading) {
        return <p>Carregando...</p>
    }
    if (!authenticated) {
        return <Navigate to="/login" />
    }
    return(
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Curriculo/informacoes" element={<ManipularInformacoes />} />
                <Route path="/Curriculo/experiencia/cadastrar" element={<ManipularExperiencia />} />
                <Route path="/Curriculo/experiencia/atualizar" element={<ManipularExperiencia />} />
                <Route path="/Curriculo/experiencia/listar" element={<ListarExperiencia />} />
                <Route path="projeto/cadastrar" element={<ManipularProjeto />} />
                <Route path="projeto/atualizar" element={<ManipularProjeto />} />
                <Route path="projeto/listar" element={<ListarPortfolio />} />
            </Routes>
        </Layout>
    );
};

export default AppRoutes;

