function addRow() {
    const table = document.getElementById('myTable');
    const newRow = table.insertRow();
    const cell = newRow.insertCell();
    cell.textContent = 'Новая строка';
  }

  function addColumn() {
    const table = document.getElementById('myTable');
    for (let i = 0; i < table.rows.length; i++) {
      const cell = table.rows[i].insertCell();
      cell.textContent = 'Новая ячейка';
    }
  }

  function deleteRow() {
    const table = document.getElementById('myTable');
    const lastRowIndex = table.rows.length - 1;
    if (lastRowIndex >= 0) {
      table.deleteRow(lastRowIndex);
    }
  }

  function deleteColumn() {
    const table = document.getElementById('myTable');
    const lastColumnIndex = table.rows[0].cells.length - 1;
    if (lastColumnIndex >= 0) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(lastColumnIndex);
      }
    }
  }