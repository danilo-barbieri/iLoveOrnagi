document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade de busca por data
    const searchDateInput = document.getElementById('searchDate');
    const textosContainer = document.getElementById('textos');
    
    if (textosContainer) {
        const textos = textosContainer.getElementsByTagName('p');

        if (searchDateInput) {
            searchDateInput.addEventListener('input', function() {
                const filter = searchDateInput.value;

                Array.from(textos).forEach(function(texto) {
                    const textoDate = texto.getAttribute('data-date');
                    if (textoDate === filter || filter === '') {
                        texto.style.display = '';
                    } else {
                        texto.style.display = 'none';
                    }
                });
            });
        } else {
            console.error('Campo de busca por data não encontrado.');
        }
    } else {
        console.error('Elemento com ID "textos" não encontrado.');
    }

    // Funcionalidade de exibir aleatoriamente as "100 coisas"
    const coisas = [
    "Seu sorriso",
    "Seus olhos",
    "Sua boca",
    "Seu senso de humor",
    "Sua inteligência",
    "Seu corpo",
    "O jeito como você me trata",
    "Seu jeito de me fazer sentir especial",
    "Seu jeito de me fazer sentir amado",
    "Sua foto de ursinho",
    "Seus gostos",
    "Fã de Harry Potter",
    "Ser jogador de GTA",
    "Seu abraço",
    "Sua voz",
    "Seus pequenos gestos de carinho",
    "O jeito que você sorri quando está feliz",
    "Sua criatividade",
    "Seu talento no piano",
    "Você não conseguir ficar parado",
    "Sua determinação",
    "Sua gentileza",
    "O jeito como você cuida de mim quando estou doente",
    "Seu gosto para roupa",
    "Seu espírito aventureiro",
    "Sua habilidade na cozinha",
    "Sua dedicação ao trabalho",
    "Seu desejo de aprender coisas novas",
    "O jeito que você me faz rir",
    "Sua paciência",
    "Sua lealdade",
    "Seu carinho com todo mundo",
    "Seus planos para o futuro",
    "Seu apoio em momentos difíceis",
    "Nossa deterinação ",
    "Sua habilidade em motivar meu dia",
    "Nosso sonho do Benicios",
    "O jeito como você se dedica aos seus hobbies",
    "Seu talento para desenhar",
    "Sua capacidade de ouvir",
    "Seu amor por viagens",
    "Seu desejo de ajudar",
    "Sua energia positiva",
    "Seu amor pela apple",
    "Sua confiança",
    "Sua vontade de experimentar novas coisas",
    "Sua habilidade em resolver problemas",
    "Sua capacidade de se adaptar em qualquer ambiente",
    "Sua coragem",
    "Seu espírito divertido",
    "Seu comprometimento com suas metas",
    "Seu estilo de dança ksksks",
    "Suas músicas",
    "Sua maneira de celebrar datas especiais",
    "Seu talento para criar presentes personalizados",
    "Seu jeito carinhoso de falar",
    "Sua capacidade de fazer planos",
    "Seu gosto por atividades ao ar livre",
    "Sua dedicação aos seus projetos",
    "Você",
    "Sua paciência com crianças",
    "Sua vontade de fazer a diferença",
    "Seu jeito de lidar com desafios",
    "Suas frases unicas que sempre damos muita risada",
    "Sua capacidade de inspirar os outros",
    "Seu estilo único",
    "Sua habilidade em fazer amigos",
    "Sua habilidade com jogos ksksk",
    "Seu talento para massinha",
    "Seu gosto por fotos",
    "Seus olhos brilhando",
    "Seu desejo de tornar o mundo melhor",
    "Nossas conversas diarias",
    "Sua dedicação aos seus estudos",
    "Seu jeito de planejar surpresas",
    "Sua capacidade de enfrentar adversidades",
    "Seu talento com bebidas ksks",
    "Voce ser fraquinho com alcool",
    "Sua capacidade de ver o lado bom das coisas",
    "Seu desejo de crescer como pessoa",
    "Seu esforço diario",
    "Nossos planos do exterior",
    "Nosso sexo",
    "Seu estilo de vida as vezes saudavel",
    "Sua maneira de cuidar",
    "Seu gosto por atividades ao ar livre",
    "Sua negação por tecnologia",
    "Sua mudanca de manter a calma em situações estressantes",
    "Seu desejo de sempre melhorar",
    "Seu interesse por novas habilidades",
    "Sua habilidade em fazer novas amizades",
    "Seu gosto por aventuras culinárias",
    "Sua dedicação no nosso namoro",
    "Seu talentoo para tirar fotos",
    "Meu chicletinho",
    "Sua habilidade em melhor o meu dia",
    "Sua disposição para tentar coisas novas",
    "Seu jeito de fazer todos ao seu redor se sentirem especiais",
    "Seu entusiasmo por aprender sobre diferentes coisas"
    ];

    const gerarAleatorioBtn = document.getElementById('gerarAleatorio');
    const coisaAleatoriaDisplay = document.getElementById('coisaAleatoria');
    const caixinhaSurpresa = document.getElementById('caixinhaSurpresa');

    if (gerarAleatorioBtn && coisaAleatoriaDisplay && caixinhaSurpresa) {
        gerarAleatorioBtn.addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * coisas.length);
            coisaAleatoriaDisplay.textContent = coisas[randomIndex];
        });

        caixinhaSurpresa.addEventListener('click', function() {
            caixinhaSurpresa.classList.add('revelada');
            coisaAleatoriaDisplay.style.display = 'block';
        });
    } else {
        console.error('Botão, elemento de exibição para "Coisa Aleatória" ou caixinha de surpresa não encontrado.');
    }
});
