import "./exercises.css";
import { CiCirclePlus } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiAngry } from "react-icons/bs";
import { IoInformationCircleSharp } from "react-icons/io5";
import { useState } from "react";

const Exercises = ({ exercises, setExercises }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const addExercise = () => {
    const newExercise = {
      sport: "",
      theme: "",
      time: "",
      difficulty: "",
      difficultyOpen: false,
      feeling: "",
      feelingOpen: false,
    };
    setExercises([...exercises, newExercise]);
  };

  const difficultyOptions = [
    { value: "Easy", label: "Kevyt", className: "green" },
    { value: "Semi", label: "Haastava", className: "yellow" },
    { value: "Hard", label: "Raskas", className: "red" },
  ];

  const feelingOptions = [
    { value: "good", emoji: <BsEmojiSmile color="#e93a78" /> },
    { value: "okay", emoji: <BsEmojiNeutral color="#e93a78" /> },
    { value: "bad", emoji: <BsEmojiAngry color="#e93a78" /> },
  ];

  const handleInfoToggle = () => {
    setIsInfoOpen(!isInfoOpen);
  };

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
      <div className="addExercise">
          <CiCirclePlus size={28} color="#e93a78" onClick={addExercise} />
        </div>
      <div className="showExe">
        
        {exercises.map((exercise, index) => (
          <div className="oneExe" key={index}>
            <select
              value={exercise.sport}
              onChange={(e) =>
                setExercises(
                  exercises.map((ex) =>
                    ex === exercise ? { ...ex, sport: e.target.value } : ex
                  )
                )
              }
            >
              <option value="" hidden>
                Laji
              </option>
              <option value="Swim">Uinti</option>
              <option value="Gym">Sali</option>
              <option value="Run">Juoksu</option>
              <option value="Walk">Kävely</option>
              <option value="Bike">Pyöräily</option>
              <option value="Circuit">Kuntopiiri</option>
              <option value="Stretching">Kehonhuolto</option>
              <option value="Skiing">Hiihto</option>
              <option value="BallGames">Pallopelit</option>
              <option value="Spinning">Spinning</option>
              <option value="Other">Muu</option>
            </select>

            <div className="exeRightColumn">
              <input
                value={exercise.theme}
                type="text"
                placeholder="Teema"
                onChange={(e) =>
                  setExercises(
                    exercises.map((ex) =>
                      ex === exercise ? { ...ex, theme: e.target.value } : ex
                    )
                  )
                }
              />
              <div className="rightColumnUnder">
                <input
                  value={exercise.time}
                  type="number"
                  placeholder="Kesto"
                  onChange={(e) =>
                    setExercises(
                      exercises.map((ex) =>
                        ex === exercise ? { ...ex, time: e.target.value } : ex
                      )
                    )
                  }
                />
                <div className="difficultyDropdown">
                  <div
                    className={`dropdownSelected ${
                      exercise.difficulty
                        ? difficultyOptions.find(
                            (d) => d.value === exercise.difficulty
                          ).className
                        : ""
                    }`}
                    onClick={() =>
                      setExercises(
                        exercises.map((ex) =>
                          ex === exercise
                            ? { ...ex, difficultyOpen: !ex.difficultyOpen }
                            : ex
                        )
                      )
                    }
                  >
                    {exercise.difficulty ? "" : "Vaikeus"}
                  </div>

                  {exercise.difficultyOpen && (
                    <div className="dropdownOptions">
                      {difficultyOptions.map((d) => (
                        <div
                          key={d.value}
                          className={`dropdownOption ${d.className}`}
                          onClick={() =>
                            setExercises(
                              exercises.map((ex) =>
                                ex === exercise
                                  ? {
                                      ...ex,
                                      difficulty: d.value,
                                      difficultyOpen: false,
                                    }
                                  : ex
                              )
                            )
                          }
                        >
                          {d.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="feelingDropdown">
                  <div
                    className={`feelingButton ${
                      exercise.feeling ? "selectedFeeling" : ""
                    }`}
                    onClick={() =>
                      setExercises(
                        exercises.map((ex) =>
                          ex === exercise
                            ? { ...ex, feelingOpen: !ex.feelingOpen }
                            : ex
                        )
                      )
                    }
                  >
                    {exercise.feeling || "Fiilis"}
                  </div>

                  {exercise.feelingOpen && (
                    <div className="feelingOptions">
                      {feelingOptions.map((f) => (
                        <div
                          key={f.value}
                          className="feelingOption"
                          onClick={() =>
                            setExercises(
                              exercises.map((ex) =>
                                ex === exercise
                                  ? {
                                      ...ex,
                                      feeling: f.emoji,
                                      feelingOpen: false,
                                    }
                                  : ex
                              )
                            )
                          }
                        >
                          {f.emoji}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Exercises;
