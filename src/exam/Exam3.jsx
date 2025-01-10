import React from 'react'

export default function Examp3() {

    const array1 = [
        { code: 101, name: "AAA" },
        { code: 102, name: "BBB" },
        { code: 103, name: "CCC" }

    ]

    const array2 = [
        { code: 103, city: "Singapore" },
        { code: 102, city: "Tokyo" },
        { code: 101, city: "Bangkok" }

    ]


    function mappingArray(array1, array2) {
        return array1.map(item1 => {
            const matchedItem = array2.find(item2 => item2.code === item1.code);
            return {
                ...item1,
                city: matchedItem ? matchedItem.city : null
            };
        });
    }

    const sumArray = mappingArray(array1, array2)

    return (
        <div>
            <h1 className="font-bold">
                Write a code that performs the array MAPPING function similar to VLOOKUP where the input arrays are 'Array1' and 'Array2' returning 'Output' array.
            </h1>
            <div className='flex flex-col gap-5 w-32'>
                <table className="text-l border border-black mt-5">
                    <thead>
                        <tr>
                            <th className='border border-black'>Code</th>
                            <th className='border border-black'>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            array1.map((item, index) => {
                                return <tr key={index}>
                                    <th className='border border-black'>{item.code}</th>
                                    <th className='border border-black'>{item.name}</th>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <table className="text-l border border-black">
                    <thead>
                        <tr>
                            <th className='border border-black'>Code</th>
                            <th className='border border-black'>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            array2.map((item, index) => {
                                return <tr key={index}>
                                    <th className='border border-black'>{item.code}</th>
                                    <th className='border border-black'>{item.city}</th>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <br />
            <h1 className='font-bold'>solution</h1>
            <h1>output</h1>
            <table className="text-l border border-black">
                <thead>
                    <tr>
                        <th className='border border-black'>Code</th>
                        <th className='border border-black'>Name</th>
                        <th className='border border-black'>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sumArray.map((item, index) => {
                            return <tr key={index}>
                                <th className='border border-black'>{item.code}</th>
                                <th className='border border-black'>{item.name}</th>
                                <th className='border border-black'>{item.city}</th>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
