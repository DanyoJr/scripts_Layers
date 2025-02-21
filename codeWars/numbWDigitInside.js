function numbersWithDigitInside(x, d) {
    let a = [];
    for(let i = 0; i <= x; i++){
        a.push(i)
    }
  
    let b = a.filter(num => num !== 0 && num.toString().includes(d.toString()))
    if(b == false){
        return[ 0, 0, 0 ]
    }
    let c = b.reduce((acc, num) => acc + num, 0)

    let h = b.reduce((acc, num) => acc * num, 1)

    console.log(b)
    return [b.length, c, h];
  }

  console.log(numbersWithDigitInside(20, 0))
