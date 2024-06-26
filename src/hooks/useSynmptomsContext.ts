import { createContext, useContext } from "react";
import { TrackedSynmptoms } from "../state/initialState";

export type SurveyContextProp = {
    synmptoms: TrackedSynmptoms[];
    month: string;
    day:string;
    setDay: React.Dispatch<React.SetStateAction<string>>;
    setMonth: React.Dispatch<React.SetStateAction<string>>;
    setDayByNameAndSynmptoms: (isChecked: boolean, name: string, index: number) => void;//React.Dispatch<React.SetStateAction<TrackedSynmptoms[]>>;//(value: React.SetStateAction<TrackedSynmptoms[]>) => void;
}
export const MysurveyContext = createContext<SurveyContextProp>(null!);

export const useSynmptomsContext = () => useContext(MysurveyContext);
