import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSynmptomsContext } from "../hooks/useSynmptomsContext";
import { days } from "../state/initialState";
export const Calendar = () => {
  const { synmptoms, setDayByNameAndSynmptoms } = useSynmptomsContext();
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, index:number) => {
    setDayByNameAndSynmptoms(e.target.checked, e.target.name, index);
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Síntomas</TableCell>
            {days.map((day) => (
              <TableCell key={`dia-${day.day}`}>{day.day}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {synmptoms.map((symptom) => (
            <TableRow key={`row-${symptom.name}`}>
              <TableCell>{symptom.name}</TableCell>
              {symptom.days.map((symptomDay, index) => (
                <TableCell key={`checkbox-${symptomDay.day}`}>
                  <Checkbox
                    name={`${symptom.name}`}
                    onChange={e => handleChecked(e, index)}
                    checked={symptomDay.isChecked}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
