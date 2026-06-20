export function calcularSubTotal(productos) {
    return productos.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
}
export function calcularIVA(subtotal, tasaIVA = 0.12) {
    return subtotal * tasaIVA;
}
export function calcularTotal(subtotal, iva) {
    return subtotal + iva;
}
//# sourceMappingURL=calculos.js.map