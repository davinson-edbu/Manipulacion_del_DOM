function calcularIva(){
    let precioBase= parseFloat(document.getElementById("compra").value)
    let porcentajeIva = parseFloat(document.getElementById("Iva").value)

     let valorIva = precioBase * (porcentajeIva/100)
     let precioFinal = precioBase + valorIva

    document.getElementById("resultadoTotal").innerHTML=  "Precio Final: "+precioFinal

}

function calcularCuadrado(){
    let lado = parseFloat(document.getElementById("cuadrado").value)

    let Area= lado * lado
    let Perimetro = lado * 4

    document.getElementById("resultadoArea").innerHTML = "El area es: " + Area
    document.getElementById("resultadoPerimetro").innerHTML = "El Perimetro es: " + Perimetro

}

function numeroDosDigitos(){
    let number = parseInt(document.getElementById("Digito").value)

    let decenas = Math.floor(number/10)
    let unidades = number % 10

    document.getElementById("resDecenas").innerHTML = "Decenas: " + decenas
    document.getElementById("resUnidades").innerHTML = "Unidades: " + unidades


}

function calcularIngredientes(){
    let personas = parseFloat(document.getElementById("comensales").value)

    let papas = personas * 0.2
    let huevos = personas * 1
    let cebolla = personas * 60

    document.getElementById("resPapas").innerHTML = "Total Papas Kg: " + papas
    document.getElementById("resHuevos").innerHTML = "Total Huevos: " + huevos
    document.getElementById("resCebolla").innerHTML = "Total Cebolla: " + cebolla

}

function compararNumeros(){
    let numeroA = parseInt(document.getElementById("numA").value)
    let numeroB = parseInt(document.getElementById("numB").value)

    let mensaje = " "
    if(numeroA > numeroB){
        mensaje = `el primer numero ${numeroA} es mayor`
    }
    else if(numeroB > numeroA){
        mensaje = `el segundo numero ${numeroB} es mayor`
    }
    else{
        mensaje = "Ambos numeros son iguales"
    }

    document.getElementById("resComparacion").innerHTML = mensaje


}

function calcularFactorial(){
    let n = parseInt(document.getElementById("factorial").value)

    if(n<0){
        document.getElementById("resFactorial").innerHTML = "No existe factorial de negativos."
        return;

    }

    let resultado = 1

    for (let i = 1; i <= n; i++) {
        resultado = resultado * i
        
    }

    document.getElementById("resFactorial").innerHTML = "El factorial de "+ n + "es: "+resultado

}

function buscarMultiplos(){
    let inicio = parseInt(document.getElementById("rangoInicio").value)
    let fin = parseInt(document.getElementById("rangoFin").value)

    let resultados = []
    for(let i= inicio; i <= fin; i++){
        if(i % 6 === 0){
            resultados.push(i)
        }

    }
    if(resultados.length > 0 ){
        document.getElementById("resMultiplos").innerHTML = "Los multiplos de 6 son: " + resultados.join(", ")
    }else{
        document.getElementById("resMultiplos").innerHTML = "No se encontraron multiplos de 6 en ese rango."
    }

}

function procesarArreglo(){
    let original = []
    for(let i = 0; i < 10; i++){

        let numAleatorio = Math.floor(Math.random()* (20-10+1)) + 10
        original.push(numAleatorio)
    }
    document.getElementById("arrayOriginal").innerHTML = original.join(", ")

    let filtrado = []

    for(let i = 0; i < original.length; i++){

        if (original[i] % 3 !== 0){
            filtrado.push(original[i])
        }
    }
    document.getElementById("arrayFiltrado").innerHTML =  filtrado.join(", ")
}

function analizarTriangulo(){
    let a = parseFloat(document.getElementById("ladoA"))
    let b = parseFloat(document.getElementById("ladoB"))
    let c = parseFloat(document.getElementById("ladoC"))

    let tipo = ""

    if(a === b && b === c){
        tipo = "Equilatero"
    }
    else if(a === b || b === c || a === c){
        tipo = "Isosceles"

    }
    else{
        tipo = "Escaleno"
    }

    let s = (a + b + c) / 2
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))

    document.getElementById("resTipo").innerHTML = "Tipo: "+ tipo

    if(isNaN(area) || area <= 0){
        document.getElementById("resAreaTri").innerHTML = "Error: los lados no forman un triangulo valido."

    }else{
        document.getElementById("resAreaTri").innerHTML = "Area: " + area.toFixed(2)
    }


}

function procesarPalabras(){
    let texto = document.getElementById("contador").value

    let palabras = texto.split(" ")

    let longitudes = []
    let sumaTotal = 0

    for(let i = 0; i < palabras.length; i++){
        let cantidad = palabras[i].length

        longitudes.push(cantidad)
        sumaTotal += cantidad
    }
    document.getElementById("listaLongitudes").innerHTML = longitudes.join(", ")
    document.getElementById("totalCaracteres").innerHTML = sumaTotal

}

function invertirArreglos(){
    let original = []
    for(let i = 0; i < 10; i++){
        original.push(Math.floor(Math.random() * 100))
    }
    document.getElementById("arrOriginal").innerHTML = original.join(", ")

    let manual = []
    for(let i = original.length - 1; i >=0; i--){
        manual.push(original[i])
    }
    document.getElementById("arrManual").innerHTML = manual.join(", ")

    let conFuncion = [...original].reverse()
    document.getElementById("arrReverse").innerHTML = conFuncion.join(", ")
}

function clasificarNumeros(){
    let numeros =[]
    for(let i = 0; i < 20; i++){
        let num = Math.floor(Math.random() * 101)
        numeros.push(num)
    }
        let pares = []
        let impares = []

        for(let i = 0; i < numeros.length; i++){
            if(numeros[i] % 2 === 0){
                pares.push(numeros[i])
            }
            else{
                impares.push(numeros[i])

            }
        }
    

    document.getElementById("arrTotal").innerHTML = numeros.join(", ")
    document.getElementById("arrPares").innerHTML = pares.join(", ")
    document.getElementById("arrImpares").innerHTML = impares.join(", ")
}


let numeroSecreto = Math.random()*101
let intentosRestantes = 15
let historialNumeros = []

function comprobarIntento(){
    let entrada = document.getElementById("intentoUsuario").value
    let intento = parseInt(entrada.value)

    intentosRestantes--
    document.getElementById("cuentaRegresiva").innerHTML = intentosRestantes

    historialNumeros.push(intento)
    document.getElementById("historial").innerHTML = historialNumeros

    let pistaElemento = document.getElementById("pista")

    if (intento === numeroSecreto){
        pistaElemento.innerHTML = "GAME OVER. El numero era " + numeroSecreto

    }else if(intento < numeroSecreto){
        pistaElemento.innerHTML = "El numero secreto es MAYOR"
    }else{
        pistaElemento.innerHTML = "El numero secreto es MENOR"
    }

    entrada.value = ""
    entrada.focus()
}