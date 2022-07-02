import React from 'react';
//Styling and Animation
import { motion } from "framer-motion";
import styled from "styled-components";

const Game = ({ name, released, image, id, key }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </div>
    );
}

export default Game;