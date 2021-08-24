import React from 'react'
import { NotFoundContainer } from './NotFoundStyle'

const NotFound = () => {
    return (
        <NotFoundContainer>
            <h3>
            Desculpe, não encontramos nenhum usuário. Verifique se o nome do usuário está correto e tente mais tarde.
            </h3>
        </NotFoundContainer>
    )
}

export default NotFound
