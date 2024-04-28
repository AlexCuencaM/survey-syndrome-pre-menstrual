import {  Container } from "@mui/material"
import { Calendar } from "./components/calendar"
import { MonthInput } from './components/monthInput';
import { ExcelButton } from "./components/excelButton";

function App() {
  return (
    <Container>
      <h1>Encuesta xd</h1>
      <MonthInput/>
      <Calendar/>
      <ExcelButton/>
    </Container>
  )
}

export default App
