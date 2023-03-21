let input = document.getElementById('input');
let resultBox = document.getElementById('result');

let queryString = "";

function registerInput(symbol){
    if(symbol === '='){
        getQueryResult();
    }
    else if(symbol === 'AC' || symbol === 'CE'){
        queryString = '';
        input.innerText=queryString;
        resultBox.innerText='0';
    }
    else if(symbol === 'x'){
        if(queryString === '')
            return;
        queryString = queryString.slice(0, -1);
        input.innerText=queryString;
    }
    else{
        queryString = queryString.concat(symbol);
        input.innerText=queryString;
    }
}

function getQueryResult(){
    console.log(queryString);
    
    let queryResult = '';
    if(queryString === ''){
        queryResult='0';
    }
    else{

        try{
            queryResult = eval(queryString);
            queryResult = '='.concat(queryResult);
        }catch (e) {
            if (e instanceof SyntaxError) {
                queryResult='Invalid Math Expression';
            }
        }
        
    }
    
    console.log(queryResult);
    resultBox.innerText=queryResult;
    queryString='';
}