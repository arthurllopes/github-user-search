import React from 'react'
import { InfoContainer, Card } from './InfoStyle'
import { GoRepo } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { Context } from '../../hook/useGitHub';

const Info = () => {
    const { info } = React.useContext(Context)
    return (
        <InfoContainer>
            <Card>
                <div><FiUsers style={{marginRight: '12px'}} /></div>
                <div>
                <strong>{info.following}</strong>
                <p>Following</p>
                </div>
            </Card>
            <Card>
                <div><FiUserPlus style={{marginRight: '12px'}} /></div>
                <div>
                <strong>{info.followers}</strong>
                <p>Followers</p>
                </div>
            </Card>
            <Card>
                <div><GoRepo style={{marginRight: '12px'}} /></div>
                <div>
                <strong>{info.public_repos}</strong>
                <p>Repositories</p>
                </div>
            </Card>
        </InfoContainer>
    )
}

export default Info
