function sockMerchant(n, arr){
    let sorted = arr.sort((a,b) => a-b);
    let pairs = 0;
    for (let i=0; i < n; i++) {
        if (sorted[i] === sorted[i+1]){
            pairs ++;
            i += 1;
        }
    }
    console.log(pairs);
}

sockMerchant(9, [10,20,20,10,10,30,50,10,20]);

