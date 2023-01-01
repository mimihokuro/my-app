import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleText = useCallback(
    (e) => {
      if (text.length >= 5) {
        return;
      }
      setText(e.target.value.trim());
    },
    [text]
  );

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.includes(text)) {
        alert("Same");
      }
      const newArray = [...prevArray, text];
      setText("");
      return newArray;
    });
  }, [text]);

  return { text, array, handleText, handleAdd };
};
