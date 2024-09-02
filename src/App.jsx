import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import Home from './components/Home';
import ScrollToTop from './components/Scroll';
import './index.css';


function App() {
    return (
        <>
            <div>
            <WelcomeMessage />
            <Header />
            <Home />
            <ScrollToTop />
            </div>
            
        </>
    );
}

export default App;
