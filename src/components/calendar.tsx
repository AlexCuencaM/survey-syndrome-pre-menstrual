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
            {days.map((_, index) => (
              <TableCell key={index}>{index + 1}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {synmptoms.map((symptom) => (
            <TableRow>
              <TableCell>{symptom.name}</TableCell>
              {symptom.days.map((symptomDay, index) => (
                <TableCell>
                  <Checkbox
                    name={`${symptom.name}`}
                    onChange={e => handleChecked(e, index)}
                    checked={symptomDay}
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
