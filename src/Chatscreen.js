import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './Chatscreen.css'
function Chatscreen() {
    const [input, setinput] = useState([])
    const [massages, setMessage] = useState([
        {
            name: "akhil",
            image: "https://cdn.bollywoodbubble.com/wp-content/uploads/2018/03/Sunny-Leone-pic.jpg",
            massage1: 'whatsapp'

        },
        {
            name: "akhil",
            image: "https://cdn.bollywoodbubble.com/wp-content/uploads/2018/03/Sunny-Leone-pic.jpg",
            massage1: 'how is going'

        },
        {

            massage1: 'how is going'

        }

    ])
    const Hendal = (e) => {
        e.preventDefault();
        setMessage([...massages, { massage1: input }])
        setinput("")
    }
    return (
        <div className="chatScreen">
            <p className="Chatscreentime">
                YOU MATCHED WITH ELENON 10/08/20
</p>
            {massages.map(massage => (
                massage.name ? (
                    <div className="chat__massages">
                        <Avatar className="chat__img"
                            atl={massage.name}
                            src={massage.image} />
                        <p className="chat__screentext">
                            {massage.massage1}
                        </p>
                    </div>
                ) : (
                        <div className="chat__massages">

                            <p className="chat__screentextUser">
                                {massage.massage1}
                            </p>
                        </div>
                    )

            ))}

            <form action="submit" className="chatscrren_input" >
                <input className="chatscrren_inputfiled"
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                    type="text"
                    placeholder="type a message.."
                />
                <button onClick={Hendal} className="input_butonn">SEND</button>
            </form>

        </div>
    )
}

export default Chatscreen
