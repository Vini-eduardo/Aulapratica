/*funcão com parâmetro e sem retorno (tem coisa dentro do parênteses e tem void)
function(x:number): void{ ... }.*/

function sobreMim (saudacao:string, idade:number, lazer:string, profissao:string): void{
    console.log(`${saudacao}!!! Tenho ${idade} gosto de ${lazer} e tenho como profissão ${profissao}`)
}



let saudacao: string = `Olá Mundo`;
let idade: number = 112;
let lazer: string = `Assistir Roberto Carlos`;
let profissao: string = `programador`;

sobreMim(saudacao,idade,lazer,profissao ); 


/* Funcão sem parâmetro e sem retorno
    function(): void {void {...} */

function ola ():void{
    console.log(`Oi!!!!`);
}
ola();


/* Função sem parâmetro e com retorno
  function nomeDaFuncao(): number { ... } */

 function somasemParametro (): number{
    let soma: number = 5 + 5;
    return soma;
}

let resu: number = somasemParametro();
console.log(res);
//console.log(somaSemParametro());



/* Função com parâmetro e com retorno
   function somaSemParametro()(x:number): number { ... } */

   function idadePessoa (anoNascimento: number): number{
    const dataAtual = new Date();
    console.log(dataAtual);
    const anoAtual = dataAtual.getFullYear();
    let idadeI: number = anoAtual - anoNascimento;
    return idadeI;
}

let anoNascimento: number = 1984;

let idadeE: number = idadePessoa(anoNascimento);
console.log(`Idade da pessoa é ${idadeE}`)
//console.log(`Idade da pessoa é ${idadePessoa(anoNascimento)}`);





/* void indica sem retorno */

