function ExerciceOne() {
    var number = Number(prompt("Digite um número: ").trim())
    alert(`O número ${number} é ${number % 2 == 0 ? "par" : "impar"}.`)
}

function ExerciceTwo() {
    var real = Number(prompt("Digite o valor em reais(R$): "));
    var dollar = real / 3.7;

    alert(`Você tem US$${dollar.toFixed(2)}!`)
}

function ExerciceThree() {
    var chico = 1.5;
    var ze = 1.1;
    var years = 0;

    while (ze <= chico) {
        chico += 0.2;
        ze += 0.3;
        years += 1;
    }

    alert(`Serão necessários ${years} anos para que Zé alcance Chico.`);

}

function ExerciceFour() {
    var name = prompt("Nome do funcionário: ");
    var salary = Number(prompt("Insira o sálario bruto!"))

    var liquid = salary - (salary * 0.085)
    liquid = salary - (salary * 0.12)

    alert(`
        Nome: ${name}\n
        Sálario bruto: R$${salary.toFixed(2)}\n
        Sálario líquido: R$${liquid.toFixed(2)}.\n
        Desconto INSS: R$${(salary * 0.085).toFixed(2)}. E desconto IRRF: R$${(salary * 0.12).toFixed(2)}
    `)

}

function ExerciceFive() {
    var vector = []
    var less = 0;
    var more = 0;
    let i;

    for (i = 0; i < 30; i++) {
        vector.push(Math.floor(Math.random() * 16))

        if (vector[i] < 8) {
            less += 1
        } else if (vector[i] > 10) {
            more += 1
        }
    }

    alert(`
        ${vector}\n
        Números menores que 8: ${less} correspondem a ${(less / (vector.length * 0.01)).toFixed(2)}%\n
        Números maiores que 10: ${more} correspondem a ${(more / (vector.length * 0.01)).toFixed(2)}%\n
    `);
    console.log(vector);

}

function ExerciceSix() {
    var vector = []
    let i;

    for (i = 0; i < 10; i++) {
        vector.push(Number(getRandomInt(1, 25)));
    }

    vector.sort(function(a, b) {

        if (a > b) {
            return -1
        }

        if (b > a) {
            return 1
        }

        return 0

    })

    alert(vector)

}

function ExerciceSeven() {
    var number = Number(prompt("Insira um número: "))
    var fatorial = number;
    let orginal = number;

    while (number > 1) {
        number -= 1
        fatorial = number * fatorial
    }

    alert(`
        O fatorial de ${orginal} é ${fatorial}
    `)

}

function ExerciceEight() {
    var time = Number(prompt("Insira um número"))

    while (time > 0) {
        alert(time)
        time -= 1
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}