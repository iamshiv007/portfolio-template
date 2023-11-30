import React, { useEffect } from 'react'
import './App.scss'
import Navbar from './components/portfolio/layout/Navbar/Navbar'
import Home from './components/portfolio/pages/Home/Home'
import Header from './components/application/layout/Header/Header'
import EditNavbar from './components/portfolio/customization/Navbar/EditNavbar'
import { useApplicationContext } from './context/applicationContext'

function App() {
  const { screenSize, setScreenSize } = useApplicationContext()

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is the ESC key
      if (event.keyCode === 27) {
        // Perform your desired action here
        setScreenSize("desktop")
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <div className='h-full flex flex-col overflow-hidden'>
        <button onClick={() => setScreenSize("desktop")} className={`text-white px-4 py-2 bg-gray-600 bg-opacity-70 border border-gray-500 border-solid rounded ${screenSize === "fullscreen" ? "" : "hidden"} absolute top-4 left-4 z-30`}>
          Esc
        </button>
        <Header />
        <div className='flex flex-grow overflow-hidden'>
          <EditNavbar />

          <div className={`w-full ${screenSize === "fullscreen" ? "" : "mt-2 ml-2 rounded-md"} relative overflow-y-scroll`}>
            <Navbar />
            <div className='w-full h-full relative overflow-hidden'>
              <Home />
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas quis eaque iure atque sit earum dolorum corporis? Perferendis, laborum. Minus, consequuntur distinctio nesciunt culpa quasi assumenda dicta laborum perferendis dolorum fuga ratione vero architecto, tenetur voluptatibus tempore aut mollitia eaque voluptatum rem? Quod sequi blanditiis expedita nisi asperiores. Necessitatibus possimus iste eaque sint ullam tempora ex ipsam illo adipisci sit rem ab, sequi molestiae dolore distinctio nam placeat mollitia est aliquam accusamus qui. Asperiores aspernatur, saepe voluptate alias ad laboriosam iusto. Esse assumenda unde quasi maxime incidunt perferendis possimus hic voluptatem voluptas cum? Excepturi provident dolore et temporibus iusto!
          </div>
        </div>
      </div>
    </>
  )
}

export default App
