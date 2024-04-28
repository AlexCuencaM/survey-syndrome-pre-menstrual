import { useState } from "react"
import { MysurveyContext, SurveyContextProp } from '../hooks/useSynmptomsContext';
import { TrackedSynmptoms, initialStateSymptom } from "./initialState"

export const SurveyContext = ({children}:SurveyContextProps) => {
    const [synmptoms, setSynmptoms] = useState<TrackedSynmptoms[]>(initialStateSymptom)
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    const setDayByNameAndSynmptoms = (isChecked :boolean, name:string, index:number) => {
        setSynmptoms(formy => formy.map(currentSynmptom => {
            if(currentSynmptom.name === name){
                currentSynmptom.days = currentSynmptom.days.map((synmptomDay, indexDay) => {
                    if(index === indexDay){
                        synmptomDay = {...synmptomDay,
                            isChecked: isChecked
                        };
                    }
                    return synmptomDay;
                });
            }
            return currentSynmptom;
        }));
    }
    const value:SurveyContextProp = {
        synmptoms,
        month,
        day,
        setDay,
        setDayByNameAndSynmptoms,
        setMonth,
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