import xlsx from "xlsx";
import path from "path";

const filePath = path.resolve("backend/data/raw/data.xlsx");

export const readExcelData = () => {
  try {
    const workbook = xlsx.readFile(filePath);

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const data = xlsx.utils.sheet_to_json(sheet);

    return data;
  } catch (error) {
    console.log("Error reading Excel:", error.message);
    return [];
  }
};