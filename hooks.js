import { StageContext } from "./pages/_app";
import { useContext, useEffect } from "react";

export const useStage = (stageNumber) => {
  const [stage, setStage] = useContext(StageContext);
  useEffect(() => {
    setStage(stageNumber);
  }, []);
  return [stage, setStage];
};
