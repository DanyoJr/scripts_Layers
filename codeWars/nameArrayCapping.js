const arr = ['DANIEL', 'guilherme', 'bernardo', 'cAIO'];

function nameArray(names){

    let b = names.map(test => test.toLowerCase());

    

    let a = b.map(test => test[0].toUpperCase() + test.substring(1));
    
    return a
}


console.log(nameArray(arr))
