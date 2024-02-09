import React, { useState } from "react";
import { Card } from "@tremor/react";
import { NumberInput } from "@tremor/react";
import TimeSelect from "../components/TimeSelect";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const Form = () => {
  const [time, setTime] = useState(""); // State to hold the selected time
  const [section1, setSection1] = useState(""); // State to hold the entered amount for Section1
  const [section2, setSection2] = useState(""); // State to hold the entered amount for Section2
  const [section3, setSection3] = useState(""); // State to hold the entered amount for Section3
  const [section4, setSection4] = useState(""); // State to hold the entered amount for Section4
  const [section5, setSection5] = useState(""); // State to hold the entered amount for Section5
  const [section6, setSection6] = useState(""); // State to hold the entered amount for Section6
  const { link } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch("http://localhost:8000/item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          time,
          section1,
          section2,
          section3,
          section4,
          section5,
          section6,
        }), // Sending time and amount data in JSON format
      });
      const data = await response.json();
      console.log("Data submitted successfully:", data);
      // Optionally, you can reset the form fields after successful submission
      setTime("");
      setSection1("");
      setSection2("");
      setSection3("");
      setSection4("");
      setSection5("");
      setSection6("");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Navbar />
        <Card className="flex flex-col w-fit p-10 mx-auto gap-4">
          <h1>Sales Data</h1>
          <p>Time</p>
          <TimeSelect value={time} onChange={(value) => setTime(value)} />
          <p>Section1</p>
          <NumberInput
            placeholder="Section1"
            value={section1}
            onChange={(e) => setSection1(e.target.value)}
          />
          <p>Section2</p>
          <NumberInput
            placeholder="Section2"
            value={section2}
            onChange={(e) => setSection2(e.target.value)}
          />
          <p>Section3</p>
          <NumberInput
            placeholder="Section3"
            value={section3}
            onChange={(e) => setSection3(e.target.value)}
          />
          <p>Section4</p>
          <NumberInput
            placeholder="Section4"
            value={section4}
            onChange={(e) => setSection4(e.target.value)}
          />
          <p>Section5</p>
          <NumberInput
            placeholder="Section5"
            value={section5}
            onChange={(e) => setSection5(e.target.value)}
          />
          <p>Section6</p>
          <NumberInput
            placeholder="Section6"
            value={section6}
            onChange={(e) => setSection6(e.target.value)}
          />
          <button type="submit">Submit</button>
        </Card>
      </form>
    </div>
  );
};

export default Form;
