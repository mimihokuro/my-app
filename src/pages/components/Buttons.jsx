import styles from "./Buttons.module.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";

export const Buttons = () => {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleText, handleAdd } = useInputArray();

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
