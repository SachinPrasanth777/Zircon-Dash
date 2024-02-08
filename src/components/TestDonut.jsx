import React from "react";
import { Card, DonutChart, Title } from "@tremor/react";
import { itemAverage } from "../constants/Data";

// Transform averages into an array of objects
const itemAveragesArray = Object.keys(itemAverage).map((itemName) => ({
  name: itemName,
  average: itemAverage[itemName],
}));

const valueFormatter = (number) =>
  ` ${new Intl.NumberFormat("us").format(number).toString()}`;

const TestDonut = () => (
  <Card className="max-w-lg">
    <Title>Section Wise Footfall Average</Title>
    <DonutChart
      className="mt-6"
      data={itemAveragesArray}
      category="average"
      index="name"
      valueFormatter={valueFormatter}
      colors={["neutral", "indigo", "rose", "orange", "emerald"]}
    />
  </Card>
);

export default TestDonut;
