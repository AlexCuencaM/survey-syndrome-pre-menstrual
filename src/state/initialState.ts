const GetDays = () => {
    const array: boolean[] = [];
    for (let index = 0; index < 31; index++) {
        array.push(false);
    }
    return array;
}
export const days = GetDays();
export const initialStateSymptom: TrackedSynmptoms[] = [
    { name :"Ansiedad o depresión", days },
    { name :"Estrés", days },
    { name :"Irritabilidad", days },
    { name :"Dificultad para concentrarse", days },
    { name :"Episodio de llanto", days },
    { name :"Antojos alimentarios", days },
    { name :"Cefalea", days },
    { name :"Insomnio", days },
    { name :"Náuseas y vómitos", days },
    { name :"Aumento de peso", days },
    { name :"Distensión abdominal", days },
    { name :"Hipersensibilidad mamaria", days },
    { name :"Edema", days },
    { name :"Dolor en extremidades inferiores", days },
];

export interface TrackedSynmptoms{
    name: string;
    days: boolean[]
}