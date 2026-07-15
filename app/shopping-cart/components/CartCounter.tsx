"use client";

import { useState } from "react";

export const CartCounter = () => {

const [counter, setCounter] = useState(0);

const handleCounter = (operation: string) => {
  setCounter(counter + (operation === 'sum' ? 1 : -1));
};

  return (
    <>
    <span className="text-9xl">{counter}</span>
    <div className="flex">
        <button onClick={() => handleCounter('sum')} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2">
          +1
        </button>
        <button onClick={() => handleCounter('subtract')} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2">
          -1
        </button>
      </div>
    </>
  )
}
