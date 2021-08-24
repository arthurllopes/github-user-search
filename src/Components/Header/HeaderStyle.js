import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    height: 12vh;
    margin-top: 8px;
    grid-area: form;

    input{
        width: 100%;
        padding: 8px;
    }
    button{
        border-radius: 4px;
        border-color: transparent;
        padding: 8px;
        margin-left: 8px;
        border: 1px solid #d7d7d7;
        background: #6933ff;
        font-weight: 400;
        font-size: 1rem;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }
`