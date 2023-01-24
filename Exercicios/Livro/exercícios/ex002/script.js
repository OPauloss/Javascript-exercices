// Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.

let total = window.prompt("Valor total da compra");
let clientes = window.prompt("Quantos clientes vão pagar");
window.alert(`Valor por cliente: ${total / clientes}`);