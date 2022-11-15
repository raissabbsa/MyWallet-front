import styled from "styled-components"

export default function Registracion(){
    return (
    <Container>
        <div>MyWallet</div>
        <form>
            <input placeholder="Nome"/>
            <input placeholder="E-mail"/>
            <input placeholder="Senha"/>
            <input placeholder="Confirme a senha"/>

            <button>Cadastrar</button>
        </form>
        <p>Já tem uma conta? Entre agora!</p>

    </Container>
    )
}

const Container = styled.div`
    background-color: #9257BE;
    padding-top: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &>div{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: white;
        margin-bottom: 24px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    
    input{
        width: 80vh;
        height: 58px;
        margin-bottom: 13px;
        border-radius: 5px;
        border: none;
        font-size: 18px;
        padding: 10px;
    }

    button{
        background-color: #A863D6;
        width: 80vh;
        height: 58px;
        margin-bottom: 13px;
        text-align: center;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        color: white;
        cursor: pointer;
    }
    &>p{
        margin-top: 20px;
        font-size: 20px;
        color: white;
        font-weight: 700;
        cursor: pointer;
        margin-bottom: 40px;    }
`