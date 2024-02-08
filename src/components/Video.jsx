import { Card } from "@tremor/react";
import { DatePicker } from "@tremor/react";

import React from "react";

const Video = () => {
  return (
    <Card className="flex gap-8 p-10 mx-auto mt-8">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KMJS66jBtVQ?si=BRUKIjJHdnkrjLRS&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <DatePicker className="w-72" />
    </Card>
  );
};

export default Video;
