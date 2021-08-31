import { StageContext } from "./pages/_app";
import { useContext, useEffect } from "react";

export const useStage = (stageNumber) => {
  const [state, setState] = useContext(StageContext);
  const setStage = (stageNumber) => setState({ ...state, stage: stageNumber })
  useEffect(() => {
    setState({ ...state, stage: stageNumber })
  }, []);
  return [stageNumber, setStage];
};

export const useHeader = () => {
  const [state, setState] = useContext(StageContext);
  const setHeader = (newHeader) => setState({ ...state, header: newHeader })
  return [state.header, setHeader];
};


