import React from 'react';

const Checkboxes = () => {
  return (
    <div className='text-center'>
      <div className="mt-2">
        <div className="">
          <label htmlFor="lowerCase" className="">
            Lowercase
          </label>
          <input
            id="lowerCase"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
        </div>
      </div>

      <div className="mt-2">
        <div className="items-center justify-between w-[300px]">
          <label htmlFor="upperCase" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Uppercase
          </label>
          <input
            id="upperCase"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
        </div>
      </div>

      <div className=" mt-2">
        <div className=" items-center justify-between w-[300px]">
          <label htmlFor="numbers" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Numbers
          </label>
          <input
            id="numbers"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
        </div>

      </div>

      <div className=" mt-2">
        <div className=" items-center justify-between w-[300px]">
          <label htmlFor="symbols" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Symbols
          </label>
          <input
            id="symbols"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Checkboxes;
