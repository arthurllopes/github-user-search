import React from 'react'
import { InfoContainer, Card } from './InfoStyle'
import { GoRepo } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const Info = () => {
    return (
        <InfoContainer>
            <Card>
                <div><FiUsers style={{marginRight: '12px'}} /></div>
                <div>
                <strong>36</strong>
                <p>Following</p>
                </div>
            </Card>
            <Card>
                <div><FiUserPlus style={{marginRight: '12px'}} /></div>
                <div>
                <strong>11</strong>
                <p>Followers</p>
                </div>
            </Card>
            <Card>
                <div><GoRepo style={{marginRight: '12px'}} /></div>
                <div>
                <strong>11</strong>
                <p>Repositories</p>
                </div>
            </Card>
        </InfoContainer>
    )
}

export default Info
