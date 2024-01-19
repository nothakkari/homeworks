function createTable(n, m) {
    const table = document.createElement('table');

    for (let i = 0; i < n; i++) {
      const row = table.insertRow(i);

      for (let j = 0; j < m; j++) {
        const cell = row.insertCell(j);
        cell.textContent = 'Ячейка ' + (i + 1) + '-' + (j + 1);
      }
    }

    document.body.appendChild(table);
  }

  let n = prompt('Введите количество строк:');
  let m = prompt('Введите количество ячеек в каждой строке:');

  // Парсим введенные значения в целые числа
  n = parseInt(n, 10);
  m = parseInt(m, 10);

  if (isNaN(n) || isNaN(m) || n <= 0 || m <= 0) {
    alert('Пожалуйста, введите натуральные числа.');
  } else {
    createTable(n, m);
  }