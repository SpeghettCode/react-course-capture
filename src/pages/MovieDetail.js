import react, {useState, useEffect} from "react";
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../movieState';
//animation
import {motion} from 'framer-motion';
import {pageAnim} from '../animation';

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    // use effect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url])

    return (
        <motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit">
        {movie && (
            <Details>
                <Headline>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="movie" />
                </Headline>
                <Awards>
                    {movie.awards.map((award) => (
                        <Award title={award.title} description={award.description} key={award.title} />
                    ))}
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="movie" />
                </ImageDisplay>
            </Details>
        )}
        </motion.div>
    );
}

const Details = styled.div`
    color: #fff;
`;

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;

    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    margin: 5rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const AwardStyle = styled.div`
    padding: 5rem;

    h3 {
        font-size: 2rem;
    }

    .line {
        width: 100%;
        height: 0.5rem;
        margin: 1rem 0;
        background: #23d997;
    }

    p {
        padding: 2rem 0;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;

    img {
        height: 100vh;
        width: 100%;
        object-fit: cover;
    }
`;

//award component
const Award = ({title, description}) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    );
} 


export default MovieDetail;