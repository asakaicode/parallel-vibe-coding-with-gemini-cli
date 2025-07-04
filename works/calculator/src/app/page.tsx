
'use client';

import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-white text-right text-2xl p-2 rounded-md"
            value={input}
            readOnly
          />
          <div className="text-right text-gray-500 mt-2">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => handleClick('7')} className="p-4 bg-gray-200 rounded-md">7</button>
          <button onClick={() => handleClick('8')} className="p-4 bg-gray-200 rounded-md">8</button>
          <button onClick={() => handleClick('9')} className="p-4 bg-gray-200 rounded-md">9</button>
          <button onClick={() => handleClick('/')} className="p-4 bg-orange-400 text-white rounded-md">/</button>

          <button onClick={() => handleClick('4')} className="p-4 bg-gray-200 rounded-md">4</button>
          <button onClick={() => handleClick('5')} className="p-4 bg-gray-200 rounded-md">5</button>
          <button onClick={() => handleClick('6')} className="p-4 bg-gray-200 rounded-md">6</button>
          <button onClick={() => handleClick('*')} className="p-4 bg-orange-400 text-white rounded-md">*</button>

          <button onClick={() => handleClick('1')} className="p-4 bg-gray-200 rounded-md">1</button>
          <button onClick={() => handleClick('2')} className="p-4 bg-gray-200 rounded-md">2</button>
          <button onClick={() => handleClick('3')} className="p-4 bg-gray-200 rounded-md">3</button>
          <button onClick={() => handleClick('-')} className="p-4 bg-orange-400 text-white rounded-md">-</button>

          <button onClick={() => handleClick('0')} className="p-4 bg-gray-200 rounded-md">0</button>
          <button onClick={() => handleClick('.')} className="p-4 bg-gray-200 rounded-md">.</button>
          <button onClick={handleCalculate} className="p-4 bg-green-500 text-white rounded-md col-span-1">=</button>
          <button onClick={() => handleClick('+')} className="p-4 bg-orange-400 text-white rounded-md">+</button>

          <button onClick={handleClear} className="p-4 bg-red-500 text-white rounded-md col-span-4">Clear</button>
        </div>
      </div>
    </main>
  );
}
