import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: 'Counter page',
  description: 'Un simple contador',
};

export const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      CounterPage
      <span>Productos en el carrito</span>
      <CartCounter />
    </div>
  )
}

export default CounterPage;