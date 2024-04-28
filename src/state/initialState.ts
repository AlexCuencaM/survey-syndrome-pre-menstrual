const GetDays = () => {
    const array: Day[] = [];
    for (let index = 0; index < 31; index++) {
        array.push({
            isChecked: false,
            day: index + 1
        });
    }
    return array;
}
export const days = GetDays();
export const initialStateSymptom: TrackedSynmptoms[] = [
    { name :"Ansiedad", days },
    { name :"Depresión", days },
    { name :"Estrés", days },
    { name :"Irritabilidad", days },
    { name :"Dificultad para concentrarse", days },
    { name :"Episodio de llanto", days },
    { name :"Antojos alimentarios", days },
    { name :"Cefalea", days },
    { name :"Insomnio", days },
    { name :"Náuseas", days },
    { name :"Vómitos", days },
    { name :"Aumento de peso", days },
    { name :"Distensión abdominal", days },
    { name :"Hipersensibilidad mamaria", days },
    { name :"Edema", days },
    { name :"Dolor en extremidades inferiores", days },
];
export const months = [
    "ENERO", "FEBRERO", "MARZO", "ABRIL", 
    "MAYO", "JUNIO", "JULIO", "AGOSTO", 
    "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];

export interface TrackedSynmptoms{
    name: string;
    days: Day[]
}

export interface Day{
    isChecked: boolean;
    day: number;
}