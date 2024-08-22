// Arrays com opções de frases
var places = ["na praia", "na escola", "na academia", "no parque", "no cinema", "no restaurante", "na farmácia", "no escritório", "na casa da avó", "na biblioteca", "no aeroporto", "no teatro", "no shopping", "na estação de trem", "no hospital", "na casa de um amigo", "no zoológico", "na feira"];
var tasks = ["comprar frutas e legumes", "relaxar e tomar sol", "estudar para uma prova", "fazer exercícios físicos", "caminhar com o cachorro", "assistir a um filme", "jantar com a família", "comprar remédios", "participar de uma reunião", "visitar a avó", "ler um livro", "pegar um voo", "assistir a uma peça de teatro", "fazer compras", "pegar um trem", "fazer um exame médico", "visitar um amigo", "ver os animais", "comprar produtos frescos"];
var people = ["Eu", "Você", "Ele", "Ela", "Nós", "Vocês", "Eles", "Elas"];
var verbIr = ["vou", "vai", "vamos", "vão", "fui", "foi", "fomos", "foram"];

// Variáveis para armazenar as partes da frase
var currentPerson = people[Math.floor(Math.random() * people.length)];
var currentVerb = verbIr[Math.floor(Math.random() * verbIr.length)];
var currentPlace = places[Math.floor(Math.random() * places.length)];
var currentTask = tasks[Math.floor(Math.random() * tasks.length)];

// Funções para gerar novas partes da frase aleatoriamente
function generateRandomPerson() {
    currentPerson = people[Math.floor(Math.random() * people.length)];
}

function generateRandomVerb() {
    currentVerb = verbIr[Math.floor(Math.random() * verbIr.length)];
}

function generateRandomPlace() {
    currentPlace = places[Math.floor(Math.random() * places.length)];
}

function generateRandomTask() {
    currentTask = tasks[Math.floor(Math.random() * tasks.length)];
}

// Função para atualizar a frase completa
function updateSentence() {
    var sentence = currentPerson + " " + currentVerb + " " + currentPlace + " " + currentTask + ".";
    document.getElementById("labelResul").innerText = sentence;
}

// Configurar o evento do botão para mudar a pessoa
document.getElementById("buttonPerson").addEventListener("click", function() {
    generateRandomPerson();
    updateSentence();
});

// Configurar o evento do botão para mudar o verbo
document.getElementById("buttonVerbIR").addEventListener("click", function() {
    generateRandomVerb();
    updateSentence();
});

// Configurar o evento do botão para mudar o lugar
document.getElementById("buttonPlace").addEventListener("click", function() {
    generateRandomPlace();
    updateSentence();
});

// Configurar o evento do botão para mudar a tarefa
document.getElementById("buttonTask").addEventListener("click", function() {
    generateRandomTask();
    updateSentence();
});

// Inicializa a frase no começo
updateSentence();
