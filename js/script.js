const button = document.querySelector('.button-add-tarefa')

const input = document.querySelector('.input-tarefa')

const minhaLista = []

function adicionarNovaTarefa() {
    minhaLista.push(input.value)

    mostrarTarefas()

}

function mostrarTarefas() {

    const ul = document.querySelector('ul')

    ul.innerHTML = ""

    minhaLista.forEach(tarefa => {

        let elmTarefa = document.createElement('p')
        elmTarefa.innerHTML = tarefa

        const novaLi = document.createElement('li')
        novaLi.classList.add('tarefa')
        
        const imgCheck = document.createElement('img')
        imgCheck.src = "./img/checked.png"

        const imgTrash = document.createElement('img')
        imgTrash.src = "./img/trash.png"

        novaLi.appendChild(imgCheck)
        novaLi.appendChild(elmTarefa)
        novaLi.appendChild(imgTrash)

        ul.appendChild(novaLi)

    })

            // <li class="tarefa">
            //     <img src="./img/checked.png" alt="Check na tarefa">
            //     <p>Tarefa número um</p>
            //     <img src="./img/trash.png" alt="Exclui tarefa">
            // </li>

    console.log(minhaLista)
}

button.addEventListener('click', adicionarNovaTarefa)