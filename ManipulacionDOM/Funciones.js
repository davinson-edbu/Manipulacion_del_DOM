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