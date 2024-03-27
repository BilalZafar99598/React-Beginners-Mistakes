import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);
  const [obj, setObj] = useState({
    first: "",
    last: ""
  });

  const add = () => {
    // Instead using setCount(count+1) use prevStat with anonmous function
    setCount(prevState => prevState+1);
    setCount(prevState => prevState+1);
    updateArray('Hello');

    // This is not a good way to update value
    // setCount(count+1);
    // setCount(count+1);
  }

  const sub = () => {

    // This is not a good way to update value
    // setCount(count-1);
    // setCount(count-1);
    setCount(prev => prev-1);
    setCount(prev => prev-1);
    updateObject();
  }

  const updateArray = (newVal) => {
    setArr(prev => [...prev, newVal]);
    console.log(arr);
  }

  const updateObject = () => {
    setObj(prev => ({...prev, first:"ABC", last:"XYZ"}));
    console.log(obj);
  }
  
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={() => add()}>+</button>
        <button onClick={() => sub()}>-</button>
    </div>
  )
}

export default App
