import { Producto } from './interfaces.js';

export function calcularSubTotal(productos: Producto[]): number{
    return productos.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
}

export function calcularIVA(subtotal: number, tasaIVA: number = 0.12): number{
    return subtotal * tasaIVA;
}

export function calcularTotal(subtotal: number, iva: number): number{
    return subtotal + iva;
}