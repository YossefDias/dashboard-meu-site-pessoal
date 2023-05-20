import React from "react";

import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import Styles from "./Login.module.css";

import Form from "../../Components/Form/Form";
import Input from "../../Components/Forms/Input";
import Button from "../../Components/Common/Button";
import Title from "../../Components/Common/Title";

import { LoginData, login as loginService } from "../../Services/authService";

import { useAuth } from "../../Providers/Auth";


const Login: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const initialValues: LoginData = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("E-mail inválido")
            .required("E-mail obrigatório"),
        password: Yup.string()
        .min(6, "A senha deve conter pelo menos 6 caracteres")
        .required("Senha obrigatória")
    });

    const onSubmit = async (values: LoginData) => {
        try {
     const user = await loginService(values);
     login(user);
     navigate("/");
        } catch (error) {
            alert ("Erro ao fazer login");
        }
    };

    return (
        <div className={Styles.loginWrapper}>
            <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
    {({ errors, touched }) => (
        <>
            <Title>Meu site pessoal</Title>
            <Input
                label="E-mail"
                name="email"
                type="email"
                errors={errors.touched}
                touched={touched.email}
            />
            <Input
                label="Password"
                name="password"
                type="password"
                errors={errors.touched}
                touched={touched.password}
            />
            <Button type="submit">Entrar</Button>
        </>
    )}
    </Form>
    </div>
    );
    };

    export default Login;