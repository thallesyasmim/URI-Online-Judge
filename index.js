// Lê o conteúdo do arquivo 'stdin' e armazena na variável input
const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
// Dividindo o input num array à partir dos espaçamentos e convertendo as strings para numbers
const [ tempo, velocidade ] = input.split('\r\n').map(value => Number(value)); // Retorna cada linha do arquivo "stdin" numa posição de um Array
// Velocidade Média (Km/h) * Tempo da viagem / 12 Km/l = 1 litro = 12km
const combustivelGasto = (tempo * velocidade) / 12; 
console.log(combustivelGasto.toFixed(3));