const form = document.querySelector('form');
const submitButton = document.querySelector('input[type="submit"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
        alert("Thanks for reserving your seats, soon you will receive a message on your Phone Number & Mail ID for the confirmations!");
        form.reset();
    } else {
        alert("Please fill out all required fields!");
    }
});
const tableAvailability = {
    table1: Math.random() < 0.5,
    table2: Math.random() < 0.5,
    table3: Math.random() < 0.5,
    table4: Math.random() < 0.5,
    table5: Math.random() < 0.5,
    table6: Math.random() < 0.5,
    table7: Math.random() < 0.5,
    table8: Math.random() < 0.5,
  };
  
  function isTableFree(tableNumber) {
    return tableAvailability[tableNumber];
  }
  
  function reserveTable(tableNumber) {
    if (isTableFree(tableNumber)) {
      tableAvailability[tableNumber] = false;
      return true;
    } else {
      return false;
    }
  }
  
  function releaseTable(tableNumber) {
    tableAvailability[tableNumber] = true;
  }
  
  const selectedTable = "table2";
  
  if (isTableFree(selectedTable)) {
    console.log(`Table ${selectedTable} is available. You can book it.`);
    reserveTable(selectedTable);
  } else {
    console.log(`Table ${selectedTable} is already reserved. Please choose another table.`);
  }
  