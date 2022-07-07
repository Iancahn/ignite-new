import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import GameDetail from '../components/GameDetail';
//Components
import Game from '../components/Game';
//Styling and Animation
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';

function Home() {
    //get the current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    if (!pathId) {
        document.body.style.overflow = "auto";
    }
    //FETCH GAMES
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    // Get Data Back
    const { popular, upcoming, newGames } = useSelector((state) => state.games);

    return (
        <GameList>
            <LayoutGroup>

                {/* 
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

                <AnimatePresence type="crossfade" pathId={pathId}>
                    {pathId && <GameDetail />}
                </AnimatePresence>
                <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map(game =>
                        <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                    )}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popular.map(game =>
                        <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                    )}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map(game =>
                        <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                    )}
                </Games>
            </LayoutGroup>
        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding:5rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height:80vh;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(500px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;