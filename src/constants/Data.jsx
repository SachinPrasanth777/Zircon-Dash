const footfalldata = [
  {
    time: "1PM",
    id: Math.random(),
    date: Math.random(),
    Tshirts: Math.floor(Math.random() * 10),
    Jeans: Math.floor(Math.random() * 10),
    Shoes: Math.floor(Math.random() * 10),
    Bags: Math.floor(Math.random() * 10),
    Jackets: Math.floor(Math.random() * 10),
  },
  {
    time: "2PM",
    id: Math.random(),
    date: Math.random(),
    Tshirts: Math.floor(Math.random() * 10),
    Jeans: Math.floor(Math.random() * 10),
    Shoes: Math.floor(Math.random() * 10),
    Bags: Math.floor(Math.random() * 10),
    Jackets: Math.floor(Math.random() * 10),
  },
  {
    time: "3PM",
    id: Math.random(),
    date: Math.random(),
    Tshirts: Math.floor(Math.random() * 10),
    Jeans: Math.floor(Math.random() * 10),
    Shoes: Math.floor(Math.random() * 10),
    Bags: Math.floor(Math.random() * 10),
    Jackets: Math.floor(Math.random() * 10),
  },
  {
    time: "4PM",
    id: Math.random(),
    date: Math.random(),
    Tshirts: Math.floor(Math.random() * 10),
    Jeans: Math.floor(Math.random() * 10),
    Shoes: Math.floor(Math.random() * 10),
    Bags: Math.floor(Math.random() * 10),
    Jackets: Math.floor(Math.random() * 10),
  },
  {
    time: "5PM",
    id: Math.random(),
    date: Math.random(),
    Tshirts: Math.floor(Math.random() * 10),
    Jeans: Math.floor(Math.random() * 10),
    Shoes: Math.floor(Math.random() * 10),
    Bags: Math.floor(Math.random() * 10),
    Jackets: Math.floor(Math.random() * 10),
  },
];

const saledata = [
  {
    time: "1PM",
    id: Math.random(),
    date: Math.random(),
    Tshirts: Math.floor(Math.random() * 10),
    Jeans: Math.floor(Math.random() * 10),
    Shoes: Math.floor(Math.random() * 10),
    Bags: Math.floor(Math.random() * 10),
    Jackets: Math.floor(Math.random() * 10),
  },
  {
    time: "2PM",
    id: Math.random(),
    date: Math.random(),
    Tshirts: Math.floor(Math.random() * 10),
    Jeans: Math.floor(Math.random() * 10),
    Shoes: Math.floor(Math.random() * 10),
    Bags: Math.floor(Math.random() * 10),
    Jackets: Math.floor(Math.random() * 10),
  },
  {
    time: "3PM",
    id: Math.random(),
    date: Math.random(),
    Tshirts: Math.floor(Math.random() * 10),
    Jeans: Math.floor(Math.random() * 10),
    Shoes: Math.floor(Math.random() * 10),
    Bags: Math.floor(Math.random() * 10),
    Jackets: Math.floor(Math.random() * 10),
  },
  {
    time: "4PM",
    id: Math.random(),
    date: Math.random(),
    Tshirts: Math.floor(Math.random() * 10),
    Jeans: Math.floor(Math.random() * 10),
    Shoes: Math.floor(Math.random() * 10),
    Bags: Math.floor(Math.random() * 10),
    Jackets: Math.floor(Math.random() * 10),
  },
  {
    time: "5PM",
    id: Math.random(),
    date: Math.random(),
    Tshirts: Math.floor(Math.random() * 10),
    Jeans: Math.floor(Math.random() * 10),
    Shoes: Math.floor(Math.random() * 10),
    Bags: Math.floor(Math.random() * 10),
    Jackets: Math.floor(Math.random() * 10),
  },
];

const itemSum = {
  Tshirts: 0,
  Jeans: 0,
  Shoes: 0,
  Bags: 0,
  Jackets: 0,
};

// Step 2: Iterate over each time slot and update the sum
footfalldata.forEach((timeSlot) => {
  itemSum.Tshirts += timeSlot.Tshirts;
  itemSum.Jeans += timeSlot.Jeans;
  itemSum.Shoes += timeSlot.Shoes;
  itemSum.Bags += timeSlot.Bags;
  itemSum.Jackets += timeSlot.Jackets;
});

// Step 3: Calculate the average for each item
const totalSlots = footfalldata.length;
const itemAverage = {
  Tshirts: itemSum.Tshirts / totalSlots,
  Jeans: itemSum.Jeans / totalSlots,
  Shoes: itemSum.Shoes / totalSlots,
  Bags: itemSum.Bags / totalSlots,
  Jackets: itemSum.Jackets / totalSlots,
};

let maxAverage = Number.MIN_VALUE;
let maxAverageItem = "";

for (const item in itemAverage) {
  if (itemAverage.hasOwnProperty(item)) {
    if (itemAverage[item] > maxAverage) {
      maxAverage = itemAverage[item];
      maxAverage = Math.floor(maxAverage);
      maxAverageItem = item;
    }
  }
}

export { footfalldata, itemAverage, maxAverage, maxAverageItem, saledata };
