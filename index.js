// Lê o conteúdo do arquivo 'stdin' e armazena na variável input
const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
// Dividindo o input num array à partir dos espaçamentos e convertendo as strings para numbers
const valores = input.split('\r\n') // Retorna cada linha do arquivo "stdin" numa posição de um Array
const [ x1, y1 ] = valores[0].split(' ')
const [ x2, y2 ] = valores[1].split(' ')
// Fórmula para calcular há distância percorrida entre os dois pontos
const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); // sqrt() - Retorna a Raiz Quadrada de um número, pow() - Potenciação
console.log(distancia.toFixed(4));