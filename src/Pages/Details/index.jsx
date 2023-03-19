import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import Container from "../../Components/Container";
import { SupTitle } from "../../Components/Container/style";
import NextButt from "../../Components/NextButt";
import Room from "../../Components/Room";
import { CounterButt, CounterValue } from "../../Components/UnitsCounter/style";
import { PATHS } from "../../Router";
import { RoomCounter, RoomsContainer, SpaceInput } from "./style";

export default function Details() {
  const [count, setCount] = useState(0);
  const [space, setSpace] = useState(0);
  const [rooms, setRoomes] = useState([]);

  const hadleInputChange = (e) => {
    setSpace(e.target.value);
  };

  const Increment = () => {
    setCount(count + 1);
    setRoomes([...rooms, count + 1]);
  };

  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setRoomes(rooms.slice(0, -1));
    }
  };

  return (
    <>
      <Container title="تفاصيل">
        <SupTitle>مساحة الوحدة</SupTitle>
        <SpaceInput value={space} onChange={hadleInputChange}></SpaceInput>
        <RoomCounter>
          <SupTitle>عدد غرف النوم</SupTitle>
          <div>
            <CounterButt onClick={Increment}>
              <AiOutlinePlus />
            </CounterButt>
            <CounterValue>{count}</CounterValue>
            <CounterButt onClick={Decrement}>
              <FiMinus />
            </CounterButt>
          </div>
        </RoomCounter>
        <RoomsContainer>
          {rooms.map((room) => (
            <Room key={room} count={room} />
          ))}
        </RoomsContainer>
        <NextButt path={PATHS.UNITINFORMATION} />
      </Container>
    </>
  );
}
