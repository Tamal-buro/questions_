function pattern(n){
    for (let i = 1; i<= n; i++){
        let row = '';
        for (let j = 1; j<= i; j++){
            row = row + '*';
        }
        console.log(row)
    }
}

pattern(5);


// extend this to print all the patterns