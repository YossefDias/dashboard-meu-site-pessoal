import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
    Table,
    Colum
} from "../../../Components/Common/Table/Table";

import {
    Projeto,
    deleteProjeto,
    getPortfolio
} from "../../../Services/portfolioService";

const ListarPortfolio: React.FC = () => {
    const navigate = useNavigate();
    const [portfolio, setPortfolio] = useState<Projeto[]>([]);
    
    const fetchPortfolio = async () => {
        try {
            const portfolio = await getPortfolio();
            setPortfolio(portfolio);
        } catch (error) {
            console.log(error);
            alert("Erro ao carregar os portfólio!");
        }
    };
    useEffect(() => {
        fetchPortfolio();
    }, []);
    const handleDelete = async (portfolio: Projeto) => {
        try {
            await deleteProjeto(portfolio.id);
            fetchPortfolio();
            alert("Portfólio excluido com sucesso!");
        } catch (error) {
            console.log(error);
            alert("Erro ao excluir o portfólio!");
        }
    };
    const columns: Column<Projeto>[] = [
        { header: "Titulo", acessor: "title" },
        { header: "imagem", acessor: "image" },
        { header: "Link", acessor: "link" },
    ];
    return (
        <Table 
        columns={columns}
        data={portfolio}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        />
    );
};
    
export default ListarPortfolio;