import { useState } from "react";

export default function WeightCalculator() {
  const [height, setHeight] = useState<string>("160");
  const [weight, setWeight] = useState<number>(0);
  const [gender, setGender] = useState<string>("male");
  

  function calculateIdealWeight() {
    const difference= gender ==="male"? 100 :110;
    setWeight(Number(height) -difference);
  }

  return (
    <div>
      <h2>Weight Calculator</h2>
      {/*controlled input*/}
      <label htmlFor="height-input">Height</label>

      <input //в этом input значение берется из состояния height(useState)
        id="height-input"
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <select name="gender" id="gender-input"
        value={gender}
        onChange={(e) => setGender(e.target.value)}>
          
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button type="button" onClick={calculateIdealWeight}>
        Calculate ideal weight
      </button>
      {weight ? <p>Your ideal weight is: {weight} kg</p> : null}
    </div>
  );
}
