import { BarChart, Card, Title } from "@tremor/react";
import { TestSelect } from "./TestSelect";
import { useState } from "react";
import { TshirtsData } from "../constants/CombinedData";
const valueFormatter = (number) =>
  ` ${new Intl.NumberFormat("us").format(number).toString()}`;

const TestBar = () => {
  const [value, setValue] = useState(TshirtsData); // Move the useState inside the component

  return (
    <Card className="flex flex-col mt-8">
      <div className="flex justify-between p-2 w-full">
        <Title>Footfall Vs Sales</Title>
        <TestSelect value={value} setValue={setValue} />
      </div>
      <BarChart
        className="mt-6 rounded-tremor-full"
        data={value}
        index="time"
        categories={["Footfall", "Sale"]}
        colors={["blue", "emerald"]}
        valueFormatter={valueFormatter}
        yAxisWidth={48}
      />
    </Card>
  );
};

export default TestBar;
