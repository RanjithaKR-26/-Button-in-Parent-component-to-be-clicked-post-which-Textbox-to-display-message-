import React, { useState } from "react";
import "./style.css";
import Text from "./Text";
import Button from "./Button";

export default function App() {
  const [date, setDate] = useState("");
  const changeText = () => {
    setDate(new Date().toDateString());
  };
  return (
    <div>
      <Button changeText={changeText} />
      <Text date={date} />
    </div>
  );
}
