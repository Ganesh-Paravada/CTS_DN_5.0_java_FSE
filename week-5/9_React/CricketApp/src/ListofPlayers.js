import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Sachin", score: 90 },
        { name: "Dhoni", score: 85 },
        { name: "Virat", score: 95 },
        { name: "Rohit", score: 65 },
        { name: "Rahul", score: 70 },
        { name: "Pant", score: 60 },
        { name: "Jadeja", score: 80 },
        { name: "Ashwin", score: 55 },
        { name: "Bumrah", score: 75 },
        { name: "Shami", score: 68 },
        { name: "Gill", score: 88 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>

            <h2>List of Players</h2>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        Mr. {player.name} <span>{player.score}</span>
                    </li>
                ))}
            </ul>

            <hr />

            <h2>List of Players having Scores Less than 70</h2>

            <ul>
                {below70.map((player, index) => (
                    <li key={index}>
                        Mr. {player.name} <span>{player.score}</span>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default ListofPlayers;