import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";
function TinderCards() {
    //this is the dumi data
    //   const [people, setpeople] = useState([
    //     {
    //       name: "Sharukh Khan",
    //       url:
    //         "https://www.alux.com/wp-content/uploads/2017/04/Shahrukh-Khan-Net-Worth.jpg",
    //     },
    //     {
    //       name: "Sunny Leone",
    //       url:
    //         "https://cdn.bollywoodbubble.com/wp-content/uploads/2018/03/Sunny-Leone-pic.jpg",
    //     },
    //   ]);

    const [people, setpeople] = useState([]);

    useEffect(() => {
        const unsubscribe = database.collection("people").onSnapshot((snapshot) => {
            setpeople(snapshot.docs.map((doc) => doc.data()));
        });
        //snapshot is just like a camera that click the picture of your databse and provied you everything
        return () => {
            //this is the clean up ......
            // unsubscribe();
        };
        //this will run Onec when the component loads and never again
    }, []);

    //useEFFect is just a peach of code that run on the condition

    return (
        <div>
            <div className="cardContioner">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                            className="card"
                        >
                            <h1>{person.name}</h1>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
