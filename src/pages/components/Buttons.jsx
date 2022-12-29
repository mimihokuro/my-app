import styles from "./Buttons.module.css";
import { useCallback, useState } from "react";

export const Buttons = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClick = useCallback(() => {
    console.log(count);
    setCount((count) => count + 10);
  }, [count]);

  const handleText = useCallback(
    (e) => {
      if (text.length >= 5) {
        return;
      }
      setText(e.target.value.trim());
    },
    [text]
  );

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("Same");
      }
      const newArray = [...prevArray, text];
      setText("");
      return newArray;
    });
  }, [text]);

  return (
    <div className={styles.flex}>
      {isShow ? (
        <div className={styles.thirteen}>
          <h1>{count}</h1>
        </div>
      ) : null}
      <button onClick={handleClick}>CountUp</button>
      <button onClick={handleDisplay}>{isShow ? "表示" : "非表示"}</button>
      <button onClick={handleAdd}>追加</button>
      <input type="text" value={text} onChange={handleText} />
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
export default Buttons;
