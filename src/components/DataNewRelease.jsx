import React from 'react';
import PropTypes from 'prop-types';

const DataNewRelease = ({ image, episode, movieName }) => {
  return (
    <div className=''>
        <a href="#" className='flex flex-col items-center justify-center transition duration-300 rounded-lg h-80 hover:scale-105'>
            <div className='relative'>
                <img className='brightness-75' src={image} alt={movieName} />
                <p className='absolute font-medium -mt-11 ml-11'>{episode}</p>
            </div>
            <h3 className='justify-center w-3/4 font-bold text-center'>{movieName}</h3>
        </a>
    </div>
  );
};

DataNewRelease.propTypes = {
  image: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
};

export default DataNewRelease; 