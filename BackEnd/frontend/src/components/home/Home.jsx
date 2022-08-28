import Main from "../template/Main";
import React from "react";

function Home (props){
    return(
        <Main icon="home" title="Inicío"
        subtitle="Cadastro de usuario">
        <div className='display-4'>Bem Vindo!</div>
        <hr />

        <p className='mb-0'>Sistema para cadastro de Usuarios com ReactJs</p>
        </Main>)

}
export default Home