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