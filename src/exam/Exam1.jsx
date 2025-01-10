import React, { useState } from 'react'

export default function Exam1() {

    const [numberInput, setNumberInput] = useState("")
    const [outputStars, setOutputStars] = useState([])

    const handleOnChange = (e) => {
        setNumberInput(e.target.value)
    }

    const handleOnClick = () => {
        const result = displayStars(parseInt(numberInput, 10))
        setOutputStars(result)
        setNumberInput("")
    }

    const handleOnEnter = (e) => {
        if (e.key === "Enter") {
            const result = displayStars(parseInt(numberInput, 10))
            setOutputStars(result)
            setNumberInput("")
        }
    }

    function displayStars(numberOfStar) {
        let containerStar = []
        if (numberOfStar % 2 == 0) {
            for (let i = 0; i <= numberOfStar; i++) {
                containerStar.push("*".repeat(i));
            }
        } else {
            for (let i = numberOfStar; i >= 1; i--) {
                containerStar.push("*".repeat(i));
            }
        }
        return containerStar;
    }



    return (
        <div>
            <h1 className='font-bold'>
                Create a web app that output a triangle of '*' depending on the user input integer:
            </h1>
            <ul>
                <li>- For even numbers, a head-up triangle.</li>
                <li>- For odd numbers, an upside-down triangle.</li>
            </ul>
            <br />
            <h1 className='font-bold'>solution</h1>
            <div className='flex flex-row gap-2'>Number of Star :
                <input
                    onKeyDown={handleOnEnter}
                    value={numberInput}
                    onChange={handleOnChange}
                    type="text" className='border border-black' />
                <button onClick={handleOnClick} className='bg-slate-100 px-2 border border-black'>Go</button>
            </div>
            {outputStars.map((starSet, index) => {
                return <div key={index}>{starSet}</div>
            })}
        </div>
    )
}
