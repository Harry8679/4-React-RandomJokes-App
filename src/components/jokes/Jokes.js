import React from 'react';
import './Jokes.scss';
import smileyFace from '../../assets/smiley.png';

const Jokes = () => {
  return (
    <section className='jokes-sec'>
        <div className="container joke">
            <h2>Random Jokes Generator</h2>
            <img src={smileyFace} alt="Smiley" />
            <hr />
            <p>
                We will consume an API to display all randomly generated jokes.
            </p>
            <hr />
            <button>Generate New Joke</button>
        </div>
    </section>
  )
}

export default Jokes;
