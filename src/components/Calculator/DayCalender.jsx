import { DayPicker } from "react-day-picker";
const DayCalender = () => {
  return (
    <div>
      <div>
        <p>Select a date below to request an appointment for your estimate</p>
        <p>This selection is your preferred timing</p>
      </div>
      <DayPicker mode="single" />
      <div>
        <p>Select your estimate time preference</p>
        <div>
          <button className="btn">Morning</button>
          <button className="btn">Afternoon</button>
          <button className="btn">Anytime</button>
        </div>
      </div>
    </div>
  );
};

export default DayCalender;
