import React, { useState } from 'react'


export default function Exam2() {
    const percent = [100, 7, 107, 3, 104];

    const [result, setResult] = useState({
        cell1: "",
        cell2: "",
        cell3: "",
        cell4: "",
        cell5: "",
    });

    const handleOnClearButton = () => {
        setResult({
            cell1: "",
            cell2: "",
            cell3: "",
            cell4: "",
            cell5: "",
        });
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setResult({
            ...result,
            [name]: value,
        });
    };

    const handleOnGo = () => {
        const filledCell = Object.entries(result).find(([key, value]) => value !== "");
        if (!filledCell) return;
        const [name, value] = filledCell;
        const numericValue = parseFloat(value);
        if (isNaN(numericValue)) return;

        const cellIndex = parseInt(name.replace("cell", "")) - 1;
        const calculatedResults = percent.map((p) => (numericValue / percent[cellIndex]) * p);

        setResult({
            cell1: calculatedResults[0],
            cell2: calculatedResults[1],
            cell3: calculatedResults[2],
            cell4: calculatedResults[3],
            cell5: calculatedResults[4],
        });
    };


    return (
        <div>
            <h1 className="font-bold">
                Create a web app which can calculate the ratios from a user input number:
            </h1>
            <ul>
                <li>- User input a number in one of the five input fields.</li>
                <li>- The app calculates the values for the other four fields according to the number given on the top.</li>
                <li>- There must be a button to clear all fields.</li>
            </ul>
            <br />
            <h1 className='font-bold'>solution</h1>
            <h1>ผู้ใช้กรอกได้ 1 ช่อง</h1>
            <table className="text-l border border-black">
                <thead>
                    <tr>
                        {percent.map((percent, index) => (
                            <th className="border border-black w-60" key={index}>
                                {percent}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="border border-black w-60">
                            <input
                                name="cell1"
                                onChange={handleOnChange}
                                value={result.cell1}
                                type="text"
                            />
                        </th>
                        <th className="border border-black w-60">
                            <input
                                name="cell2"
                                onChange={handleOnChange}
                                value={result.cell2}
                                type="text"
                            />
                        </th>
                        <th className="border border-black w-60">
                            <input
                                name="cell3"
                                onChange={handleOnChange}
                                value={result.cell3}
                                type="text"
                            />
                        </th>
                        <th className="border border-black w-60">
                            <input
                                name="cell4"
                                onChange={handleOnChange}
                                value={result.cell4}
                                type="text"
                            />
                        </th>
                        <th className="border border-black w-60">
                            <input
                                name="cell5"
                                onChange={handleOnChange}
                                value={result.cell5}
                                type="text"
                            />
                        </th>
                    </tr>
                </tbody>
            </table>
            <div className="flex flex-row gap-4 py-5">
                <button onClick={handleOnGo} className="bg-slate-100 px-2 border border-black">GO</button>
                <button onClick={handleOnClearButton} className="underline text-purple-900 active:text-red-700">Clear</button>
            </div>
        </div>
    );
}
