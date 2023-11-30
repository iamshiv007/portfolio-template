import React from 'react'
import boy2 from "../../../../assets/boy2.png"
import { useApplicationContext } from '../../../../context/applicationContext'

const Home = () => {
  const { screenSize } = useApplicationContext()

  return (
    <section className='h-full bg-[#312722] flex items-center'>
      <div className={`w-full h-full ${screenSize === "fullscreen" ? "" : "hover:border-2"} hover:border-blue-500 absolute top-0 left-0 z-20`} />

      <div className='px-36 flex flex-col gap-8 z-10'>
        <p className='text-4xl text-white'>Hello,</p>
        <p className='text-7xl text-white font-bold'>I'm Mrikon Roth</p>
        <p className='text-2xl text-white'>I Am Passionate Developer |</p>
        <a href="#" className='button'>CONTACT US</a>
      </div>
      <div className='w-[800px] h-[800px] bg-[#CE9076] rounded-full absolute top-[-200px] right-[-300px]' />
      <img alt="boy2" src={boy2} className='absolute right-0 bottom-0' />
    </section>
  )
}

export default Home