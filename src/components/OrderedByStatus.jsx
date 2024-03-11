import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Delivary", value: 35, level: "Delivary", color: "#FF6384" },
  { name: "New", value: 21, level: "New", color: "#36A2EB" },
  { name: "On delivary", value: 25, level: "On delivary", color: "#0b9e2b" },
  { name: "Canceller", value: 19, level: "Canceller", color: "#eb2337" },
];

const OrderderedByStatus = () => (
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
      <Tooltip/>
    </PieChart>
  </ResponsiveContainer>
);

export default OrderderedByStatus;
