import React from 'react'
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
            </section>
        </div>
    )
}

export default EditHome