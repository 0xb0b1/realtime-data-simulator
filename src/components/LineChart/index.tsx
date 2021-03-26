import { ReactNode } from "react";

interface LineChartProps {
  children: ReactNode;
}

function LineChart({ children }: LineChartProps) {
  return (
    <>
      <h1>LineChart</h1>
      {children}
    </>
  );
}

export default LineChart;
