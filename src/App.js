import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleClick = (type) => {
    dispatch({ type });
  };
  return (
    <div className="app">
      <h1>⚛️ react playground!</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={(e) => handleClick("add")}>Add</button>
      <button onClick={(e) => handleClick("minus")}>Minus</button>
    </div>
  );
}
