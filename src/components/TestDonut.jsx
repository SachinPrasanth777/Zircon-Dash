import React from "react";
import { Card, DonutChart, Title } from "@tremor/react";

// Transform averages into an array of objects

const valueFormatter = (number) =>
  ` ${new Intl.NumberFormat("us").format(number).toString()}`;



const TestDonut = (props) => {
  const itemAveragesArray = Object.keys(props.itemAverage).map((itemName) => ({
    name: props.sectionNames[itemName], // Use display name instead of original name
    average: props.itemAverage[itemName],
  }));

  return (
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
};

export default TestDonut;
