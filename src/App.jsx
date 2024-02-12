import React from 'react';
import './App.css';
import Typed from 'typed.js';
import BackgroundCanvas from './components/backgroundCanvas.jsx';

const rootDiv = document.getElementById('root');
rootDiv.style.height = window.innerHeight + 'px';


function App() {
  React.useEffect(() => {
    const typed = new Typed('#textTyping', {
        strings: [
          'Rejen ALIGORA',
          'a Web developper',
          'Coding',
          'GROOT...'
      ],
        typeSpeed: 50,
        loop: true
    });
    
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <BackgroundCanvas />

      <header>
        <nav>
          <section>
            <h1 className='indie-flower-regular white'>My portfolio</h1>
          </section>

          <section>
            <article>
              <a href="#" className='indie-flower-regular white'>Home</a>
            </article>

            <article>
              <a href="#" className='indie-flower-regular white'>About me</a>
            </article>

            <article>
              <a href="#" className='indie-flower-regular white'>Contact</a>
            </article>
          </section>
        </nav>
      </header>

      <main>
        <section>
          <article className='img'>

          </article>

          <article className='h2-div'>
            <div>
              <h2 className='inder-regular white'>Hello world !</h2>
            </div>

            <div>
              <h2 className='inder-regular white'>I am <span id='textTyping' className='inder-regular white'></span></h2>
            </div>
          </article>
        </section>

        <section>
          <p className='inder-regular white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>

        <button className='indie-flower-regular'>About me!</button>
      </main>

      <footer>
        <section className='socials'>
          <div id='linkedin'></div>
          <div id='github'></div>
          <div id='gmail'></div>
        </section>
      </footer>
    </>
  )
}

export default App
