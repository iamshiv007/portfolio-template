import React from 'react'
import { usePortfolioValues } from '../../../../context/portfolioValuesContext'
import TextBox from '../components/Box/TextBox'
import { useApplicationContext } from '../../../../context/applicationContext'
import ArrayData from '../components/ArrayData'
import RangeInput from '../components/RangeInput'
import PositionSet from '../components/PositionSet'
import ImageSize from '../components/ImageSize'

const EditHome = () => {
    const { screenSize } = useApplicationContext()
    const { gap1, setGap1, paddingX1, setPaddingX1, image1, setImage1, text1, setText1, text2, setText2, text3, setText3, animatedTexts, setAnimatedTexts } = usePortfolioValues()

    return (
        <div className={`w-[400px] px-2 py-4 bg-gray-50 border  rounded-md ${screenSize === "fullscreen" && "hidden"} flex flex-col gap-5 overflow-y-scroll`}>
            <p className='text-center font-bold p-2'>Home Customization</p>
            <section>
                <RangeInput name="Gap Y" step={5} min={10} max={50} value={gap1} setValue={setGap1} />
            </section>

            <section>
                <RangeInput name="Padding X" step={10} min={50} max={180} value={paddingX1} setValue={setPaddingX1} />
            </section>

            <section>
                <ImageSize name="Image Size" image={image1} setImage={setImage1} maxSize={500} minSize={300} />
            </section>
            <section>
                <PositionSet name="Image Position" value={image1} setValue={setImage1} maxBottom={70} maxRight={70} />
            </section>

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