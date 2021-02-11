const keyInObj = (str,obj) => {
    if ( str in obj ) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

const obj1 = { a:1, b:2 }

keyInObj("a",obj1); 