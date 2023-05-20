import React from "react";

import Styles from "./InformacoesCard.module.css";

import { Informacoes } from "../../../../Services/informacoesService";

interface InformacoesCardProps {
    informacoes: Informacoes;
}

const InformacoesCard: React.FC<InformacoesCardProps> = ({ informacoes }) => {
    const { foto, nome, cargo, resumo } = informacoes;

    return (
        <div className={Styles.container}>
            <img src={foto} alt={`${nome}"s foto`} className={Styles.foto} />
            <div className={Styles.content}>
                <h3 className={Styles.nome}>{nome}</h3>
                <p className={Styles.cargo}>{cargo}</p>
                <p className={Styles.resumo}>{resumo}</p>
            </div>
        </div>
    );
};

export default InformacoesCard;

