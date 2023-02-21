import React, { useEffect, useState } from 'react'
import { createPassword } from '../helpers/createPassword';
import useChangeTheme from '../hooks/useChangeTheme';
import Checkboxes from './Checkboxes';

const Page = () => {
    const { changeTheme, setChangeTheme } = useChangeTheme();
    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [length, setLength] = useState(8);

    useEffect(() => {
        if(!lowerCase && !upperCase && !numbers && !symbols) {
            setLowerCase(true);
        }
    }, [lowerCase, upperCase, numbers, symbols])

    return (
        <div className="bg-white dark:bg-black flex h-screen flex-col text-center">
            <div className="mr-auto ml-auto flex flex-col" style={{ width: '800px' }}>
                <button className="ml-auto h-10 px-6 mt-3 font-semibold rounded-md bg-black dark:bg-white text-white dark:text-black" type="submit" onClick={() => setChangeTheme(!changeTheme)}>
                    {changeTheme ? "Light Mode" : "Dark Mode"}
                </button>
                <h1 className="text-4xl font-bold dark:text-white text-center p-5">
                    Password Generator JS
                </h1>
                <p className="dark:text-white">
                    Choose which characters you want to appear in the password:
                </p>

                <Checkboxes
                    lowerCase={lowerCase}
                    setLowerCase={setLowerCase}
                    upperCase={upperCase}
                    setUpperCase={setUpperCase}
                    numbers={numbers}
                    setNumbers={setNumbers}
                    symbols={symbols}
                    setSymbols={setSymbols}
                    length={length}
                    setLength={setLength}
                />

                <h2 className="text-3xl font-bold dark:text-white text-center p-5">
                    {createPassword(length, lowerCase, upperCase, numbers, symbols)}
                </h2>
            </div>
        </div>
    )
}

export default Page