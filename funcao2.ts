function concatenar (palavra1: string, palavra2: string): void{
    console.log(`Concatenando ${palavra1} e ${palavra2}`);
    console.log(`Resultado ${palavra1+palavra2}`);
}
function calcularMedia (n1: number, n2:number): number{
    let media: number = (n1+n2)/2;
    return media;
}
function tabUada (tabuada: number):void{
   let mult: number = 0;
   do{
       console.log(`${tabuada} * ${mult} = ${tabuada*mult}`);
       mult++;
   }while ( mult != 11);
}

const teclado = require (`prompt-sync`)();

let palavra1: string = teclado(`Digite a palavra um a ser concatenada: `)
let palavra2: string = teclado(`Digite a palavra dois a ser concatenada: `);

concatenar(palavra1,palavra2);

let n1: number = parseInt(teclado(`Digite o valor da N1: `));
let n2: number = parseInt(teclado(`Digite o valor na N2: `));

let tabuada: number = parseInt(teclado(`Digite a tabuada desejada: `));

tabUada(tabuada);

let resultado: number = calcularMedia(n1,n2);
console.log(`O resultado da média é ${resultado}`);  