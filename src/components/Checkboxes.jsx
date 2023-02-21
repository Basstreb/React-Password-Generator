import React from 'react';

const Checkboxes = ({
  lowerCase, setLowerCase,
  upperCase, setUpperCase,
  numbers, setNumbers,
  symbols, setSymbols,
  length, setLength,
}) => {
  return (
    <div className='text-center'>
      <div className="mt-2 flex justify-center">
        <div className="flex items-center justify-between w-[300px]">
          <label htmlFor="lowerCase" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Lowercase
          </label>
          <input
            id="lowerCase"
            type="checkbox"
            value={lowerCase}
            checked={lowerCase}
            onChange={() => setLowerCase(!lowerCase)}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
        </div>
      </div>

      <div className="mt-2 flex justify-center">
        <div className="flex items-center justify-between w-[300px]">
          <label htmlFor="upperCase" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Uppercase
          </label>
          <input
            id="upperCase"
            type="checkbox"
            value={upperCase}
            checked={upperCase}
            onChange={() => setUpperCase(!upperCase)}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
        </div>
      </div>

      <div className="mt-2 flex justify-center">
        <div className="flex items-center justify-between w-[300px]">
          <label htmlFor="numbers" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Numbers
          </label>
          <input
            id="numbers"
            type="checkbox"
            value={numbers}
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
        </div>
      </div>

      <div className="mt-2 flex justify-center">
        <div className="flex items-center justify-between w-[300px]">
          <label htmlFor="symbols" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Symbols
          </label>
          <input
            id="symbols"
            type="checkbox"
            value={symbols}
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
        </div>
      </div>

      <div>
        <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{`Password characters: ${length}`}</label>
        <input
          id="minmax-range"
          type="range"
          min="8"
          max="50"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-[500px] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
      </div>
    </div>
  );
};

export default Checkboxes;
