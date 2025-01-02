let imc;
let classificacao;
let imagemIMC = document.getElementById("imagem-imc");
let resultado = document.getElementById("resultado-imc")
let explicacao = document.getElementById("explicacao-imc")

function calcularIMC(event) {

    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso-input").value);
    const altura = parseFloat(document.getElementById("altura-input").value) / 100;

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        imagemIMC.innerHTML = "";
        explicacao.innerHTML = "";
        resultado.style.marginTop = "40px";
        resultado.style.color = "red";
        return resultado.innerHTML = "Por favor, insira valores válidos para peso e altura.";
    }

    imc = peso / (altura ** 2);

    if (imc <= 18.5) {
        classificacao = "Abaixo do Peso";
    } else if (imc >= 18.6 && imc <= 24.9) {
        classificacao = "Peso Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade Grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade Grau 2";
    } else {
        classificacao = "Obesidade Grau 3";
    }

    mostraIMC()
}

function mostraIMC() {
    resultado.style.color = "black";
    resultado.style.marginTop = "40px";
    resultado.innerHTML = `Seu IMC é: <span class="resultado-texto">${imc.toFixed(2)}</span>, sua classificação é: <span class="resultado-texto">${classificacao}</span>`;

    if (imc <= 18.5) {
        imagemIMC.innerHTML = '<img src="assets/magro.webp" alt="Abaixo do Peso" />';
        explicacao.innerHTML = "Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.";
    } else if (imc >= 18.6 && imc <= 24.9) {
        imagemIMC.innerHTML = '<img src="assets/normal.webp" alt="Peso Normal" />';
        explicacao.innerHTML = "Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.";
    } else if (imc >= 25 && imc <= 29.9) {
        imagemIMC.innerHTML = '<img src="assets/sobrepeso.webp" alt="Sobrepeso" />';
        explicacao.innerHTML = "Sobrepeso é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.";
    } else if (imc >= 30 && imc <= 34.9) {
        imagemIMC.innerHTML = '<img src="assets/obeso1.webp" alt="Obesidade Grau 1" />';
        explicacao.innerHTML = "Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.";
    } else if (imc >= 35 && imc <= 39.9) {
        imagemIMC.innerHTML = '<img src="assets/obeso2.webp" alt="Obesidade Grau 2" />';
        explicacao.innerHTML = "Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.";
    } else {
        imagemIMC.innerHTML = '<img src="assets/obeso3.webp" alt="Obesidade Grau 3" />';
        explicacao.innerHTML = "Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.";
    }
}
