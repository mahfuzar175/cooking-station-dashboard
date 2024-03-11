import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Hot Dog", value: 35, level: "Hot Dog", color: "#FF6384" },
  { name: "Burger", value: 21, level: "Burger", color: "#36A2EB" },
  { name: "Fried Chicken", value: 25, level: "Fried Chicken", color: "#0b9e2b" },
  { name: "Nachose", value: 19, level: "Nachose", color: "#eb2337" },
  { name: "Nachose", value: 19, level: "Canceller", color: "#0d26b5" },
];

const BestSellingItems = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={80}
        fill="#82ca9d"
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>
      <Legend
        verticalAlign="bottom"
        height={36}
        formatter={(value, entry) => `${entry.payload.level}`}
      />
      <Tooltip/>
    </PieChart>
  </ResponsiveContainer>
);

export default BestSellingItems;
