import {  Container } from "@mui/material"
import { Calendar } from "./components/calendar"
import { MonthInput } from './components/monthInput';
import { ExcelButton } from "./components/excelButton";
import { DayInput } from "./components/dayInput";

function App() {
  return (
    <Container>
      <h1>Encuesta xd</h1>
      <MonthInput/>
      <DayInput/>
      <Calendar/>
      <ExcelButton/>
    </Container>
  )
}

export default App
