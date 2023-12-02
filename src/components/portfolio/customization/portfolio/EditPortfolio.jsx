import React from 'react'
import { useApplicationContext } from '../../../../context/applicationContext';
import ThemeBtn from '../components/ThemeBtn';
import FontOptions from '../components/FontOptions';

const EditPortfolio = () => {
  const { screenSize } = useApplicationContext()

  return (
    <div className={`w-[400px] px-2 py-4 bg-gray-50 border  rounded-md ${screenSize === "fullscreen" && "hidden"} flex flex-col gap-5 overflow-y-scroll`}>
      <p className='text-center font-bold p-2'>Portfolio Customization</p>
      <section>
        <p className='text-sm py-2'>Color Theme</p>
        <div className='flex gap-2'>
          <ThemeBtn light={"#CE9076"} dark={"#312722"} />
          <ThemeBtn light={"#768FCE"} dark={"#222431"} />
          <ThemeBtn light={"#92CE76"} dark={"#223124"} />
        </div>
      </section>

      <section>
        <p className='text-sm py-2'>Font Family</p>
        <FontOptions />
      </section>

    </div>
  )
}

export default EditPortfolio