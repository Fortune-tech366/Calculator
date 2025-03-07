    let calculation = '';

    function updateCalculation(number){
      if (number === 1){
      calculation += '1'
      console.log(calculation);
      }
      else if(number === 2){
        calculation += '2'
        console.log(calculation);
      }
      else if(number === 3){
        calculation += '3'
        console.log(calculation);
      }
      else if(number === '+'){
        calculation += ' + '
        console.log(calculation);
      }
      else if(number === 4){
        calculation += '4'
        console.log(calculation);
      }
      else if(number === 5){
        calculation += '5'
        console.log(calculation);
      }
      else if(number === 6){
        calculation += '6'
        console.log(calculation);
      }
      else if(number === 7){
        calculation += '7'
        console.log(calculation);
      }
      else if (number === 8){
        calculation += '8'
        console.log(calculation);
      }
      else if (number === 9){
        calculation += '9'
        console.log(calculation);
      }
      else if (number === 0){
        calculation += '0'
        console.log(calculation);
      }
      else if (number === '*'){
        calculation += ' * '
        console.log(calculation);
      }
      else if (number === '/'){
        calculation += ' / '
        console.log(calculation);
      }
      else if ( number === '-'){
        calculation += ' - '
        console.log(calculation);
      }
      else if (number === '=') {
        if ( calculation === undefined ) {
          calculation = ''
        }
        else {
          calculation = eval( calculation );
        }
      }
      else if (number === 'C'){
        calculation = '';
      }
      const display = document.getElementById('display');
      display.textContent = calculation;
    }