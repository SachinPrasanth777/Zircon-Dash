import { Card } from "@tremor/react";
import { DatePicker } from "@tremor/react";

import React from "react";

const Video = () => {
  return (
    <Card className="flex gap-8 p-10 mx-auto mt-8">
      <div>
        <h2>Video Player</h2>
        <video controls width="600">
          <source
            src="https://d2kzg5cjizpi8q.cloudfront.net/output1_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </Card>
  );
};

export default Video;
