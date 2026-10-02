document.addEventListener('DOMContentLoaded', function () {
  const DIAS_SEMANA = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
  let dataSelecionada = new Date();

  function atualizarDataAtual() {
    let texto = dataSelecionada.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
    texto = texto.charAt(0).toUpperCase() + texto.slice(1).replace(',', '');
    document.getElementById('dataAtual').textContent = texto;
  }

  function renderizarSemana() {
    const linha = document.getElementById('sequenciaSemana');
    linha.innerHTML = '';

    // Começa no domingo da semana da data selecionada
    const inicioSemana = new Date(dataSelecionada);
    inicioSemana.setDate(inicioSemana.getDate() - inicioSemana.getDay());

    for (let i = 0; i < 7; i++) {
      const d = new Date(inicioSemana);
      d.setDate(d.getDate() + i);

      const mesmoDia = d.toDateString() === dataSelecionada.toDateString();

      const div = document.createElement('div');
      div.className = 'dia' + (mesmoDia ? ' active' : '');
      div.innerHTML = `<span>${DIAS_SEMANA[d.getDay()]}</span><strong>${d.getDate()}</strong>`;

      div.addEventListener('click', function () {
        dataSelecionada = d;
        atualizarDataAtual();
        renderizarSemana();
      });

      linha.appendChild(div);
    }
  }

  atualizarDataAtual();
  renderizarSemana();
});