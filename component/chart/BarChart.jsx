import React from "react";
import { ResponsiveBar } from "@nivo/bar";
const data = [
  {
    country: "AD",
    "hot dog": 69,
    "hot dogColor": "hsl(264, 70%, 50%)",
    burger: 55,
    burgerColor: "hsl(147, 70%, 50%)",
    sandwich: 27,
    sandwichColor: "hsl(184, 70%, 50%)",
    kebab: 142,
    kebabColor: "hsl(195, 70%, 50%)",
    fries: 41,
    friesColor: "hsl(52, 70%, 50%)",
    donut: 197,
    donutColor: "hsl(125, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 80,
    "hot dogColor": "hsl(184, 70%, 50%)",
    burger: 38,
    burgerColor: "hsl(174, 70%, 50%)",
    sandwich: 129,
    sandwichColor: "hsl(199, 70%, 50%)",
    kebab: 61,
    kebabColor: "hsl(316, 70%, 50%)",
    fries: 164,
    friesColor: "hsl(110, 70%, 50%)",
    donut: 107,
    donutColor: "hsl(255, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 154,
    "hot dogColor": "hsl(351, 70%, 50%)",
    burger: 88,
    burgerColor: "hsl(183, 70%, 50%)",
    sandwich: 161,
    sandwichColor: "hsl(356, 70%, 50%)",
    kebab: 102,
    kebabColor: "hsl(255, 70%, 50%)",
    fries: 35,
    friesColor: "hsl(86, 70%, 50%)",
    donut: 42,
    donutColor: "hsl(182, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 127,
    "hot dogColor": "hsl(38, 70%, 50%)",
    burger: 101,
    burgerColor: "hsl(149, 70%, 50%)",
    sandwich: 82,
    sandwichColor: "hsl(203, 70%, 50%)",
    kebab: 118,
    kebabColor: "hsl(162, 70%, 50%)",
    fries: 189,
    friesColor: "hsl(188, 70%, 50%)",
    donut: 106,
    donutColor: "hsl(153, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 197,
    "hot dogColor": "hsl(27, 70%, 50%)",
    burger: 25,
    burgerColor: "hsl(303, 70%, 50%)",
    sandwich: 75,
    sandwichColor: "hsl(185, 70%, 50%)",
    kebab: 88,
    kebabColor: "hsl(60, 70%, 50%)",
    fries: 58,
    friesColor: "hsl(47, 70%, 50%)",
    donut: 102,
    donutColor: "hsl(154, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 100,
    "hot dogColor": "hsl(38, 70%, 50%)",
    burger: 128,
    burgerColor: "hsl(168, 70%, 50%)",
    sandwich: 83,
    sandwichColor: "hsl(350, 70%, 50%)",
    kebab: 7,
    kebabColor: "hsl(356, 70%, 50%)",
    fries: 123,
    friesColor: "hsl(350, 70%, 50%)",
    donut: 147,
    donutColor: "hsl(173, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 8,
    "hot dogColor": "hsl(246, 70%, 50%)",
    burger: 103,
    burgerColor: "hsl(233, 70%, 50%)",
    sandwich: 148,
    sandwichColor: "hsl(271, 70%, 50%)",
    kebab: 62,
    kebabColor: "hsl(265, 70%, 50%)",
    fries: 66,
    friesColor: "hsl(59, 70%, 50%)",
    donut: 116,
    donutColor: "hsl(34, 70%, 50%)",
  },
];
const BarChart = () => {
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      /* A heading tag. */
      <h1>hello nivo bar chart</h1>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          );
        }}
      />
    </div>
  );
};

export default BarChart;
