import { useState } from 'react'
import './App.css'
import './Header'
import './Footer'
import './Nav'
import './main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
    <Header />
    </header>
    <nav>
    <Nav />
    </nav>
    <main>
    <Main />
    </main>
    <footer>
    <Footer />
    </footer>
    </>
  );
}

export default App;
