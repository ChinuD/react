import React from 'react'
import UserContext from '../Context/userContext'

function Profile() {

    const {user} = React.useContext(UserContext)

    if(!user) return <div>Please Login</div>
    
    return <div>Welcome {user.userName}</div>

}

export default Profile