import React from "react";
import { Select, SelectItem } from "@tremor/react";

const TimeSelect = () => {
  const hours = Array.from(Array(24).keys()); // Generate an array of 24 hours

  return (
    <Select>
      {hours.map((hour) => (
        <SelectItem
          key={hour}
          value={`${hour % 12 || 12}${hour >= 12 ? "PM" : "AM"}`}
        >
          {`${hour % 12 || 12}${hour >= 12 ? "PM" : "AM"}`}
        </SelectItem>
      ))}
    </Select>
  );
};

export default TimeSelect;
