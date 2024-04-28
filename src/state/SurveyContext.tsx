import { useState } from "react"
import { MysurveyContext, SurveyContextProp } from '../hooks/useSynmptomsContext';
import { TrackedSynmptoms, initialStateSymptom } from "./initialState"

export const SurveyContext = ({children}:SurveyContextProps) => {
    const [synmptoms, setSynmptoms] = useState<TrackedSynmptoms[]>(initialStateSymptom)
    const setDayByNameAndSynmptoms = (isChecked :boolean, name:string, index:number) => {
        setSynmptoms(formy => formy.map(currentSynmptom => {
            if(currentSynmptom.name === name){
                currentSynmptom.days = currentSynmptom.days.map((day, indexDay) => {
                    if(index === indexDay){
                        day = isChecked;
                    }
                    return day;
                });
            }
            return currentSynmptom;
        }));
    }
    const value:SurveyContextProp = {
        synmptoms,
        setDayByNameAndSynmptoms
    }
    return(
        <MysurveyContext.Provider value= {value}>
            {children}
        </MysurveyContext.Provider>
    )
}


interface SurveyContextProps{
    children: JSX.Element;
}