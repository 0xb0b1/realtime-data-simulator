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
  saveData: (data: DataSimulationProps) => void;
}

const SimulationContext: Context<SimulationContextData> = createContext(
  {} as SimulationContextData
);

export function SimulationDataProvider({
  children,
}: SimulationDataProviderProps) {
  const [myData, setMyData] = useState({});

  useEffect(() => {
    const data: any = localStorage.getItem("data");

    setMyData(JSON.parse(data));
  }, []);

  // function to save the data to localStorage
  function saveData(dataInput: DataSimulationProps) {
    localStorage.setItem("data", JSON.stringify(dataInput));
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
