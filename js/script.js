const linksMenu = document.querySelectorAll(".side-link");

const telas = document.querySelectorAll(".view");

linksMenu.forEach(link => {

    link.addEventListener("click", () => {
        const telaSelecionada = link.dataset.view;
        linksMenu.forEach(item => {
            item.classList.remove("active");
        });
        link.classList.add("active");
        telas.forEach(tela => {
            tela.classList.remove("active");
        });

        const tela = document.getElementById(`view-${telaSelecionada}`);
        if (tela) {
            tela.classList.add("active");
        }

    });

});
