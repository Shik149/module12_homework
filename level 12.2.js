const keyInObj = (str,obj) => {
    console.log(str in obj);
}

const obj1 = { a:1, b:2 }

keyInObj("a",obj1); 

// Задание выполнено верно, но код функции можно упростить. Выше в коде показала как