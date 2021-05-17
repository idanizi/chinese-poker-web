import Card from 'src/components/Card'
import styles from './Deck.module.scss'

const Deck = () => {
    return (
        <div className={styles.deck}>
            <h3>Deck</h3>
            <Card />
        </div>
    )
}

export default Deck
