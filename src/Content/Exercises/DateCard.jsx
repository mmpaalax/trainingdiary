import { CiCirclePlus } from "react-icons/ci";
import OneExe from "./OneExe";
import { useState } from "react";

const DateCard = ({ exercises, setExercises, day }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const addExercise = () => {
    const newExercise = {
      sport: "",
      theme: "",
      time: "",
      difficulty: "",
      difficultyOpen: false,
      feeling: "",
      feelingOpen: false,
      otherInfo: "",
    };
    setExercises([...exercises, newExercise]);
  };

  const handleCardToggle = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div className="dateCardWrapper">
      <div className="dateCard" onClick={handleCardToggle}>
        <span className="cardWeekday">{day.weekday}</span>
        <span className="cardDate">{day.date}</span>
      </div>

      {isCardOpen && (
        <div className="dateCardOpen">
          {exercises.map((exercise, index) => (
            <OneExe
              key={index}
              exercises={exercises}
              setExercises={setExercises}
              exercise={exercise}
            />
          ))}


          <div className="addExercise">
            <CiCirclePlus size={28} color="#e93a78" onClick={addExercise} />
            {exercises.length === 0 ? (
              <span>Ei harjoituksia tälle päivälle</span>
              ) : null}
          </div>
        </div>
      )}
    </div>
  );
};
export default DateCard;
