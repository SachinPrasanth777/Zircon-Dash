import { footfalldata, saledata } from "./Data";

const combineChartDataAndSaleData = (footfallData, saleData, itemName) => {
  return footfallData.map((chartItem) => {
    const saleItem = saleData.find((sale) => sale.time === chartItem.time);

    return {
      time: chartItem.time,
      Footfall: chartItem[itemName] || 0,
      Sale: saleItem ? saleItem[itemName] : 0,
    };
  });
};

const TshirtsData = combineChartDataAndSaleData(
  footfalldata,
  saledata,
  "Tshirts"
);

const JeansData = combineChartDataAndSaleData(footfalldata, saledata, "Jeans");

const ShoesData = combineChartDataAndSaleData(footfalldata, saledata, "Shoes");

const BagsData = combineChartDataAndSaleData(footfalldata, saledata, "Bags");
const JacketsData = combineChartDataAndSaleData(
  footfalldata,
  saledata,
  "Jackets"
);

export { TshirtsData, JeansData, ShoesData, BagsData, JacketsData };
