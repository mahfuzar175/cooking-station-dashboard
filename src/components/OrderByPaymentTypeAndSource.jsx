import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { paymentType: "Credit Card", source: "Online", value: 120 },
  { paymentType: "Cash", source: "In-Store", value: 80 },
  { paymentType: "PayPal", source: "Online", value: 60 },
  { paymentType: "Credit Card", source: "Mobile App", value: 40 },
  { paymentType: "Cash", source: "In-Store", value: 20 },
];

const OrderByPaymentTypeAndSource = () => (
  <ResponsiveContainer
    width="100%"
    height={350}
    className="bg-white rounded-3 mt-3"
  >
    <BarChart data={data}>
      <XAxis dataKey="paymentType" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" name="Order Count" />
    </BarChart>
  </ResponsiveContainer>
);

export default OrderByPaymentTypeAndSource;
