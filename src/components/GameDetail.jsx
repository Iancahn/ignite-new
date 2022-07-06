import React from 'react';
//Styling and Animation
import { motion } from "framer-motion";
import styled from "styled-components";
// Redux
import { useSelector } from 'react-redux';
import { gameDetailsURL } from '../api';
import { useNavigate } from 'react-router-dom';
// Image Sizes
import { smallImage } from '../util';

const GameDetail = (pathId) => {
    const navigate = useNavigate();
    // Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            navigate('/');
        }
    }
    //Data
    const { screen, game, isLoading } = useSelector((state) => state.detail);
    return (
        <>

            import {motion, AnimatePresence} from "framer-motion"

            {/* export const MyComponent = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    )}
  </AnimatePresence>
) */}

            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <StyledDetail layoutId={pathId}>
                        <StyledStats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <StyledInfo>
                                <h3>Platforms</h3>
                                <StyledPlatforms>
                                    {game.platforms.map(data => (
                                        <h3 key={data.platform.id}>{data.platform.name}</h3>
                                    ))}
                                </StyledPlatforms>
                            </StyledInfo>
                        </StyledStats>
                        <StyledMedia>
                            <img src={smallImage(game.background_image, 1280)} alt="some of the game's best screenshots" />
                        </StyledMedia>
                        <StyledDescription>
                            <p>{game.description_raw}</p>
                        </StyledDescription>
                        <div className="gallery">
                            {screen.results.map(screen => (
                                <img src={smallImage(screen.image, 1280)} key={screen.id} alt="game screenshots" />
                            ))}
                        </div>
                    </StyledDetail>
                </CardShadow>
            )}
        </>

    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height:100vh;
    overflow-y:scroll;
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    left:0;
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#ff7676;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`

const StyledDetail = styled(motion.div)`
    width: 80%;
    border-radius:1rem;
    padding: 2rem 5rem;
    background:white;
    position:absolute;
    left:10%;
    color:black;
    img{
        width:100%;
    }
`

const StyledStats = styled(motion.div)`
    display:flex;
    align-items: center;
    justify-content: space-between;
`

const StyledInfo = styled(motion.div)`
    text-align: center ;
`
const StyledPlatforms = styled(motion.div)`
    display:flex;
    justify-content: space-evenly;
    img{
        margin-left:3rem;
    }
`

const StyledMedia = styled(motion.div)`
    margin-top:5rem;
    img{
        width:100%;
        object-fit: cover;
    }
`

const StyledDescription = styled(motion.div)`
    margin:5rem 0rem;
`

export default GameDetail;