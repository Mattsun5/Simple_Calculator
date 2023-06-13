// let clearing = document.getElementById('result').textContent;
    function clearit(){
        result = '';
        document.getElementById("result").textContent = result;
    }
function doCalculation() {
    // this function will always evaluate when the 'equal to' button is triggered
    // collect the expression
    let express = document.querySelector('.expression').value;
    let error = 'an error occured';
    let result; // our final answer will be assigned
    let items = [];
    let ansa;
    // alert(∛) 
    function rearrangeItems() {
        // ARRANGE NUMBERS, CONSIDERING FLOATING NUMBERS
            
        let count = 0;
        // loop through the expression
        for (let i = 0; i < express.length; i++){
            if (i > 0){
                // except first items are considered
                count = items.length;
                if (  //check for '.' and place it
                    isNaN(items[count - 1]) || isNaN(express[i]) && express[i] != '.' && (items[count] != '.')
                    )
                {
                    if (express[i] == '<'){
                        items[count] = express[i] + express[i + 1]; i++;
                        // alert('im here');
                    }else if(express[i] == '>'){
                        items[count] = express[i] + express[i + 1]; i++;
                    } else{

                        items[count] = express[i];
                    }
                } 
                else 
                {
                    items[count - 1]  = items[count - 1] + express[i];
                }
                
            } else {
                // first item
                items[count] = express[i];
            }
        }
    }
    rearrangeItems();

    // HANDLING CALC OPERATIONS

    const factorial = (num) => {
        // factorial
        if (num < 0) 
              return -1;
        else if (num == 0) 
            return 1;
        else {
            return (num * factorial(num - 1));
        }
      }
      
    function bitWiseNot(num) {
        // for bitwise not
    result = ~num;
    return result;
    }

    const multiplication = (num1, num2) => {
    //multiplication
    result = num1 * num2;
      return result;
    };

    const square = (num) => {
        // squareroot
        result = Math.sqrt(num);
        return result;
    }

    const cube = (num) => {
        // cube root
        result = Math.cbrt(num);
        return result;
    }

    const modulo = (num1, num2) => {
        // modulo
        result = num1 % num2;
        return result;
    }

    const power = (num1, num2) => {
        // power
        result = Math.pow(num1, num2);
        return result;
    }

    const divide = (num1, num2) => {
        // divide
        result = num1 / num2;
        return result;
    }

    const add = (num1, num2) => {
        // addition
        result = num1 + num2;
        return result;
    }

    const subtract = (num1, num2) => {
        // subtraction
        result = num1 - num2;
        return result;
    }

    const bitWiseAnd = (num1, num2) => {
        // bitwise AND
        result = num1 & num2;
        return result;
    }
    
    const bitWiseOr = (num1, num2) => {
        // bitwise OR
        result = num1 | num2;
        return result;
    }
    
    const bitWiseLeftShift = (num1, num2) => {
        // bitwise Left Shift
        result = num1 << num2;
        return result;
    }
    
    const bitWiseRightShift = (num1, num2) => {
        // bitwise Right Shift
        result = num1 >> num2;
        return result;
    }


    // OPERATORS according to prcedence
    /*
        s is sqroot
        c is cbroot
        % is percentage
        ^ is power
        x is multiplication
        / is division
        + is addition
        - is subtraction
        & is bitwise and 
        | is bitwise or
        << is bitwise left shift
        >> is bitwise right shift
        ~ is NOT
    */

    let operators = 
    [
        '√', '∛', '%', '!', '^', 
        '*', '/', '+', '-', 
        '&', '|', '<<', '>>', 
        '~'
    ];

    const calc = (v) => {
        // to perform action
        let final = [];
        let newArrLength;
        let lastArrIndex;
        let itemAfter;
        for (let i = 0; i < items.length; i++){
            newArrLength = final.length;
            lastArrIndex = parseFloat(final[newArrLength - 1]);
            itemAfter = parseFloat(items[i + 1]);

            if (items[i] == v){
                // it's an operator
                switch (v)
                {
                    case "√": final[final.length] = square(itemAfter); i++;  break;
                    case "∛": final[final.length] = cube(itemAfter); i++;  break;
                    case "%": final[final.length - 1] = modulo(lastArrIndex, itemAfter); i++;  break;
                    case "!": final[final.length - 1] = factorial(lastArrIndex);  break;
                    case "^": final[final.length - 1] = power(lastArrIndex, itemAfter); i++;  break;
                    case "*": final[final.length - 1] = multiplication(lastArrIndex, itemAfter); i++;  break;
                    case "/": final[final.length - 1] = divide(lastArrIndex, itemAfter); i++;  break;
                    case "+": final[final.length - 1] = add(lastArrIndex, itemAfter); i++;  break;
                    case "-": final[final.length - 1] = subtract(lastArrIndex, itemAfter); i++;  break;
                    case "&": final[final.length - 1] = bitWiseAnd(lastArrIndex, itemAfter); i++;  break;
                    case "|": final[final.length - 1] = bitWiseOr(lastArrIndex, itemAfter); i++;  break;
                    case "<<": final[final.length - 1] = bitWiseLeftShift(lastArrIndex, itemAfter); i++;  break;
                    case ">>": final[final.length - 1] = bitWiseRightShift(lastArrIndex, itemAfter); i++;  break;
                    case "~": final[final.length] = bitWiseNot(itemAfter); i++;  break;
                    default: console.log('not a valid operator')
                }
            }
            else {
                final.push(items[i]);
            }
            
        }
        items = final;
        return items;
    }
    
    const solveSignIndex = (val) => {
        //operators
        val.forEach((v) => (ansa = calc(v)));
        // alert(ansa);
        if (isNaN(ansa)){
            // handle some error
            ansa = error;
        }

        return ansa;
    }

    
    result = solveSignIndex(operators);

    try{
        document.getElementById("result").textContent = result;
    } catch {
        document.getElementById("result").textContent = error;
    }
}






