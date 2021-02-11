const func = {
    a: 7,
    b: 9
}

function getOwnProps(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            console.log(`${key} - ${obj[key]}`);
    }
}

getOwnProps(func);