"use client";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { addOne, substractOne } from "@/app/store/counter/counterSlice";

export const CartCounter = () => {

const count = useAppSelector( state => state.counter.count);
const dispatch = useAppDispatch();

const handleCounter = (operation: string) => {
  return operation === 'sum' ? dispatch(addOne()) : dispatch(substractOne());
};

  return (
    <>
    <span className="text-9xl">{count}</span>
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
