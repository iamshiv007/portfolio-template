import React from 'react'

const Home = () => {
  return (
    <section className='min-h-[100vh] bg-[#312722] flex items-center'>
        <div className='px-16 flex flex-col gap-5 z-10'>
            <p className='text-3xl text-white'>Hello,</p>
            <p className='text-6xl text-white font-bold'>I'm Mrikon Roth</p>
            <p className='text-xl text-white'>I Am Passionate Developer |</p>
            <a href="#" className='button'>CONTACT US</a>
            </div>
            <div className='w-[800px] h-[800px] bg-[#CE9076] rounded-full absolute top-[-200px] right-[-300px]'/>
            <img alt="boy1" src="./boy1.png" className='absolute' />
    </section>
  )
}

export default Home