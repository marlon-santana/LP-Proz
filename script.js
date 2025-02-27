document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
      const content = item.nextElementSibling;
      const arrow = item.querySelector('.arrow');
      
      if (content.style.display === 'block') {
          content.style.display = 'none';
          arrow.classList.remove('open');
      } else {
          content.style.display = 'block';
          arrow.classList.add('open');
      }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const rangeInput = document.querySelector('input[type="range"]');
  const valorElement = document.querySelector('.valor');
  const timeTextElement = document.querySelector('.underline');

  // Tabela de valores com tempo e salário
  const valoresTabela = [
    { tempo: "1 mês", valor: "R$2.375,00" },
    { tempo: "6 meses", valor: "R$3.325,00" },
    { tempo: "2 anos", valor: "R$3.460,00" },
    { tempo: "5 anos", valor: "R$4.500,00" },
  ];

  // Configurar range de acordo com os dados
  rangeInput.min = 0;
  rangeInput.max = valoresTabela.length - 1;
  rangeInput.step = 1;
  rangeInput.value = 0;

  // Função para atualizar o range e o texto
  function updateRangeAndText() {
    const index = rangeInput.value;

    // Atualiza a barra de progresso
    const progressValue = (index / (valoresTabela.length - 1)) * 100;
    rangeInput.style.setProperty('--progress', `${progressValue}%`);

    // Atualiza os textos
    const itemSelecionado = valoresTabela[index];
    valorElement.innerHTML = `<strong>${itemSelecionado.valor}</strong>`;
    timeTextElement.textContent = ` ${itemSelecionado.tempo}`;
  }

  // Inicializa com o valor correto
  updateRangeAndText();

  // Atualiza ao mover o pino
  rangeInput.addEventListener("input", updateRangeAndText);
});

// Seleciona todos os botões de estado
const stateButtons = document.querySelectorAll('.state-button');

// Adiciona um evento de clique a cada botão
stateButtons.forEach(button => {
button.addEventListener('click', () => {
  // Remove a classe 'active' de todos os botões
  stateButtons.forEach(btn => btn.classList.remove('active'));
  // Adiciona a classe 'active' ao botão clicado
  button.classList.add('active');
  // Armazena o valor selecionado (opcional)
  const selectedState = button.getAttribute('data-value');
  console.log('Estado selecionado:', selectedState);

  // Expande o bottom sheet para 100%
  bottomSheet.classList.add('full');
});
});

// Seleciona os elementos
const ctaButton = document.querySelector('.cta'); // Botão que abre o bottom sheet
const bottomSheet = document.querySelector('.bottom-sheet'); // Bottom sheet
const overlay = document.querySelector('.overlay'); // Overlay (fundo escuro)
const closeButton = document.querySelector('.close-btn'); // Botão de fechar
const closeTopButton = document.querySelector('.close-top-btn'); // Botão "X" no topo
const submitButton = document.querySelector('.bottom-sheet-content button[type="submit"]'); // Botão de enviar
const bottomSheetContent = document.querySelector('.bottom-sheet-content'); // Conteúdo do bottom sheet
const successModal = document.querySelector('.success-modal'); 
const submitButtom = document.querySelector('.submit');
// const checkBox = document.querySelector('.state-button');

// Abre o Bottom Sheet ao clicar no botão CTA
ctaButton.addEventListener('click', () => {
bottomSheet.classList.add('active'); 
// overlay.classList.add('active'); 
});



// Fecha o Bottom Sheet ao clicar no botão "X" no topo
closeTopButton.addEventListener('click', () => {
bottomSheet.classList.remove('active');  
bottomSheet.classList.remove('full');
bottomSheet.classList.remove('success');
overlay.classList.remove('active'); 
successModal.classList.remove('active'); 
});



submitButtom.addEventListener('click', (event) => {
  event.preventDefault();
 

  openSuccessModal();
});


// Função para abrir o modal de sucesso
function openSuccessModal() {
  const successModal = document.getElementById('successModal');

  bottomSheet.classList.remove('active');
  successModal.classList.add('active');
}

// Função para fechar o modal de sucesso
function closeSuccessModal() {
  const successModal = document.getElementById('successModal');
  bottomSheet.classList.remove('active'); 
  bottomSheet.classList.remove('full'); 
  successModal.classList.remove('active');
}

// Adiciona o evento de submit ao formulário
// document.getElementById('bottom-sheet').addEventListener('click', function (event) {
//   event.preventDefault();

//   // Aqui você pode adicionar lógica para enviar os dados do formulário (ex: via AJAX)
//   // Por enquanto, apenas abrimos o modal de sucesso
//   openSuccessModal();
// });





document.addEventListener("DOMContentLoaded", () => {
  const spCheckbox = document.getElementById('sp');
  const mgCheckbox = document.getElementById('mg');
  const unidadesSelect = document.getElementById('unidades');

  const saoPauloOptions = [
    "Carapicuíba", "Diadema", "Grajaú", "Guaianases", "Guarulhos",
    "Itaquera", "Jabaquara", "Mauá", "Sacomã", "Santo Amaro", "São Miguel Paulista"
  ];

  const minasGeraisOptions = [
    "Belo Horizonte (Centro)", "Belo Horizonte (Venda Nova)", "Contagem",
    "Divinópolis", "Montes Claros", "Ipatinga", "Juiz de Fora"
  ];

  function updateUnidadesOptions(options) {
    unidadesSelect.innerHTML = '<option value="" disabled selected>Selecionar unidade</option>';
    options.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option;
      opt.textContent = option;
      unidadesSelect.appendChild(opt);
    });
  }

  function uncheckOtherCheckboxes(currentCheckbox) {
    const checkboxes = document.querySelectorAll('.state-checkbox');
    checkboxes.forEach(checkbox => {
      if (checkbox !== currentCheckbox) {
        checkbox.checked = false;
      }
    });
  }

  spCheckbox.addEventListener('change', (event) => {
    event.stopPropagation(); // Impede a propagação do evento

    if (spCheckbox.checked) {
      updateUnidadesOptions(saoPauloOptions);
      uncheckOtherCheckboxes(spCheckbox);
    } else {
      unidadesSelect.innerHTML = '<option value="" disabled selected>Selecionar unidade</option>';
    }
  });

  mgCheckbox.addEventListener('change', (event) => {
    event.stopPropagation(); // Impede a propagação do evento

    if (mgCheckbox.checked) {
      updateUnidadesOptions(minasGeraisOptions);
      uncheckOtherCheckboxes(mgCheckbox);
    } else {
      unidadesSelect.innerHTML = '<option value="" disabled selected>Selecionar unidade</option>';
    }
  });
});
