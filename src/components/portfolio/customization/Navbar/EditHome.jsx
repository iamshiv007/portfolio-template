import React, { useState } from 'react'
import { usePortfolioValues } from '../../../../context/portfolioValuesContext'
import TextBox from '../components/Box/TextBox'
import { useApplicationContext } from '../../../../context/applicationContext'
import ArrayData from '../components/ArrayData'

const EditHome = () => {
    const { screenSize } = useApplicationContext()
    const { text1, setText1, text2, setText2, text3, setText3, animatedTexts, setAnimatedTexts } = usePortfolioValues()

    return (
        <div className={`w-[400px] px-2 py-4 bg-gray-50 border  rounded-md ${screenSize === "fullscreen" && "hidden"} flex flex-col gap-5 overflow-y-scroll`}>
            <section>
                <TextBox text_={text1} setText={setText1} maxSize={6} />
            </section>
            <section>
                <TextBox text_={text2} setText={setText2} maxSize={11} />
            </section>
            <section>
                <TextBox text_={text3} setText={setText3} maxSize={6} />
            </section>
            <section>
                <ArrayData name="Animated Text" array={animatedTexts} setArray={setAnimatedTexts} placeholder="Type Your text" limit={5} />
                {/* <p className='py-2'>Animated Text</p>
                <div className='flex gap-2 justify-between'>
                    <input type="text" placeholder='Type..' className='text-sm w-full p-2 border border-gray-400 rounded-md outline-none' onChange={(e) => setSelectedText(e.target.value)} value={selectedText} />
                    <button className='text-sm text-white py-1 px-2 bg-blue-500 hover:bg-blue-600 rounded' onClick={handleAddBtn}>Add</button>
                </div>
                <div className='mt-2 flex gap-1 flex-wrap'>
                    {animatedTexts.filter((text, index) => index % 2 === 0).map((text) =>
                        <div className='px-1 bg-blue-500 rounded flex gap-1 items-center'>
                            <p className='text-xs text-white'>{text}</p>
                            <button className='text-blue-800 hover:text-blue-900' onClick={() => handleCrossBtn(text)}><IoCloseCircleSharp /></button>
                        </div>
                    )}
                </div> */}
            </section>
        </div>
    )
}

export default EditHome