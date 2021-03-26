import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface DataSimulationProps {
  minimum: number;
  maximum: number;
  frequency: number;
  simulationInterval: number;
}

// type DataInput = Omit<DataSimulationProps, "id">;

interface SimulationProviderProps {
  children: ReactNode;
}

interface SimulationContextData {
  myData: DataSimulationProps[];
  createSimulation: (data: DataSimulationProps) => Promise<void>;
}

const SimulationContext = createContext({} as SimulationContextData);

export function SimulationProvider({ children }: SimulationProviderProps) {
  const [myData, setMyData] = useState<DataSimulationProps[]>([]);

  useEffect(() => {
    api.get("/data").then((response) => setMyData(response.data.myData));
  }, []);

  // function to save the data on the fake API
  // we'll be fetching this data from the dashboard
  async function createSimulation(dataInput: DataSimulationProps) {
    const response = await api.post("/data", dataInput);

    const { myDataNew } = response.data;

    setMyData([myDataNew]);
  }

  // creating the dashboard
  // function createDashboard() {}

  return (
    <SimulationContext.Provider value={{ myData, createSimulation }}>
      {children}
    </SimulationContext.Provider>
  );
}

export function useSimulation() {
  const context = useContext(SimulationContext);

  return context;
}
