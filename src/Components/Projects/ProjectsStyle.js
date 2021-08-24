import styled from "styled-components";

export const ProjectsContainer = styled.div`
    grid-area: projects;
    margin-top: 24px;
    max-height: 400px;
    overflow-y: scroll;

    ul{
        margin-top: 12px;
        padding: 4px;
        list-style: none;
    }
    li{
        padding: 12px 8px;
        background-color: white;
        margin: 8px 0;
        border-radius: 4px;
    }
`