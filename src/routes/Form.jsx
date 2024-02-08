import React from "react";
import { Card } from "@tremor/react";
import { DatePicker } from "@tremor/react";
import { NumberInput } from "@tremor/react";
import { Select, SelectItem } from "@tremor/react";
import { useState } from "react";
import { TextInput } from "@tremor/react";
import TimeSelect from "../components/TimeSelect";
import Navbar from "../components/Navbar";

const Form = () => {
  return (
    <div>
      <form action="http://localhost:8000/item" method="post">
        <Navbar></Navbar>
        <Card className="flex flex-col w-fit p-10 mx-auto gap-4">
          <h1>Sales Data</h1>
          <p>Date</p>
          <DatePicker className="max-w-sm mx-auto" />
          <p>Time</p>
          <TimeSelect></TimeSelect>
          <p>Clothes</p>
          <NumberInput placeholder="Amount." />
          <p></p>
          <button type="submit">Hi</button>
        </Card>
      </form>
    </div>
  );
};

export default Form;

// http:localhost:8000/form
