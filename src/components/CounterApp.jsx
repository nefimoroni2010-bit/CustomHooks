import { useCounter } from "../hooks/useCounter";


export const CounterApp = () => {

  const { counter, increment, decrement, reset } = useCounter(0);


  return (
      <>
         <h1>Counter</h1>
         <h4>{counter}</h4>
         <button className="btn-solid btn-styled theme-primary" onClick={() => increment()}>+1</button>
         <button className="btn-solid btn-styled theme-danger" onClick={() => reset()}>Reset</button>
         <button className="btn-solid btn-styled theme-primary" onClick={() => decrement()}>-1</button>
      </>

  )

}
