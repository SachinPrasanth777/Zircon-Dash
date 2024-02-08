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

export default function Dashboard() {
  return (
    <>
    <Navbar/>
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
            <div className="flex mt-8 gap-6">
              {/* flex row */}

              {/* Column with max and donut first row element */}
              <div className="flex flex-col gap-6">
                {/* Max Footfall Component */}
                <TestMax></TestMax>
                {/* Donut Component */}
                <TestDonut className="w-96 m-2"></TestDonut>
              </div>

              {/* Line graph second element in row */}

              <TestLine className="w-5 m-2"></TestLine>
            </div>
          </TabPanel>

          {/* Second Tab For footage */}

          <TabPanel>
            <Video />
          </TabPanel>

          {/* Third tab for bar graph of sales vs footfall */}

          <TabPanel>
            <TestBar />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
    </>
  );
}
