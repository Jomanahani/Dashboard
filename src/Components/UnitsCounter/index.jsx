import React, { useState } from "react";
import { SupTitle } from "../Container/style";
import { CounterButt, CounterHead, CounterValue, Unit, UnitsContainer, UnitsNumber } from "./style";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";

export default function UnitsCounter() {
  const [count, setCount] = useState(0);
  const [units, setUnits] = useState([]);

  const Increment = () => {
    setCount(count + 1);
    setUnits([...units, count+1]);
  };

  const Decrement = () => {
    if(count > 0){
      setCount(count - 1);
      setUnits(units.slice(0, -1));
    }
  };

  return (
    <div style={{width:"65%",margin:" 0 1.2rem"}}>
      <CounterHead>
        <SupTitle>عدد الوحدات</SupTitle>
        <div>
          <CounterButt onClick={Increment}>
            <AiOutlinePlus />
          </CounterButt>
          <CounterValue>
            {count}
          </CounterValue>
          <CounterButt onClick={Decrement}>
            <FiMinus />
          </CounterButt>
        </div>
      </CounterHead>
      <UnitsNumber>
      <SupTitle>أرقام الوحدات </SupTitle>
      <UnitsContainer>
        {units.map((count)=>(
        <Unit>
          <p>وحدة رقم {count}</p>
        <CounterValue>501</CounterValue>
        </Unit>
        ))}
      </UnitsContainer>
      </UnitsNumber>
    </div>
  );
}
