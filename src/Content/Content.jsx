import { useState } from "react";
import "./content.css";
import MainPage from "./MainPage/MainPage";
import Exercises from "./Exercises/Exercises";
import { Route, Routes } from "react-router";

const Content = () => {
  const [exercises, setExercises] = useState([]);

  return (
    <div className="content">
      <Routes>
        <Route index element={<MainPage exercises={exercises} setExercises={setExercises} />} />
        <Route path="harjoitukset" element={<Exercises exercises={exercises} setExercises={setExercises}/>} />
      </Routes>
    </div>
  );
};

export default Content;
