import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Fill", value: 70, level: "Fill", color: "#FF6384" },
  { name: "Available", value: 30, level: "Available", color: "#36A2EB" },
];

const PieChartComponent = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
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
    </PieChart>
  </ResponsiveContainer>
);

export default PieChartComponent;
