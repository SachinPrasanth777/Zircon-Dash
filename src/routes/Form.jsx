import React, { useState } from "react";
import { Card } from "@tremor/react";
import { NumberInput } from "@tremor/react";
import TimeSelect from "../components/TimeSelect";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { TextInput } from "@tremor/react";

const Form = ({SectionNames,video_url}) => {
  const [time, setTime] = useState(0); // State to hold the selected time
  const [Section1, setSection1] = useState(0); // State to hold the entered amount for Section1
  const [Section2, setSection2] = useState(0); 
  const [Section3, setSection3] = useState(0); 
  const [Section4, setSection4] = useState(0); 
  const [Section5, setSection5] = useState(0); 
  const [Section6, setSection6] = useState(0); 

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
          Section1,
          Section2,
          Section3,
          Section4,
          Section5,
          Section6
        }), // Sending data in JSON format
      });
      const data = await response.json();
      console.log("Data submitted successfully:", data);
      // Optionally, you can reset the form fields after successful submission
      setTime(0);
      setSection1(0);
      setSection2(0);
      setSection3(0);
      setSection4(0);
      setSection5(0);
      setSection6(0);
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
          <NumberInput
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(parseInt(e.target.value))}
            />
          <p>Section1</p>
          {/* <TextInput
          value={video_url} className="hidden"/>        */}
          <NumberInput
            placeholder="Section1"
            value={Section1}
            onChange={(e) => setSection1(parseInt(e.target.value))}
            />
          <p>Section2</p>
          <NumberInput
            placeholder="Section2"
            value={Section2}
            onChange={(e) => setSection2(parseInt(e.target.value))}
            />
          <p>Section3</p>
          <NumberInput
            placeholder="Section3"
            value={Section3}
            onChange={(e) => setSection3(parseInt(e.target.value))}
            />
          <p>Section4</p>
          <NumberInput
            placeholder="Section4"
            value={Section4}
            onChange={(e) => setSection4(parseInt(e.target.value))}
            />
          <p>Section5</p>
          <NumberInput
            placeholder="Section5"
            value={Section5}
            onChange={(e) => setSection5(parseInt(e.target.value))}
            />
          <p>Section6</p>
          <NumberInput
            placeholder="Section6"
            value={Section6}
            onChange={(e) => setSection6(parseInt(e.target.value))}
            />
          <button type="submit">Submit</button>
        </Card>
      </form>
    </div>
  );
};

export default Form;
