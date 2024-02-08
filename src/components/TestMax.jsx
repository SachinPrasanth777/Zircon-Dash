import React from "react";
import { maxAverage, maxAverageItem } from "../constants/Data";
import { Card } from "@tremor/react";
const TestMax = () => {
  return (
    <>
      <Card className="max-w-xs mx-auto flex flex-col gap-4 w-96">
        <h1 className="text-2xl font-semibold"> Most Active Section</h1>
        <div className="flex flex-col gap-2 text-lg">
          <p className="font-medium">{maxAverageItem}</p>
          <p>{maxAverage} Customers per hour</p>
        </div>
      </Card>
    </>
  );
};

export default TestMax;
