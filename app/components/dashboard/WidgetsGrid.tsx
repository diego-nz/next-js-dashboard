'use client';

import { useAppSelector } from "@/app/store"
import { SimpleWidget } from "./SimpleWidget"

const WidgetsGrid = () => {
  const isCart = useAppSelector(state => state.counter.count)
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget 
        title={isCart.toString()}
        label="Contador"
        subtitle="Productos agregados"
        href="/dashboard/counter"
      />
    </div>
  )
}

export default WidgetsGrid