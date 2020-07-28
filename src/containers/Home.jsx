import React, { useEffect, useState } from 'react';
import '../assets/styles/App.scss';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carusel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const Home = () => {

    const initialState = useInitialState(API);

    // const [ videos, setVideos ] = useState({ mylist: [], trends: [], originals: [] });

    // useEffect(() => {
    //     fetch('http://localhost:3000/initialState')
    //         .then(response => response.json())
    //         .then(data => setVideos(data));
    // }, []);

    // console.log(videos);


    return (
        <>
            <Search />
            
            { initialState.mylist.length > 0 &&
                <Categories title="Mas vistas">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }
            
            <Categories title="Tendencias">
                <Carousel>
                    { initialState.trends.map(item => <CarouselItem key={item.id} {...item} /> ) }
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi">
                <Carousel>
                { initialState.originals.map(item => <CarouselItem key={item.id} {...item} /> ) }
                </Carousel>
            </Categories>

        </>
    );

};

export default Home;
