import React, { useState, useEffect } from 'react';
import './Jokes.scss';
import smileyFace from '../../assets/smiley.png';

const Jokes = () => {
  const url = 'https://api.api-ninjas.com/v1/dadjokes';
  let options = {
    method: 'GET',
    headers: { 'x-api-key': 'GUr2Jp3o1HsXBgGtQlWP8w==1mRvorS6h0Qvzdzb' }
  }
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setJoke] = useState({});

  const getJoke = async () => {
    setIsLoading(true);
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data[0].joke);
    setJoke(data[0].joke);
    setIsLoading(false);
  };

  /* useEffect(() => {
    setTimeout(() => {
        getJoke();
    }, 10000);
  });*/
  return (
    <section className='jokes-sec --center-all'>
        <div className="container joke --bg-light --card">
            <h2>Random Jokes Generator</h2>
            <img src={smileyFace} alt="Smiley" className='smiley' />
            <hr />
            {isLoading ? (
                <h3>Loading ...</h3>
            ): (
                <p className='--my2'>
                    {joke}
                </p>
            )}
            <hr />
            <button onClick={getJoke} className='--btn --btn-primary --btn-block'>Generate New Joke</button>
            {/* GUr2Jp3o1HsXBgGtQlWP8w==1mRvorS6h0Qvzdzb */}
        </div>
    </section>
  )
}

export default Jokes;
