import React from 'react'
import Card from 'src/components/Card';
import Deck from 'src/components/Deck/Deck';
import Player from 'src/components/Player/Player';
import styles from './Home.module.scss';

const Home = () => {

  return (
    <section className={styles.board}>
      <aside>
        <Deck />
      </aside>
      <article>
        <Player playerIndex={1} />
        <Player playerIndex={2} isCurrentPlayer />
      </article>
    </section>
  );
}

export default Home;
