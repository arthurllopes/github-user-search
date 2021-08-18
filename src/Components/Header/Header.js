import React from 'react'
import { HeaderContainer } from './HeaderStyle'

const Header = () => {
    const [user, setUser] = React.useState('')
    function handleClick(){
        
    }
    return (
        <HeaderContainer >
            <input type="text" value={user} onChange={(event => setUser(event.target.value))}/>
            <button onClick={handleClick}>Search</button>
        </HeaderContainer >
    )
}

export default Header
