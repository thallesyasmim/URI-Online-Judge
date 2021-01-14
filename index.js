const { Console } = require('console');

// Lê o conteúdo do arquivo 'stdin' e armazena na variável input
const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
// Dividindo o input num array à partir dos espaçamentos e convertendo as strings para numbers
const [ A, B, C ] = input.split(' ').map(value => Number(value))
// Valor absoluto de A - B
const maiorAB = (A + B + Math.abs(A - B)) / 2;
const maiorBC = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

console.log(`${maiorBC} eh o maior`)