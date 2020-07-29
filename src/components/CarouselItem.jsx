import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss';
import playicon from '../assets/static/play-icon.png';
import plusicon from '../assets/static/plus-icon.png';
import removeicon from '../assets/static/remove-icon.png';

const CarouselItem  = ( props ) => {

    const { id, cover, title, year, contentRating, duration, myList, isMyList=false } = props;

    const handleSetFavorite = () => {
        const findVideo = myList.find(item => item.id == id);
        if( !findVideo){
            props.setFavorite({
                id, cover, title, year, contentRating, duration
            })
        }
        else{
            alert(`Ya tienes agregado el video ${title} en tu lista`);
        }
    }

    const hanldeDeleteFavorite = (id) => {
        props.deleteFavorite({ id });
    }
    
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={ cover } alt={ title }  />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playicon} alt="Play Icon" /> 
                    { !isMyList && 
                        <img 
                            className="carousel-item__details--img" 
                            src={plusicon} 
                            alt="Plus Icon" 
                            onClick={handleSetFavorite}
                        />
                    }
                    { isMyList && 
                        <img 
                            className="carousel-item__details--img" 
                            src={removeicon} 
                            alt="Plus Icon" 
                            onClick={() => hanldeDeleteFavorite(id)}
                        /> 
                    }
                </div>
                <p className="carousel-item__details--title">{ title }</p>
                <p className="carousel-item__details--subtitle">
                    {` ${year} ${contentRating} ${duration} `}
                </p>
            </div>
        </div>
    );
}

CarouselItem.propTypes = {
    cover: PropTypes.string, 
    title: PropTypes.string, 
    year: PropTypes.number, 
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
    };
}

// export default CarouselItem;
export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);