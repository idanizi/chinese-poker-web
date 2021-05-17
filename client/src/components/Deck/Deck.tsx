import { useSelector } from 'react-redux'
import Card from 'src/components/Card'
import { Cards, StoreStateType } from 'src/models'
import styles from './Deck.module.scss'

const Deck = () => {
    const { deck } = useSelector<StoreStateType, Cards>(state => state.cards)
    return (
        <div className={styles.deck}>
            <h3>Deck</h3>
            {
                deck.length === 0 ?
                    <Card isPlaceholder isDraggable={false} />
                    :
                    <Card isDraggable isFacingDown />
            }
        </div>
    )
}

export default Deck
