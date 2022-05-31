var texto = document.getElementById('texto');
var lista = document.getElementById('lista');
var bt = document.getElementsByTagName("button")[0];

function inserir(){
    if(texto.value != ''){
        var element = document.createElement("p");
        element.innerHTML = "<input type='checkbox' class='checkbox'><span>"+texto.value+"</span>";
        lista.append(element);
        texto.value = '';
    }else{
        alert("Por favor, digite alguma tarefa antes de inserir.");
    }
}

bt.addEventListener('click', inserir, false);