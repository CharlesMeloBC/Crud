import React, { Component } from "react";
import Main from '../template/Main'

const headerProps = {
    icon:'users',
    title:'Usuários',
    subtitle:'Cadastro de usuários: Incluir, listar, Alterar e Excluir'
}


export default class Usuario extends Component {
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de Usuario
            </Main>
        )
    }
}