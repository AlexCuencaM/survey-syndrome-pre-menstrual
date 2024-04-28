import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { days } from '../state/initialState';
import { useSynmptomsContext } from '../hooks/useSynmptomsContext';

export const DayInput = () => {
    const { day, setDay } = useSynmptomsContext();
    const handleChange = (event: SelectChangeEvent) => {
      setDay(event.target.value as string);
    };
  return (
    <FormControl sx={{mb: 2}} fullWidth>
        <InputLabel id="select-day">Día</InputLabel>
        <Select
          labelId="label-simple-select-day"
          id="simple-select-day"
          value={day}
          label="Día"
          onChange={handleChange}
        >
            {days.map((day) => <MenuItem key={`day-${day.day}`} value={day.day}>{day.day}</MenuItem>)}
        </Select>
      </FormControl>
  )
}
