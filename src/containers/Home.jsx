import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import '../assets/styles/App.scss';

import useInitialState from '../hooks/useInitialState';
import Search from '../components/Search';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Carousel from '../components/Carousel';
import Header from '../components/Header';

const API = 'http://localhost:3000/initialState';

const Home = ({ myList, trends, originals }) => {

    // const initialState = useInitialState(API);

    // const [ videos, setVideos ] = useState({ mylist: [], trends: [], originals: [] });

    // useEffect(() => {
    //     fetch('http://localhost:3000/initialState')
    //         .then(response => response.json())
    //         .then(data => setVideos(data));
    // }, []);

    // console.log(videos);


    return (
        <>
            <Header />
            <Search />
            
            { myList.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        { myList.map(item => <CarouselItem key={item.id} {...item}  isMyList={true}/> ) }
                    </Carousel>
                </Categories>
            }
            
            <Categories title="Tendencias">
                <Carousel>
                    { trends.map(item => <CarouselItem key={item.id} {...item} /> ) }
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi">
                <Carousel>
                { originals.map(item => <CarouselItem key={item.id} {...item} /> ) }
                </Carousel>
            </Categories>

        </>
    );

};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    };
}

// export default Home; // sin redux
export default connect( mapStateToProps, null )(Home);
