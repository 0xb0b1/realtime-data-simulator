import { Context, createContext, ReactNode, useContext } from "react";

interface DataSimulationProps {
  minimum: number;
  maximum: number;
  frequency: number;
  simulationInterval: number;
}

interface SimulationDataProviderProps {
  children: ReactNode;
}

interface SimulationContextData {
  saveData: (data: DataSimulationProps) => void;
}

const SimulationContext: Context<SimulationContextData> = createContext(
  {} as SimulationContextData
);

export function SimulationDataProvider({
  children,
}: SimulationDataProviderProps) {
  // function to save the data to localStorage
  function saveData(dataInput: DataSimulationProps) {
    localStorage.setItem("data", JSON.stringify(dataInput));
  }

  return (
    <SimulationContext.Provider value={{ saveData }}>
      {children}
    </SimulationContext.Provider>
  );
}

export function useSimulation() {
  const context = useContext(SimulationContext);

  return context;
}
