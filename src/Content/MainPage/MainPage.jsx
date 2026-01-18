import "./mainpage.css";
import { CiCirclePlus } from "react-icons/ci";
import OneExe from "../Exercises/OneExe";

const MainPage = ({ exercises, setExercises }) => {
  const now = new Date();
  const date = now.toLocaleDateString("fi-FI", {
    timeZone: "Europe/Helsinki",
    day: "numeric",
    month: "long",
  });
  const weekday = now.toLocaleDateString("fi-FI", {
    timeZone: "Europe/Helsinki",
    weekday: "long",
  });
  const capWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

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
  console.log(exercises);


  return (
    <div className="mainContent">
      <div className="content-wrapper">
        <div className="dateBlock">
          <span className="day">{capWeekday}</span>
          <span className="date">{date}</span>
          
        </div>
        <div className="sleep">
          <label>Uni:</label>
          <input
            type="number"
            id="sleepHours"
            min="0"
            max="24"
            placeholder="h"
          />
        </div>
      </div>

      <div className="exercise">
        <h2>Harjoitukset:</h2>
        <div className="showExe">
          {exercises.map((exercise, index) => (
          <OneExe key={index}
            exercises={exercises}
            setExercises={setExercises}
            exercise={exercise}
          />
        ))}
        </div>
        <div className="addExercise">
          <CiCirclePlus size={32} color="#e93a78" onClick={addExercise} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
