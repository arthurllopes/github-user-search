import React from 'react'
import { Context } from '../../hook/useGitHub'
import { ProjectsContainer } from './ProjectsStyle'

const Projects = () => {
    const { projects } = React.useContext(Context);
    return (
        <ProjectsContainer>
            <h2>Ultimos Projetos: </h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <a href={project.html_url} target="_next" style={{textDecoration: 'none', display: 'block', marginBottom: '8px', color:'black'}}>
                        <h3 style={{marginBottom: '8px'}}>{project.name}</h3>
                        <p>{project.description}</p>
                        <p>Atualizado: {new Intl.DateTimeFormat('pt-br').format(new Date(project.updated_at))}</p>
                        </a>
                        {project.homepage && <a href={project.homepage}>Visite a demo</a>}
                    </li>
                ))}
            </ul>
        </ProjectsContainer>
    )
}

export default Projects
