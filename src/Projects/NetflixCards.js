import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/NetflixCards.css';

function NetflixCards(props){
    return (
        <>
        <div className='cards'>
        <div className='card'>
          <img src={props.imgsrc}
          alt='card_img' className='card_Img' />
          <div className='card_Info'>
            <span className='card_category'>{props.category}</span>
            <h3 className='card_title'>{props.title}</h3>
            <a href={props.link} target='_blank'>
              <button>WATCH NOW</button>
            </a>
          </div>
        </div>
      </div>
      </>
    );
}

export default NetflixCards;