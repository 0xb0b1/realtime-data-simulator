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
  interval: number;
}

interface SimulationProviderProps {
  children: ReactNode;
}

interface SimulationContextData {
  data: DataSimulationProps[];
  createSimulation: (data: DataSimulationProps) => Promise<void>;
}

export const SimulationContext = createContext({} as SimulationContextData);

export function SimulationProvider({ children }: SimulationProviderProps) {
  const [data, setData] = useState<DataSimulationProps[]>([]);

  useEffect(() => {
    api.get("/data").then((response) => setData(response.data.data));
  }, []);

  async function createSimulation(dataInput: DataSimulationProps) {
    const response = await api.post("/data", {
      ...dataInput,
    });

    const { data } = response.data;

    setData([data]);
  }

  return (
    <SimulationContext.Provider
      value={{ data, createSimulation }}
    ></SimulationContext.Provider>
  );
}

export function useSimulation() {
  const context = useContext(SimulationContext);

  return context;
}
