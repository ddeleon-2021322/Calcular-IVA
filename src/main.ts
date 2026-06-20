import { Producto } from "./interfaces.js";
import { calcularSubTotal, calcularIVA, calcularTotal } from "./calculos.js";

const carritoDeCompras: Producto[] = [
    { nombre: 'Cuaderno Universitario', precio: 15.50, cantidad: 3 },
    { nombre: 'Lapicero Gel Negro', precio: 5.00, cantidad: 5 },
    { nombre: 'Mochila Escolar', precio: 125.00, cantidad: 1 }
];

const subtotal = calcularSubTotal(carritoDeCompras);
const iva = calcularIVA(subtotal, 0.12); 
const total = calcularTotal(subtotal, iva);

console.log(' Resumen De Compra');
carritoDeCompras.forEach(prod => {
    console.log(`${prod.cantidad}x ${prod.nombre} - Q${(prod.precio * prod.cantidad).toFixed(2)}`);
});
console.log('-------------------------');
console.log(`Subtotal: Q${subtotal.toFixed(2)}`);
console.log(`IVA (12%): Q${iva.toFixed(2)}`);
console.log(`Total Final: Q${total.toFixed(2)}`);