function myFunc(range){
    if(range >= 1000 && range < 99999){
        console.log(`${range / 1000}K`)
    }
    else if(range >= 100000 && range < 999999999){
        console.log(`${range / 1000000}M`)
    }
    else if(range >= 100000000 && range < 9999999999){
        console.log(`${range / 100000000}B`)
    }
    else if(range >= 1000000000){
        console.log(`${range / 1000000000}T`)
    }
}

const range = 162387823783478
myFunc(range)