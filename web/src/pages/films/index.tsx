import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './films.scss';
import axios from '../../axios';

const Films = () => {
    const [films, setFilms] = useState([]);

    const getFilms = async () => {
        const res = await axios.get('/films');
        setFilms(res.data);
    };

    useEffect(() => {
        getFilms();
    }, []);

    return (
        <div className='films'>
            <div className='films-container'>
                {films.map(({Images, Title}) => (
                    <article>
                        <img className='film-img' src={Images[1]} alt='Film Cover Art' loading='lazy'/>
                        <p className='film-title'>{Title}</p>
                    </article>
                ))}
            </div>
            <Link to='/'><button className='more-btn'>MORE</button></Link>
        </div>
    )
};

export default Films;