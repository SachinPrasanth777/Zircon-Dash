import { FaTshirt } from "react-icons/fa";
import { PiPants } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { IoBag } from "react-icons/io5";
import { PiHoodieDuotone } from "react-icons/pi";

import { Select, SelectItem } from "@tremor/react";
import {
  TshirtsData,
  JeansData,
  ShoesData,
  BagsData,
  JacketsData,
} from "../constants/CombinedData";

export function TestSelect({ value, setValue }) {
  return (
    <>
      <div className="">
        <Select value={value} onValueChange={setValue}>
          <SelectItem value={TshirtsData} icon={FaTshirt}>
            Tshirts
          </SelectItem>
          <SelectItem value={JeansData} icon={PiPants}>
            Jeans
          </SelectItem>
          <SelectItem value={ShoesData} icon={GiConverseShoe}>
            Shoes
          </SelectItem>
          <SelectItem value={BagsData} icon={IoBag}>
            Bags
          </SelectItem>
          <SelectItem value={JacketsData} icon={PiHoodieDuotone}>
            Jackets
          </SelectItem>
        </Select>
      </div>
    </>
  );
}
