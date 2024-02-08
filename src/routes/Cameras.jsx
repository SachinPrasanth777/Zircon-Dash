import React from 'react'
import { Card } from "@tremor/react";
import CameraCard from '../components/CameraCard';


const Cameras = () => {
  return (
    <div className="grid grid-cols-2 gap-8 mx-auto ">
      <CameraCard></CameraCard>
      <CameraCard></CameraCard>
      <CameraCard></CameraCard>
      <CameraCard></CameraCard>

    </div>
  )
}

export default Cameras
