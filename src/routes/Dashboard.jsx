"use client";

import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Title,
} from "@tremor/react";

import Video from "../components/Video";
import TestLine from "../components/TestLine";
import TestDonut from "../components/TestDonut";
import TestMax from "../components/TestMax";
import TestBar from "../components/TestBar";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { Combined } from "../constants/CombinedData";

import {
  calculateMaxAverage,
  calculateItemAverage,
  samplefoot,
} from "../constants/Data";

import { useEffect, useState } from "react";

export default function Dashboard(props) {
  const [data, setData] = useState([]);
  const [saledata, setSaledata] = useState([]);
  const [sectionNames, setSectionNames] = useState({});
  const { link } = useParams();

  const getData = async () => {
    try {
      const call = await fetch(
        "https://65c5c2d9e5b94dfca2e040d7.mockapi.io/footfalldata"
      );
      const response = await call.json();
      setData(response);
      extractSectionNames(response); 
    } catch (e) {
      console.log(e);
    }
  };

  const getSaleData = async () => {
    try {
      const call = await fetch(
        "https://65c5c2d9e5b94dfca2e040d7.mockapi.io/saledata"
      );
      const response = await call.json();
      setSaledata(response);
    } catch (e) {
      console.log(e);
    }
  };

  const extractSectionNames = (data) => {
    if (data.length > 0) {
      const firstDataItem = data[0];
      setSectionNames(firstDataItem.SectionNames);
    }
  };

  useEffect(() => {
    getData();
    getSaleData();
  }, [link]); // Include link in the dependency array to trigger the effect when it changes

  const itemAverage = calculateItemAverage(data);
  const { maxAverage, maxAverageItem } = calculateMaxAverage(itemAverage);

  const Section1Data = Combined(data, saledata, "Section1");
  const Section2Data = Combined(data, saledata, "Section2");
  const Section3Data = Combined(data, saledata, "Section3");
  const Section4Data = Combined(data, saledata, "Section4");
  const Section5Data = Combined(data, saledata, "Section5");

  return (
    <>
      <Navbar sectionNames={sectionNames} />
      <main className="px-36 py-5">
        <h1 className="text-5xl font-semibold">Dashboard</h1>

        <TabGroup className="mt-6">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Footage</Tab>
            <Tab>Sales</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="flex flex-col mt-8 gap-6">
                {/* flex row */}

                {/* Column with max and donut first row element */}
                <div className="flex gap-6">
                  {/* Max Footfall Component */}
                  <TestMax
                    maxItem={maxAverageItem}
                    maxAverage={maxAverage}
                    sectionNames={sectionNames}
                  ></TestMax>
                  {/* Donut Component */}
                  <TestDonut
                    itemAverage={itemAverage}
                    className="w-96 m-2"
                    sectionNames={sectionNames}
                  ></TestDonut>
                </div>

                {/* Line graph second element in row */}

                <TestLine
                  className="w-5 m-2"
                  data={data}
                  sectionNames={sectionNames}
                ></TestLine>
              </div>
            </TabPanel>

            {/* Second Tab For footage */}

            <TabPanel>
              <Video />
            </TabPanel>

            {/* Third tab for bar graph of sales vs footfall */}

            <TabPanel>
              {" "}
              <TestBar
                Section1Data={Section1Data}
                Section2Data={Section2Data}
                Section3Data={Section3Data}
                Section4Data={Section4Data}
                Section5Data={Section5Data}
                sectionNames={sectionNames}
              />{" "}
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>
    </>
  );
}
