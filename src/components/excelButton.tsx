import { Button } from "@mui/material"
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import { useSynmptomsContext } from "../hooks/useSynmptomsContext";
import * as XLSX from 'xlsx';
export const ExcelButton = () => {
    const { synmptoms, month } = useSynmptomsContext();
    const renderToExcel = () => {
        const resultData: any ={
            mes: month,
        }
        synmptoms.map(synmptom => {
            resultData[synmptom.name] = synmptom.days.filter(day => day.isChecked).map((day) => day.day).join(", ");
        })
        return resultData;
    }
    const handleDownload = () => {
        const excelDataToRender = renderToExcel();
        const worksheet = XLSX.utils.json_to_sheet([excelDataToRender]);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "MYSavedData.xlsx");
    }
  return (
    <Button onClick={handleDownload} sx={{my:3}} fullWidth variant="contained" startIcon={<VerticalAlignBottomIcon />}>
        Excel
    </Button>
  )
}
