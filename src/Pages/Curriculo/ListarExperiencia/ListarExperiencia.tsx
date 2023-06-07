import React, { TableHTMLAttributes, useEffect, useState } from "react";
// import { Table, Column } from "../../../Components/Common/Table";
import { Experiencia, deleteExperiencia, getExperiencia } from "../../../Services/experienciaService";
import { useNavigate } from "react-router-dom";
import { Column, Table } from "../../../Components/Common/Table";

const ListarExperiencia: React.FC = () => {
   const navigate = useNavigate()
 
   const [experiences, setExperiences] = useState<Experiencia[]>([])
 
   const colums: Column<Experiencia>[] = [
     { header: "Titúlo", accessor: "titulo" },
     { header: "Descrição", accessor: "descricao" },
     { header: "Ano de início", accessor: "anoInicio" },
     { header: "Ano de fim", accessor: "anoFim" },
   ]
 
   const fetchExperiences = async () => {
     try {
       const experiences = await getExperiencia()
       setExperiences(experiences)
     } catch (error) {
       console.log("Erro ao buscar experiências", error)
     }
   }
 
   const handleEdit = (experience: Experiencia): void => {
     navigate("/curriculo/experiencia/atualizar", { state: experience })
   }
 
   const handleDelete = async (id: number): Promise<void> => {
     const confirmation = confirm("Deseja mesmo deletar esta experiência?")
     if (!confirmation) return
     try {
       await deleteExperiencia(id)
       setExperiences(experiences.filter((experience) => experience.id !== id))
       alert("Experiência deletada com sucesso!")
     } catch (error) {
       console.log("Erro ao deletar experiência", error)
       alert("Ocorreu um erro ao deletar experiência")
     }
   }

   const columns: Column<Experiencia>[] = [
    { header: "Título", accessor: "titulo" },
    { header: "Descrição", accessor: "descricao" },
    { header: "Tipo", accessor: "tipo" },
    { header: "Ano Início", accessor: "anoInicio" },
    { header: "Ano Fim", accessor: "anoFim" },
];
 
   useEffect(() => {
     fetchExperiences()
   }, [experiences])
 
   return (   
      <Table
      columns={columns}
      data={experiences}
      onEdit={handleEdit}
      onDelete={handleDelete}
  />
   )
     
 };
 
 export default ListarExperiencia;