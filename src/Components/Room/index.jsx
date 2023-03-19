import React from "react";
import { CounterValue } from "../UnitsCounter/style";
import { RoomDetail, RoomHeader } from "./style";

export default function Room(props) {
  return (
    <>
      <RoomHeader>
        <p className="title"> غرفة رقم {props.count} </p>
        <p className="remove">حذف الغرفة</p>
      </RoomHeader>
      <RoomDetail>
        <div>
          <p> عدد الأسرة المزدوجة </p>
          <CounterValue>3</CounterValue>
        </div>
        <div>
          <p> عدد الأسرة الفردية </p>
          <CounterValue>2</CounterValue>
        </div>
        <div>
          <p> عدد أسرة الأريكة </p>
          <CounterValue>3</CounterValue>
        </div>
      </RoomDetail>
    </>
  );
}
