// Classificação de triângulos
let A = parseInt(prompt('Digite o lado A'));
let B = parseInt(prompt('Digite o lado B'));
let C = parseInt(prompt('Digite o lado C'));

if(A <= B + C &&
    B <= A + C &&
    C <= A + B){
        if(A == B && B == C){
         document.write('<p style="color: white">Triângulo Equilátero</p>');
         document.write('<body bgcolor = "blue"');
        }
        else if(A == B || B == C || C == A){
         document.write('<p style="color: white">Triângulo Isósceles</p>');
         document.write('<body bgcolor = "green"');
        }
        else{
         document.write('<p style="color: white">Triângulo Escaleno</p>');
         document.write('<body bgcolor = "yellow"');
        }
    }
    else {
    document.write('Não é um triângulo');
    document.write('img scr="imagem/xurrasco.gif" alt="Sumiu title="Seu corpo suado e você por cima de mim');
}
