// ** Imports do React 
import React, { useEffect } from "react";

// ** Imports de pacotes
import { useNavigate } from "react-router-dom";

// ** Imports de componentes
import { Table, Column } from "../../../Components/Common/Table/Table";

// ** Imports de serviços
import { 
    Experiencia, 
    deleteExperiencia, 
    getExperiencias 
} from "../../../Services/experienciaService";

const ListarExperiencia: React.FC = () => {
    const navigate = useNavigate();
    const [experiencias, setExperiencias] = React.useState<Experiencia[]>([]);

    const fetchExperiencias = async () => {
        try {
            const experiencias = await getExperiencias();
            setExperiencias(experiencias);
        } catch (error) {
            console.log("Erro ao buscar experiências", error);
        }
    };

    useEffect(() => {
        fetchExperiencias();
    }, []);

    const handleEdit = (experiencia: Experiencia) => {
        navigate("/curriculo/experiencia/atualizar", { state: experiencia });
    };

    const handleDelete = async (experiencia: Experiencia) => {
        try {
            await deleteExperiencia(experiencia.id);
            fetchExperiencias();
            alert("Experiência excluída com sucesso!");
        } catch (error) {
            console.log("Erro ao excluir experiência", error);
            alert("Ocorreu um erro ao excluir a experiência");
        }
    };

    const columns: Column<Experiencia>[] = [
        { header: "Título", accessor: "titulo" },
        { header: "Descrição", accessor: "descricao" },
        { header: "Tipo", accessor: "tipo" },
        { header: "Ano Início", accessor: "anoInicio" },
        { header: "Ano Fim", accessor: "anoFim" },
    ];

    return (
        <Table
            columns={columns}
            data={experiencias}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    );
};

export default ListarExperiencia;