import React from 'react'
import { Link } from 'react-router-dom'

export default function App({ children }) {
    return (
        <main className="App">
            <header>
                <nav>
                    <h1>
                        Talia's Chinese Poker
                    </h1>
                </nav>
            </header>
            <section>
                {children}
            </section>
            <footer>
                <p>
                    Copyright © {new Date().getFullYear()} Idan Izicovich
                </p>
            </footer>
        </main>
    )
}
