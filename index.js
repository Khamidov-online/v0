// juft sonlar
function printEvenNumbers(num = 0) {
    if (num > 100) return; 
    if (num % 2 === 0) {
      console.log(num); 
    }
    printEvenNumbers(num + 1); 
  }
  
  printEvenNumbers(); 
  