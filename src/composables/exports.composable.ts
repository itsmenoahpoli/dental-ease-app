import * as XLSX from "xlsx";

export const useExports = () => {
  const exportToXLSX = (data: any, filename: string) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

    const url = URL.createObjectURL(
      new Blob([wbout], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
    );
    const link = document.createElement("a");

    link.href = url;
    link.download = filename || "data.xlsx";
    link.click();

    URL.revokeObjectURL(url);
  };

  return {
    exportToXLSX,
  };
};
