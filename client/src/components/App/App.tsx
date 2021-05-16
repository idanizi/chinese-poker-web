import React from 'react'
import { Link } from 'react-router-dom'

export default function App({ children }) {
    return (
        <main className="App">
            <header>
                <nav>
                    todo: navbar
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
