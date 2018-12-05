function makeStudentsReport(data) {
    let array = [];
    for (let i=0; i < data.length; i++) {
        data[i];
        array.push(`${data[i].name}: ${data[i].grade}`);
    }
    return array;

  }