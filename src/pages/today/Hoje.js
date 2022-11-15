import styled from "styled-components"

export default function Today(){
    return (
    <Container>
        <div>
            <h1>Olá fulano</h1>
            <ion-icon name="exit-outline"></ion-icon>
        </div>
        <Registry>
            <p>Não há registros de entrada ou saída</p>  
        </Registry>
        <Botoes>
            <div>
                Nova entrada
            </div>
            <div>
                Nova saída
            </div>
        </Botoes>

    </Container>)
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top:  25px;
    &>div{
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: 700;
        color: white;
        margin-bottom: 22px;
    }
`
const Registry = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70vh;
    height: 80vh;
    background-color: #FFFFFF;
    &>p{
        color: #868686;
        margin: auto;
        font-weight: 400;
    }
    border-radius: 10px;
`
const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70vh;
    
    &>div{
        width: 30vh;
        height: 114px;
        background-color: #A863D6;
        padding: 10px;
        border-radius: 10px;
    }
`
