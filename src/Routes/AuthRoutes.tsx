import Layout from "../Components/Layout";

import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import CadastrarInformacoes from "../Pages/Curriculo/ManipularInformacoes/";
import CadastrarExperiencia from "../Pages/Curriculo/CadastrarExperiencia";
import ListaPortfolio from "../Pages/Portfolio/ListarPortfolio";
import CadastrarPortfolio from "../Pages/Portfolio/CadastrarPortfilio/CadastrarPortfolio";
import ListaExperiencia from "../Pages/Curriculo/ListarExperiencia";
import { useAuth } from "../Context/AuthContext";
import React from "react";

const AppRoutes: React.FC = () => {
   const { authenticated, isLoading } = useAuth();

   if (isLoading) {
      return <h1>Carregando...</h1>;
   }

   if (!authenticated) {
      return <Navigate to="/login" />;
   }

   return (
      <Layout>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes />} />
            <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia />} />
            <Route path="/portfolio/listagem" element={<ListaPortfolio />} />
            <Route path="/portfolio/cadastro" element={<CadastrarPortfolio />} />
            <Route path="/curriculo/experiencia/lista" element={<ListaExperiencia />} />
         </Routes>
      </Layout>
   );
};

export default AppRoutes;
