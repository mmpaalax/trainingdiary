import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiAngry } from "react-icons/bs";
import "./oneexe.css";

const OneExe = ({ setExercises, exercises, exercise }) => {
  const difficultyOptions = [
    { value: "Easy", label: "Kevyt", className: "green" },
    { value: "Semi", label: "Haastava", className: "yellow" },
    { value: "Hard", label: "Raskas", className: "red" },
  ];

  const feelingOptions = [
    { value: "Good", emoji: <BsEmojiSmile color="#e93a78" /> },
    { value: "Okay", emoji: <BsEmojiNeutral color="#e93a78" /> },
    { value: "Bad", emoji: <BsEmojiAngry color="#e93a78" /> },
  ];

  return (
    <div className="oneExe">
      <select
        value={exercise.sport}
        onChange={(e) =>
          setExercises(
            exercises.map((ex) =>
              ex === exercise ? { ...ex, sport: e.target.value } : ex,
            ),
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
                ex === exercise ? { ...ex, theme: e.target.value } : ex,
              ),
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
                  ex === exercise ? { ...ex, time: e.target.value } : ex,
                ),
              )
            }
          />
          <div className="difficultyDropdown">
            <div
              className={`dropdownSelected ${
                exercise.difficulty
                  ? difficultyOptions.find(
                      (d) => d.value === exercise.difficulty,
                    ).className
                  : ""
              }`}
              onClick={() =>
                setExercises(
                  exercises.map((ex) =>
                    ex === exercise
                      ? { ...ex, difficultyOpen: !ex.difficultyOpen }
                      : ex,
                  ),
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
                            : ex,
                        ),
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
                      : ex,
                  ),
                )
              }
            >
              {feelingOptions.find((f) => f.value === exercise.feeling)
                ?.emoji || "Fiilis"}
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
                                feeling: f.value,
                                feelingOpen: false,
                              }
                            : ex,
                        ),
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
      <input
        className="otherInfo"
        value={exercise.otherInfo}
        type="text"
        placeholder="Muu huomio"
        onChange={(e) =>
          setExercises(
            exercises.map((ex) =>
              ex === exercise ? { ...ex, otherInfo: e.target.value } : ex,
            ),
          )
        }
      />
    </div>
  );
};
export default OneExe;
