//SUM
function sum (){
    let res = 0;
    for(let i=0; i<arguments.length; i++){

        res +=arguments[i];

    }
    return res;
}

//SUBTRACTION

function subs (){
    let res = 0;
    for(let i=0; i<arguments.length; i++){

        res -=arguments[i];

    }
    return res;
}

//MULTIPLICATION
function mult (){
    let res = 1;
    for(let i=0; i<arguments.length; i++){

        res *=arguments[i];

    }
    return res;
}

//SUM22
function sum2 (a, b){
    return a + b;
}

//SUBTRACTION2

function subs2 (a, b){
    return a -b;
}

//MULTIPLICATION2
function mult2 (a, b){
    return a*b;
}

//DIVISION2
function div2 (a, b){
    return a/b;
}

//OPERATOR
function operator(operation, n1, n2){
    switch (operation) {
        case '+':
          // code to be executed if expression === value1
          return sum2(n1,n2);
          
        case '-':
          // code to be executed if expression === value2
          return subs2(n1,n2);
         
        case '*':
            // code to be executed if expression === value2
          return mult2(n1,n2);
        case '/':
          // code to be executed if expression === value2
          return div2(n1,n2);
        
        
      }
      

}