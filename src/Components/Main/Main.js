import React from 'react'
import Info from '../Info/Info'
import Projects from '../Projects/Projects'
import User from '../User/User'
import { Context } from '../../context/GitHubContext';
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';
import InitialState from '../InitialState/InitialState';

const Main = () => {
    const { loading, error, initial } = React.useContext(Context)
    if(loading) {
        return (
            <Loading />
        )
    }
    if(error) {
        return (
            <NotFound />
        )
    }
    if(initial) {
        return (
            <InitialState />
        )
    }
    else{
        return (
            <>
                <Info />
                <User />
                <Projects />
            </>
        )
    }
}

export default Main
