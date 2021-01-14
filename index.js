// Lê o conteúdo do arquivo 'stdin' e armazena na variável input
const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
// Dividindo o input num array à partir dos espaçamentos e convertendo as strings para numbers
const [A, B] = input.split('\r\n').map(value => Number(value));
// Valor absoluto de A - B
const consumo = A / B;
console.log(`${consumo.toFixed(3)} km/l`);