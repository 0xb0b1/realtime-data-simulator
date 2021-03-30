import {
  Context,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
  myData: any;
  saveData: (data: DataSimulationProps) => Promise<void>;
}

const SimulationContext: Context<SimulationContextData> = createContext(
  {} as SimulationContextData
);

export function SimulationDataProvider({
  children,
}: SimulationDataProviderProps) {
  const [myData, setMyData] = useState({});

  useEffect(() => {
    const data: any = localStorage.getItem("myCustomChartData");

    setMyData(JSON.parse(data));
  }, []);

  // function to save the data to localStorage
  async function saveData(dataInput: DataSimulationProps) {
    localStorage.setItem("myCustomChartData", JSON.stringify(dataInput));
  }

  return (
    <SimulationContext.Provider value={{ myData, saveData }}>
      {children}
    </SimulationContext.Provider>
  );
}

export function useSimulation() {
  const context = useContext(SimulationContext);

  return context;
}
