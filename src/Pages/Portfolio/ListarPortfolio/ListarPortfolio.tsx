import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
    Table,
    Column
} from "../../../Components/Common/Table/Table";

import {
    Portfolio,
    deletePortfolio,
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
    const handleDelete = async (portfolio: Portfolio) => {
        try {
            await deletePortfolio(portfolio.id);
            fetchPortfolio();
            alert("Portfólio excluido com sucesso!");
        } catch (error) {
            console.log(error);
            alert("Erro ao excluir o portfólio!");
        }
    };
    const columns: Column<Portfolio>[] = [
        { header: "Titulo", accessor: "titulo" },
        { header: "imagem", accessor: "imagem" },
        { header: "Link", accessor: "link" },
    ];
    return (
        <Table 
        columns={columns}
        data={portfolio}
        // handleEdit={handleEdit}
        // handleDelete={handleDelete}
        onEdit={handleEdit}
      onDelete={handleDelete}
        />
    );
};
    
export default ListarPortfolio;