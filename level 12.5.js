class Pribor {
    constructor(name,power,status) {
        this.name=name,
            this.power=power,
            this.status=status
    }
    switchOn ()
    {
        if (this.status === "On") {
            console.log("Прибор включен")
        } else {
            console.log("Прибор выключен")
        }
    }
}

const pr1=new Pribor("Утюг",400,300)
pr1.switchOn()

class TableLamp extends Pribor {
    constructor (name, colour, power,status) {
        super(name,power,status)
        this.colour = colour
    }
    lampColour() {
        console.log(`Цвет лампы ${this.colour}`)
    }
}

const tl1 = new TableLamp("Лампа настолькная большая","Зеленый",400,"On")
tl1.switchOn()
tl1.lampColour()

class PersonalComputer extends Pribor {
    constructor (name, price, power,status) {
        super(name,power,status)
        this.price=price
    }
    notice() {
        if (this.price > 100) {
            console.log("Внимание! Компьютер очень дорогой")
        }
        else {console.log("Можно покупать")}
    }
}

const pc1 = new PersonalComputer("Персональный компьютер",200,600,"Off")
pc1.switchOn()
pc1.notice() 