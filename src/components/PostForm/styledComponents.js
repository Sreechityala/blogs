import styled from 'styled-components'

export const BlogFormContainer = styled.div`
    background-color: #ffffff;
    border: none;
    border-radius: 10px;
    padding-left: 30px;
    width: 50%;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Heading = styled.h1`
    color: #db1c48;
    font-size: 20px;
    font-weight: 600;
    font-family: 'Roboto';
    @media screen and (min-width: 768px) {
        font-size: 30px;
    }
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`
export const Label = styled.label`
    color: #1e293b;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Roboto';
    width: 15%;
`
export const Input = styled.input`
    width: 70%;
    height: 40px;
    color: #1e293b;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Roboto'; 
    border: 1px solid  #323f4b;
    border-radius: 5px;
    margin-bottom: 10px;
`
export const TextInput = styled.textarea`
    width: 70%;
    border: 1px solid  #323f4b;
    border-radius: 5px;
    margin-bottom: 10px;
    color: #1e293b;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Roboto';
`
export const Button = styled.button`
    margin-top: 20px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;
    font-familt: 'Bree Serif';
    background-color: #d946ef;
    padding: 10px;
    border: none;
    border-radius: 5px;
    align-self: center;
`