import React from 'react';
import './Jokes.scss';
import smileyFace from '../../assets/smiley.png';

const Jokes = () => {
  return (
    <section className='jokes-sec --center-all'>
        <div className="container joke --bg-light --card">
            <h2>Random Jokes Generator</h2>
            <img src={smileyFace} alt="Smiley" className='smiley' />
            <hr />
            <p className='--my2'>
                We will consume an API to display all randomly generated jokes.
            </p>
            <hr />
            <button className='--btn --btn-primary --btn-block'>Generate New Joke</button>
        </div>
    </section>
  )
}

export default Jokes;
