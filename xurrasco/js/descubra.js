//Seleção de páginas
let opcao = parseInt(prompt('Digite uma opção (1 até 5): '));

switch(opcao){
    case 1:
        window.location.href = 'pages/dica1.html';
        break;
    case 2:
        window.location.href = 'pages/dica2.html';
        break;
    case 3:
        window.location.href = 'pages/dica3.html';
        break;
    case 4:
        window.location.href = 'pages/dica4.html';
        break;
    case 5:
        window.location.href = 'pages/dica5.html';
        break;
    default:
        alert('Escolha uma opção entre 1 e 5');
        location.href('../index.html');
        break;
}
