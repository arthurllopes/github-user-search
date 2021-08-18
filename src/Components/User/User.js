import React from 'react'
import { UserContainer } from './UserStyle'
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
const User = () => {
    return (
        <UserContainer>
            <div>
                <div>
                    <img src="png" style={{ borderRadius: '8px' }} />
                    <hr />
                    <p>
                        <a href="#">
                            
                        </a>
                    </p>
                    <hr />
                </div>
                <div>
                    <p>
                        <MdBusiness />
                    </p>
                    <p>
                        <MdLocationOn />
                    </p>
                    <a href="#">
                        <MdLink />
                    </a>
                </div>
            </div>            
        </UserContainer>
    )
}

export default User
