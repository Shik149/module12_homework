function Pribor (name,power){
    this.name=name,
        this.power=power
}

Pribor.prototype.switchOn=function (status) {
    if (status === "On") {
        console.log("Прибор включен")
    } else {
        console.log("Прибор выключен")
    }
}

function TableLamp (colour){
    this.colour=colour,
        this.lampColour=function (){
            console.log(`Цвет лампы ${colour}`)
        }
}

TableLamp.prototype=new Pribor ("Лампа настольная",500)

const tableLamp1=new TableLamp("Зеленый")

tableLamp1.lampColour()
tableLamp1.switchOn("On")

console.log(tableLamp1.name,tableLamp1.power,tableLamp1.colour)

function PersonalComputer (price){
    this.price=price
    this.notice=function(price){
        if (price > 100) {
            console.log("Внимание! Компьютер очень дорогой")
        }
        else {console.log("Можно покупать")}
    }
}

PersonalComputer.prototype=new Pribor ("Персональный компьютер",300)

const personalComputer1=new PersonalComputer (200)

personalComputer1.notice(200)
personalComputer1.switchOn("Off")

console.log(personalComputer1.name,personalComputer1.power,personalComputer1.price)