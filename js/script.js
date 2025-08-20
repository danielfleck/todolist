const button = document.querySelector('.button-add-tarefa')

const input = document.querySelector('.input-tarefa')

let minhaLista = []

function adicionarNovaTarefa() {
    minhaLista.push(
        { tarefa: input.value , concluida: false }
    )

    mostrarTarefas()

}

function concluirTarefa(e) {

    const li = e.target.parentElement
    
    const posicao = e.target.parentElement.posicao

    minhaLista[li.posicao].concluida = !minhaLista[li.posicao].concluida    

    mostrarTarefas() 
}

function deletarItem(e) {
    minhaLista.splice(e.target.parentElement.posicao,1)

    mostrarTarefas() 
}

function mostrarTarefas() {

    const ul = document.querySelector('ul')

    ul.innerHTML = ""

    minhaLista.forEach( (tarefa, posicao) => {

        let elmTarefa = document.createElement('p')
        elmTarefa.innerHTML = tarefa.tarefa


        const novaLi = document.createElement('li')
        novaLi.classList.add('tarefa')
        novaLi.posicao = posicao
        
        const imgCheck = document.createElement('img')
        imgCheck.src = "./img/checked.png"
        imgCheck.addEventListener('click', concluirTarefa)
        
        const imgTrash = document.createElement('img')
        imgTrash.src = "./img/trash.png"
        imgTrash.addEventListener('click', deletarItem)

        novaLi.appendChild(imgCheck)
        novaLi.appendChild(elmTarefa)
        novaLi.appendChild(imgTrash)


        if(tarefa.concluida) {
            novaLi.classList.add('tarefa-concluida')   
        } else {
            novaLi.classList.remove('tarefa-concluida') 
        }

        ul.appendChild(novaLi)

    })

}

button.addEventListener('click', adicionarNovaTarefa)