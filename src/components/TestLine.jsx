import { Card, LineChart, Title } from "@tremor/react";
import { footfalldata } from "../constants/Data";

// const valueFormatter = (number) =>
//   `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const TestLine = () => (
  <Card>
    <Title>Hourly Footfall </Title>
    <LineChart
      className="mt-6"
      data={footfalldata}
      index="time"
      categories={["Tshirts", "Jeans", "Shoes", "Bags", "Jackets"]}
      colors={["neutral", "indigo", "rose", "orange", "emerald"]}
      //   valueFormatter={valueFormatter}
      yAxisWidth={100}
    />
  </Card>
);

export default TestLine;
