
MAQUINAS = [{ nombreMaquina: "Torno Industrial", superficieDeOperacionRequerida: 40 }]

NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

medidasGalpones = [{ largo: 50, ancho: 100 }]


// ALUMNO: MATEO QUIROGA

function calcularGalpon(largo, ancho){
    let area
    let perimetro
    area = largo * ancho
    perimetro = largo * 2 + (ancho * 2)
    console.log(area)
    console.log(perimetro)
}

calcularGalpon(20, 40)

function calcularSuperficie(superficie){
    if (superficie <= 40){
        console.log(true)
    }
    else{
        console.log(false)
    }

}
calcularSuperficie(40)

function calcularGalpon2(medidas){
    let area
    let perimetro
    for (let i = 0; i <= medidas.length; i++){
        console.log(i)
        area = medidas.largo * medidas.ancho
        console.log(medidas.largo)
        console.log(area)
    }

}

calcularGalpon2(medidasGalpones)

function filtrarInversoresVIP(nombre, capital){
    list = []
    if (capital < 1000000){

    }
    else{
        list.push(nombre, capital)
    }

}