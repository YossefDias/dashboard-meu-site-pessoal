import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

import Form from "../../../Components/Forms/Form";
import Input from "../../../Components/Forms/Input";
import Button from "../../../Components/Common/Button";
import Title from "../../../Components/Common/Title";

import { Projeto, createOrUpdateProjeto } from "../../../Services/portfolioService";

const ManipularProjeto = () => {
    const navigate = useNavigate();
    const portfolio = useLocation().state as Projeto;

    const initialValues: Projeto = {
        link: "",
        image: "",
        titulo: ""

    };

    const validationSchema = Yup.object().shape({
        link: Yup.string().required("Campo obrigatório"),
        image: Yup.string().required("Campo obrigatório"),
        title: Yup.string().required("Campo obrigatório"),
    });

    const onSubmit = async (values: Projeto, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdateProjeto(values);
            resetForm();
            navigate("/Portfolio/Listar");
            alert("Formulário enviado com sucesso!");
        } catch (error) {
            alert("Erro ao enviar o formulário");
        }

    };

    return (
        <Form
            initialValues={portfolio || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <>
                    {
                        !portfolio ?
                            <Title>Cadastrar Projeto</Title>
                            :
                            <Title>Atualizar Projeto</Title>
                    }

                    <Input
                        label="Titulo"
                        name="titulo"
                        errors={errors.title}
                        touched={touched.title}
                    />

                    <Input
                        label="imagem"
                        name="image"
                        errors={errors.image}
                        touched={touched.image}
                    />

                    <Input
                        label="Link"
                        name="link"
                        errors={errors.link}
                        touched={touched.link}
                    />
                    <Button type="submit">Enviar</Button>
                </>
            )}
    
    </Form >

);
};

export default ManipularProjeto;