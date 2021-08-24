import React from 'react'
import { Context } from '../../hook/useGitHub'
import { FormContainer } from './HeaderStyle'

const Header = () => {
    const {user, setUser, handleClick} = React.useContext(Context)
    return (
        <FormContainer onSubmit={handleClick} >
            <input type="text"
            value={user}
            onChange={(event => setUser(event.target.value))}
            placeholder="Busque por usuários do GitHub" />
            <button type="submit">Search</button>
        </FormContainer >
    )
}

export default Header
