import React, { useEffect } from 'react'
import Header from './components/application/layout/Header/Header'
import EditNavbar from './components/portfolio/customization/Navbar/EditNavbar'
import Navbar from './components/portfolio/layout/Navbar/Navbar'
import Home from './components/portfolio/pages/Home/Home'
import { useApplicationContext } from './context/applicationContext'
import './App.scss'
import EditHome from './components/portfolio/customization/Navbar/EditHome'

function App() {
  const { screenSize, setScreenSize } = useApplicationContext()

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is the ESC key
      if (event.keyCode === 27) {
        setScreenSize("desktop")
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.keyCode === 38) {
      // Handle Ctrl + Up key logic here
      setScreenSize("fullscreen")
    }
  };



  return (
    <>
      <div tabIndex="0"
        onKeyDown={handleKeyDown} className='h-full flex flex-col overflow-hidden'>
        {/* Application Header */}
        <Header />
        <div className='flex flex-grow overflow-hidden'>
          {/* Navbar customization */}
          <EditHome />

          <div className={`w-full ${screenSize !== "fullscreen" && "mt-2 ml-2 rounded-md"} relative overflow-y-scroll`}>
            <Navbar />
            <Home />
            <div className='relative'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas quis eaque iure atque sit earum dolorum corporis? Perferendis, laborum. Minus, consequuntur distinctio nesciunt culpa quasi assumenda dicta laborum perferendis dolorum fuga ratione vero architecto, tenetur voluptatibus tempore aut mollitia eaque voluptatum rem? Quod sequi blanditiis expedita nisi asperiores. Necessitatibus possimus iste eaque sint ullam tempora ex ipsam illo adipisci sit rem ab, sequi molestiae dolore distinctio nam placeat mollitia est aliquam accusamus qui. Asperiores aspernatur, saepe voluptate alias ad laboriosam iusto. Esse assumenda unde quasi maxime incidunt perferendis possimus hic voluptatem voluptas cum? Excepturi provident dolore et temporibus iusto!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
