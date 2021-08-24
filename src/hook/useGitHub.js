import React from 'react'
import api from '../service/api'

export const Context = React.createContext()

export const ContextStorage = ({children}) => {
    const [user, setUser] = React.useState('')
    const [initial, setInitialState] = React.useState(true)
    const [info, setInfo] = React.useState({})
    const [projects, setProjects] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [requests, setRequests] = React.useState(0)

    async function handleClick(event){
        event.preventDefault()
        setInitialState(false)
        setLoading(true)
        if(user){
            if(requests < 60) {
                setRequests(prevState => prevState + 1)
                try{
                    setError(false)
                    const response = await api.get(`users/${user}`)
                    setInfo(response.data)
        
                    const reposResponse = await api.get(`users/${user}/repos`)
                    setProjects(reposResponse.data)
                    
                }
                catch {
                    setError(true)
                }
            }
                    
        }
        setLoading(false)
        setUser('')
    }



    return (
    <Context.Provider value={{user, setUser, handleClick, info, projects, loading, initial, error}}>
        {children}
    </Context.Provider>
    )
}