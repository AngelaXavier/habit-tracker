const calendarioDias = document.getElementById("calendarioDias");

const nomeMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

let dataCalendario = new Date();

function gerarCalendario() {

    if (!calendarioDias) return;

    calendarioDias.innerHTML = "";

    const ano = dataCalendario.getFullYear();
    const mes = dataCalendario.getMonth();

    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);

    let diaSemana = primeiroDia.getDay();

    if (diaSemana === 0) {
        diaSemana = 7;
    }

    for (let i = 1; i < diaSemana; i++) {

        const vazio = document.createElement("span");
        vazio.classList.add("dia-vazio");

        calendarioDias.appendChild(vazio);
    }

    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {

        const elementoDia = document.createElement("span");

        elementoDia.textContent = dia;

        calendarioDias.appendChild(elementoDia);
    }

    const tituloMes = document.querySelector(".calendario-mes strong");

    if (tituloMes) {
        tituloMes.textContent =
            `${nomeMeses[mes]} ${ano}`;
    }
}

gerarCalendario();

const botoesCalendario =
    document.querySelectorAll(".calendario-mes button");

if (botoesCalendario.length === 2) {

    botoesCalendario[0].addEventListener("click", () => {

        dataCalendario.setMonth(
            dataCalendario.getMonth() - 1
        );

        gerarCalendario();

    });

    botoesCalendario[1].addEventListener("click", () => {

        dataCalendario.setMonth(
            dataCalendario.getMonth() + 1
        );

        gerarCalendario();

    });

}