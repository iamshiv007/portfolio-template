import React from 'react'
import boy2 from "../../../../assets/boy2.png"

const Home = () => {
  return (
    <section className='h-full bg-[#312722] flex items-center'>
      <div className='px-36 flex flex-col gap-8 z-10'>
        <p className='text-4xl text-white'>Hello,</p>
        <p className='text-7xl text-white font-bold'>I'm Mrikon Roth</p>
        <p className='text-2xl text-white'>I Am Passionate Developer |</p>
        <a href="#" className='button'>CONTACT US</a>
      </div>
      <div className='w-[60%] h-[110%] bg-[#CE9076] rounded-full absolute top-[-10%] right-[-15%]' />
      <img alt="boy2" src={boy2} className='absolute bottom-0 right-20' />
    </section>
  )
}

export default Home