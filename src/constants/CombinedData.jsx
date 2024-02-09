export function Combined(footfalldata, saledata, itemName) {
  return footfalldata.map((chartItem) => {
    const saleItem = saledata.find((sale) => sale.time === chartItem.time);

    return {
      time: chartItem.time,
      Footfall: chartItem[itemName] || 0,
      Sale: saleItem ? saleItem[itemName] : 0,
    };
  });
}
