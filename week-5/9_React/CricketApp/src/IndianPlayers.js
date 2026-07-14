import React from "react";

function IndianPlayers() {

    const players = [
        "Sachin1",
        "Dhoni2",
        "Virat3",
        "Rohit4",
        "Yuvaraj5",
        "Raina6"
    ];

    const [odd1, even1, odd2, even2, odd3, even3] = players;

    const T20players = ["First Player", "Second Player", "Third Player"];

    const RanjiPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];

    const mergedPlayers = [...T20players, ...RanjiPlayers];

    return (

        <div>

            <h1>Odd Players</h1>

            <ul>
                <li>First : {odd1}</li>
                <li>Third : {odd2}</li>
                <li>Fifth : {odd3}</li>
            </ul>

            <hr />

            <h1>Even Players</h1>

            <ul>
                <li>Second : {even1}</li>
                <li>Fourth : {even2}</li>
                <li>Sixth : {even3}</li>
            </ul>

            <hr />

            <h1>List of Indian Players Merged:</h1>

            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

        </div>

    );
}

export default IndianPlayers;