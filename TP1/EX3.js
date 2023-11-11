function getCurrentDate() {
    const currentDate = new Date();
  
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDay = (day < 10) ? `0${day}` : day;
    const formattedMonth = (month < 10) ? `0${month}` : month;
  
    const formats = [
      `${formattedMonth}-${formattedDay}-${year}`,
      `${formattedMonth}/${formattedDay}/${year}`,
      `${formattedDay}-${formattedMonth}-${year}`,
      `${formattedDay}/${formattedMonth}/${year}`
    ];
  
    return formats;
  }
  
  const dateFormats = getCurrentDate();
  console.log("mm-dd-yyyy:", dateFormats[0]);
  console.log("mm/dd/yyyy:", dateFormats[1]);
  console.log("dd-mm-yyyy:", dateFormats[2]);
  console.log("dd/mm/yyyy:", dateFormats[3]);
  