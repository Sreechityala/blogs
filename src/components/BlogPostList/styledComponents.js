import styled from "styled-components";

export const BlogsListsContainer = styled.div`
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
export const UnorderedListContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
`
export const NoListCOntainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Image = styled.img`
    width: 30%;
    height: 20%;
`
export const NoBlogHeading = styled.h1`
    color: black;
    font-size: 25px;
    font-weight: 500;
    font-family: 'Roboto';
`