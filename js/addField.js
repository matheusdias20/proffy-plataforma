// Procurar o Botão
document.querySelector("#add-time")

// Quando Clicar no Botão
.addEventListener("click", cloneField)

// Executar uma Ação
function cloneField(){
    
    // Duplicar os Campos. Quais Campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Limpar os Campos. Que Campos?
    const fields = newFieldContainer.querySelectorAll("input")

    // Para cada Campos, Limpar eles
    fields.forEach(function(field){
        field.value = ""
    })
    
    // Colocar na Página: Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)


}

