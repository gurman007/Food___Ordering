import React from "react";
function OpeningHour({ day, hours }) {
  return (
    <div className="[&>*]:text-yellow-600 flex justify-between">
      <p className="px-4">{day}</p>
      <p className="px-4">{hours}</p>
    </div>
  );
}
export default OpeningHour;
