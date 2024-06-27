import styled from 'styled-components'

export const ListItem = styled.li`
    border: 1px solid #323f4b;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 30%;
`
export const Heading = styled.h2`
    color: #0307fc;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    font-family: 'Roboto';
    @media screen and (min-width: 768px) {
        font-size: 25px;
    }
`
export const Author = styled.p`
    color: #070708;
    font-size: 13px;
    font-weight: 500;
    font-family: 'Roboto';
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
`
export const Content = styled.p`
color: #070708;
font-size: 13px;
font-weight: 500;
font-family: 'Roboto';
@media screen and (min-width: 768px) {
    font-size: 18px;
}
`
export const AuthorDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media screen and(min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`
export const Date = styled.p`
    color: #070708;
    font-size: 13px;
    font-weight: 500;
    font-family: 'Roboto';
    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
`
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    background-color: #3b82f6;
    font-size: 15px;
    font-family: 'Roboto';
    font-weight: 500;
    color: #ffffff;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    margin: 10px; 
`