function calcularPresupuesto() {
    const sueldo = parseInt(document.getElementById("sueldo").value);
    const otrosIngresos = parseInt(document.getElementById("otrosingresos").value);
    const alquiler = parseInt(document.getElementById("alquiler").value);
    const servicios = parseInt(document.getElementById("servicios").value);
    const transporte = parseInt(document.getElementById("transporte").value);
    const comida = parseInt(document.getElementById("comida").value);
    const otrosGastos = parseInt(document.getElementById("otros-gastos").value);

    const totalIngresos = sueldo + otrosIngresos;
    const totalGastos = alquiler + servicios + transporte + comida + otrosGastos;
    const balanceMensual = totalIngresos - totalGastos;
    
    document.getElementById("balance-mensual").innerHTML = "Balance Mensual: $" + balanceMensual;

    if (balanceMensual >= 0) {
        document.getElementById("sugerencias").innerHTML = "¡Excelente! Tu balance mensual es positivo.";
    } else {
        document.getElementById("sugerencias").innerHTML = "Tu balance mensual es negativo. Considera reducir tus gastos o aumentar tus ingresos.";
    }
    
    alert("tu balance mensual es: $" + balanceMensual);
}
