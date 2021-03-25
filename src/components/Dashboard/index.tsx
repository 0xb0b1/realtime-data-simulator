import { ReactNode } from "react";

import { Container } from "./styles";

interface DashboardProps {
  children: ReactNode;
}

function Dashboard({ children }: DashboardProps) {
  return (
    <Container>
      <h1>Dashboard</h1>
      {children}
    </Container>
  );
}

export default Dashboard;
