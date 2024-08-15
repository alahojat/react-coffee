import  { useState } from 'react';
import coffee from '../assets/images/coffee.jpg';
import coffeeZen from '../assets/images/coffeeZen.jpg';
import dog from '../assets/images/dog.jpg';
import emotionalSupport from '../assets/images/emotionalSupport.jpg';
import minion from '../assets/images/minion.jpg';
import noPunching from '../assets/images/noPunching.jpg';
import sanity from '../assets/images/sanity.jpg';
import squirrel from '../assets/images/squirrel.jpg';
import unicorn from '../assets/images/unicorn.jpg';
import youProblem from '../assets/images/youProblem.jpg';

export const Generator = () => {
  const images: { image: string }[] = [
    { image: coffee },
    { image: coffeeZen },
    { image: dog },
    { image: emotionalSupport },
    { image: minion },
    { image: noPunching },
    { image: sanity },
    { image: squirrel },
    { image: unicorn },
    { image: youProblem },
  ];

  const [imageSource, setImageSource] = useState('');

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImageSource(images[randomIndex].image);
  };

  return (
    <>
      <button onClick={getRandomImage}>Make me happy</button>
      <div>
        {imageSource && <img src={imageSource} />}
      </div>
    </>
  );
};