import React from 'react';
import './PlayPage.css';
import Card from '../../components/Card/Card';
import Background from '../../components/Animation/Background';
import Button from '../../components/Button/btn2/Button';

export default function PlayPage() {

  const cardsInfo = [
    {
      src: '/image/single-player.png',
      alt: 'Random moves AI',
      title: 'Random moves AI',
      content: 'Play chess against random move generator. This mode is recomanded to new players.'
    },
    {
      src: '/image/pvc.png',
      alt: 'AI',
      title: 'AI',
      content: 'Play chess vs smart AI, you can choose the difficulty: Easy, Normal, Hard. The difficulty level influence the AI ability to read the board in depth.'
    },
    {
      src: '/image/pvp.png',
      alt: 'Player VS Player',
      title: 'Player',
      content: 'Play vs other players online.'
    }
  ]

  const renderCards = arr => arr.map( (c,i) => <Card key={i} src={c.src} title={c.title} alt={c.alt} content={c.content}/>)

  return (
    <div className="play-page">
      <h1 className="play-page-title">
        Choose Your Opponent:
      </h1>
      <div className="cards">
        {renderCards(cardsInfo)}
      </div>
      <Button content={"back"}/>
      <Background/>
    </div>
  )
}
