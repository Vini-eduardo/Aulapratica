/*funcão com parâmetro e sem retorno (tem coisa dentro do parênteses e tem void)
function(x:number): void{ ... }.*/
function sobreMim(saudacao, idade, lazer, profissao) {
    console.log("".concat(saudacao, "!!! Tenho ").concat(idade, " gosto de ").concat(lazer, " e tenho como profiss\u00E3o ").concat(profissao));
}
var saudacao = "Ol\u00E1 Mundo";
var idade = 112;
var lazer = "Assistir Roberto Carlos";
var profissao = "programador";
sobreMim(saudacao, idade, lazer, profissao);
/* Funcão sem parâmetro e sem retorno
    function(): void {void {...} */
function oi() {
    console.log("Oi!!!!");
}
oi();
/* Função sem parâmetro e com retorno
  function nomeDaFuncao(): number { ... } */
function somaSemParametro() {
    var soma = 5 + 5;
    return soma;
}
var res = somaSemParametro();
console.log(res);
//console.log(somaSemParametro());
/* Função com parâmetro e com retorno
   function somaSemParametro()(x:number): number { ... } */
function idadePessoa(anoNascimento) {
    var dataAtual = new Date();
    console.log(dataAtual);
    var anoAtual = dataAtual.getFullYear();
    var idadeI = anoAtual - anoNascimento;
    return idadeI;
}
var anoNascimento = 1984;
var idadeI = idadePessoa(anoNascimento);
console.log("Idade da pessoa \u00E9 ".concat(idadeI));
//console.log(`Idade da pessoa é ${idadePessoa(anoNascimento)}`);
/* void indica sem retorno */ 
