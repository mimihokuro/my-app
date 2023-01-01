import "../styles/globals.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";

const App = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  return <Component {...pageProps} {...counter} {...inputArray} />;
};
export default App;
