function calcularIva(){
    let precioBase= parseFloat(document.getElementById("compra").value)
    let porcentajeIva = parseFloat(document.getElementById("Iva").value)

     let valorIva = precioBase * (porcentajeIva/100)
     let precioFinal = precioBase + valorIva

    document.getElementById("resultadoTotal").innerHTML=  "Precio Final: "+precioFinal

}