import styled from "styled-components"

export default function Login(){
    return(
    <Container>
        <div>MyWallet</div>
        <form>
            <input placeholder="E-mail"/>
            <input placeholder="Senha"/>
            <button>Entrar</button>
        </form>
        <p>Primeira vez? Cadastre-se!</p>

    </Container>)
}

const Container = styled.div`
    background-color: #9257BE;
    padding-top: 159px;
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
    }
`