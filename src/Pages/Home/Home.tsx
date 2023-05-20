import React, { useEffect, useState } from 'react';

import Styles from './Home.module.css';

import { FaGraduationCap, Fabriefcase, FaFolder } from 'react-icons/fa';

import Title from '../../Components/Title/Title';
import InfoBox from '../../Components/InfoBox/InfoBox';

import { Projeto, getPortfolios } from '../../Services/portfolioService';
import { Experiencia, getExperienciasByTipo } from '../../Services/experienciaService';

const Home = () => {
    const [experienciasAcademicas, setExperienciasAcademicas] = useState<Experiencia[]>([]);
    const [experienciasProfissionais, setExperienciasProfissionais] = useState<Experiencia[]>([]);
    const [portfolios, setPortfolios] = useState<Projeto[]>([]);

    const fetchExperienciasAcademicas = async () => {
        try {
            const response = await getExperienciasByTipo("academico");
            setExperienciasAcademicas(response);
        } catch (error) {
            console.log(error);
        }
    };

     const fetchExperienciasProfissionais = async () => {
        try {
            const response = await getExperienciasByTipo("profissional");
            setExperienciasProfissionais(response);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchPortfolios = async () => {
        try {
            const response = await getPortfolios();
            setPortfolios(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchExperienciasAcademicas();
        fetchExperienciasProfissionais();
        fetchPortfolios();
    }, []);

    return (
       <main className={Styles.container}>
         <Title className={styles.title}>Bem-vindo ao Sistema Admin do Meu Site Pessoal" </Title>
         <p>Esse é o Dashboard do site onde você encontra algumas estatísticas de cadastro.</p>
         <div className={styles.inforBoxContainer}>
            <InfoBox
                title="Experiencias Academicas"
                value={experienciasAcademicas.length}
                icon={<FaGraduationCap size={65}/>}
                />

            <InfoBox
                 title="Experiencias Profissionais"
                 value={experienciasProfissionais.length}
                 icon={<Fabriefcase/>}
                 />

            <InfoBox
                 title="Projetos no Portfólio"
                 value={portfolios.length}
                 icon={<FaFolder/>}
                 />
         </div>
       </main>
    );
};

export default Home;