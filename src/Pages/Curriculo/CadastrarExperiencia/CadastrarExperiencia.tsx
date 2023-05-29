import React from "react";

import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

import Form from "../../../Components/Forms/Form";
import Input from "../../../Components/Forms/Input";
import Select from "../../../Components/Forms/Select";
import Button from "../../../Components/Common/Button/Button";
import Textarea from "../../../Components/Forms/Textarea";
import Title from "../../../Components/Common/Title";

import { Experiencia, createOrUpdateExperiencia } from "../../../Services/experienciaService";

const ManipularExperiencia: React.FC = () => {
    const navigate = useNavigate();
    const experiencia= useLocation().state as Experiencia;

    const initialValues: Experiencia = {
        titulo: "",
        descricao: "",
        tipo: "",
        anoInicio: "",
        anoFim: "",
    };

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required("Campo obrigatório"),
        descricao: Yup.string().required("Campo obrigatório"),
        tipo: Yup.string().required("Campo obrigatório"),
        anoInicio: Yup.number().required("Campo obrigatório").typeError("Um número é obrigátorio"),
        anoFim: Yup.number().required("Campo obrigatório").typeError("Um número é obrigátorio"),
    });

    const onSubmit = async (values: Experiencia, { resetForm }: { resetForm: () => void; }) => {
        try {
            await createOrUpdateExperiencia(values);
            resetForm();
            navigate("/curriculo/experiencias/listar");
            alert("Formulario enviado com sucesso!");
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro ao enviar o formulario!");
        }        
    };

    return (
        <Form
        initialValues={experiencia || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <>
                {
                    !experiencia ?
                    <Title> Cadastrar Experiencia</Title>
                    :
                    <Title>Atualizar Experiencia</Title>
                }

                <Input
                      label="Título"
                      name="titulo"
                     errors={errors.titulo}
                     touched={touched.titulo}
                />

                <Input
                      label="Ano Início"
                      name="anoInicio"
                      type="number"
                      errors={errors.anoInicio}
                      touched={touched.anoInicio}
                />

                <Input
                      label="Ano Fim"
                      name="anoFim"
                      type="number"
                      errors={errors.anoFim}
                      touched={touched.anoFim}
                /> 

                <Select
                      label="Tipo de experiência"
                      name="tipo"
                      options={[
                        { value: "profissional", label: "Profissional" },
                        { value: "academico", label: "Acadêmico" },
                      ]}
                      errors={errors.tipo}
                      touched={touched.tipo}
                />

                <Textarea
                      label="Descrição"
                      name="descricao"
                      errors={errors.descricao}
                      touched={touched.descricao}
                />

                <Button type="submit">Salvar</Button>
                </>  
            )}
            </Form>
    );

    }

    export default ManipularExperiencia;