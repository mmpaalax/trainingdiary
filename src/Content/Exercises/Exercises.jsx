import "./exercises.css";

import { IoInformationCircleSharp } from "react-icons/io5";
import { useState } from "react";
import DateCard from "./DateCard";

const Exercises = ({ exercises, setExercises }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const handleInfoToggle = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  const now = new Date();
  const date = now.toLocaleDateString("fi-FI", {
    timeZone: "Europe/Helsinki",
    day: "numeric",
    month: "numeric",
  });
  const weekday = now.toLocaleDateString("fi-FI", {
    timeZone: "Europe/Helsinki",
    weekday: "short",
  });
  console.log(date, weekday);


const past7Days = Array.from({ length: 7 }, (_, i) => {
  const d = new Date(now);
  d.setDate(now.getDate() - i);
  
  const weekday = d.toLocaleDateString("fi-FI", {
    timeZone: "Europe/Helsinki",
    weekday: "short",
  });

  const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  const date = d.toLocaleDateString("fi-FI", {
    timeZone: "Europe/Helsinki",
    day: "numeric",
    month: "numeric",
  });

  return {date:date, weekday:capitalizedWeekday}
  // return `${capitalizedWeekday} ${date}`;
});

console.log(past7Days);


  return (
    <div className="exercise2">
      <div className="exe2Header">
        <h2>
          <span>Harjoitukset</span>
          <IoInformationCircleSharp
            size={20}
            style={{ transform: "translateY(2px)" }}
            onClick={handleInfoToggle}
          />
        </h2>
        {isInfoOpen ? (
          <div className="exeInfo">
            <p>
              Voit katsella ja muokata harjoituksiasi viimeisen 7 päivän ajalta.
            </p>
          </div>
        ) : null}
      </div>
      <div className="exeHeaderLine"></div>

      <div className="showExe">
        <div className="DateCard">
          {past7Days.map((day, index) => {
            return (
              <DateCard
                key={index}
                exercises={exercises}
                setExercises={setExercises}
                day={day}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Exercises;
