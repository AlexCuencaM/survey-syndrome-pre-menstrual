import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { months } from '../state/initialState';
import { useSynmptomsContext } from '../hooks/useSynmptomsContext';

export const MonthInput = () => {
    const { month, setMonth } = useSynmptomsContext();
    const handleChange = (event: SelectChangeEvent) => {
      setMonth(event.target.value as string);
    };
  return (
    <FormControl sx={{mb: 2}} fullWidth>
        <InputLabel id="select-month">Mes</InputLabel>
        <Select
          labelId="label-simple-select-month"
          id="simple-select-month"
          value={month}
          label="Mes"
          onChange={handleChange}
        >
            {months.map((month, index) => <MenuItem key={month + index} value={month}>{month}</MenuItem>)}
        </Select>
      </FormControl>
  )
}
