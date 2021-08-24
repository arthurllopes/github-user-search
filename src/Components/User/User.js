import React from 'react'
import { UserContainer, Status } from './UserStyle'
import { MdBusiness, MdLocationOn, MdEmail } from "react-icons/md";
import { Context } from '../../hook/useGitHub';

const User = () => {
    const { info } = React.useContext(Context)
    return (
        <UserContainer>
            <div>
                <img src={info.avatar_url} style={{ borderRadius: '8px' }} alt="GitHub Avatar" />
                <div style={{margin: '0px 8px 16px'}}>
                    <p style={{marginBottom: '8px'}}>
                        {info.name}    
                    </p>
                    <p style={{marginLeft: '8px'}}>
                        {info.bio}
                    </p>
                </div>
                <Status info={info.company}>
                    <p>
                        <MdBusiness />
                        <span className="work">
                            {info.company? info.company : 'Open to Work'}
                        </span>
                    </p>
                    <p>
                        {
                        info.location &&
                        <>
                        <MdLocationOn />
                        <span>
                        {info.location}
                        </span>
                        </>}
                    </p>
                    <p>
                        {
                        info.email &&
                        <>
                        <MdEmail />
                        <span>
                          {info.email}  
                        </span>
                        </>
                        }
                    </p>
                </Status>
                <a href={info.html_url} target="_next">
                    <button>Follow</button>
                </a>
                
            </div>            
        </UserContainer>
    )
}

export default User
