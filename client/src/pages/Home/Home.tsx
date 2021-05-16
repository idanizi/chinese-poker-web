import React from 'react'
import Card from 'src/components/Card';
import Player from 'src/components/Player/Player';

const Home = () => {

  return (
    <section>
      <Player playerIndex={1} />
      <Player playerIndex={2} isCurrentPlayer />
    </section>
  );
}

export default Home;
