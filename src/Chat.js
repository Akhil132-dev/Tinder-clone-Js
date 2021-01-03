import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './Chat1.css'
import { Link } from 'react-router-dom'
function Chat({ name, massage, timeStamp, profilepic }) {
    return (
        <Link to={`/chats/${name}`} >
            <div className="chat">
                <Avatar className="chat__img" src={profilepic} />
                <div className="chat__details">
                    <h2>{name}</h2>
                    <p>{massage}</p>

                </div>
                <div className="chat__timestamp"><p>{timeStamp}</p>
                </div>

            </div>
        </Link>

    )
}

export default Chat
