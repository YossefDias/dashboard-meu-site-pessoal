import React, { useEffect, useState } from "react";

import * as Yup from "yup";
import { AxiosError } from "axios";

import Form from "../../../Components/Forms/Form";
import Input from "../../../Components/";
import Button from "../../../Components/Button/Button";
import Title from "../../../Components/Title/Title";
import InformacoesCard from "./InformacoesCard";
import Textarea from "../../../Components/Forms/Textarea/Textarea";

import {
    informacoes,
    getInformacoes,
    deleteInformacoes,
    createOrUpdateInformacoes,
} from "../../../Services/informacoes";

import Styles from "./ManipularInformacoes.module.css";

const ManipularInformacoes: React.FC = () => {
    const [informacoesState, setInformacoesState] = useState<Informacoes>();

    const initialValues: Informacoes = {
        foto: "",
        nome: "",
        cargo: "",
        resumo: "",

    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required("Campo obrigatório"),
        nome: Yup.string().required("Campo obrigatório"),
        cargo: Yup.string().required("Campo obrigatório"),
        resumo: Yup.string().required("Campo obrigatório"),

    });

    const fetchInformacao = async () => {
        try {
            const Informacao = await getInformacoes();
            setInformacoes(Informacao);
        } catch (error) {
            if (error instanceof AxiosError) {
            if (error.response?.status !== 404) {
                console.error ("Erro ao buscar informações", error);
            }

        } else {
            console.error ("Ocorreu um erro desconhecido ao buscar informações", error);
        }

        }
    };

    useEffect(() => {
        fetchInformacao();
    }, []);

    const onSubmit = async (values: Informacoes) => {
        try {
            await createOrUpdateInformacoes(values);
            setInformacoes(values);
            alert ("Formulario enviado com sucesso!");
        } catch (error) {
         console.error ("Erro ao enviar formulário", error);
         alert("Ocorreu um erro ao enviar formulário, tente novamente!");
            }
    };

    return (
        <div className={styles.container}>

            <Form 
            initialValues={Informacoes || initialValues}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>

            {({ errors, touched }) => (
                <>
                <Title> Informações </Title>
                <Input
                    label="Foto"
                    name="foto"
                    errors={errors.foto}
                    touched={touched.foto}
                    />

                <Input
                    label="Nome"
                    name="nome"
                    errors={errors.nome}
                    touched={touched.nome}
                    />

                <Input
                    label="Cargo"
                    name="cargo"
                    errors={errors.cargo}
                    touched={touched.cargo}
                    />

                <Input
                    label="Resumo"
                    name="resumo"
                    errors={errors.resumo}
                    touched={touched.resumo}
                    />

                <Textarea 
                    label="Resumo"
                    name="resumo"
                    errors={errors.resumo}
                    touched={touched.resumo}
                    />

                <Button type="submit">Salvar</Button>
                    
                </>
                
            )}
            </Form>

            {informacoesState && 
                <div className={styles.card}>
                    <InformacoesCard informacoes={informacoes} />
                    <Button onClick={handleDelete} red>Deletar</Button>
                </div>
}


        </div>

    );
};

export default ManipularInformacoes;