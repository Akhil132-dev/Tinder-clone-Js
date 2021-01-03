import React from 'react'
import Chat from './Chat'
import './Chat.css'
function Chats() {
    return (
        <div className="Chats">
            <Chat
                name="Mark"
                massage="how are you guyes"
                timeStamp="40 seconde ago"
                profilepic="https://nypost.com/wp-content/uploads/sites/2/2020/07/mark-zuckerberg.jpg?quality=90&strip=all&w=1200"
            />
            <Chat
                name="sunny"
                massage="hy how are you"
                timeStamp="40 seconde ago"
                profilepic="https://cdn.bollywoodbubble.com/wp-content/uploads/2018/03/Sunny-Leone-pic.jpg"
            />
            <Chat
                name="Sharuk"
                massage="what up bro"
                timeStamp="40 seconde ago"
                profilepic="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sharukhan.jpg/1200px-Sharukhan.jpg"
            />
            <Chat
                name="Aliya"
                massage="i love you "
                timeStamp="40 seconde ago"
                profilepic="http://media.santabanta.com/gal/event/Alia-and-Varun-Promote-Humpty-Sharma-Ki-Dulhania/alia-and-varun-promote-humpty-sharma-ki-dulhania-7_th.jpg"
            />
        </div>
    )
}

export default Chats
