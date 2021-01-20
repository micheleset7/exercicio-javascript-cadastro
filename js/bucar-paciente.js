const botao=document.querySelector("#buscar-paciente");

botao.addEventListener("click", e=>{
    e.preventDefault();
    const xhr=new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", ()=>{

        const erroAjax=document.querySelector("#erro-ajax");
        if(xhr.status==200){
            erroAjax.classList.add("invisivel");
            const resposta=xhr.responseText;
            const pacientes=JSON.parse(resposta);

            pacientes.forEach(item=>{
                adicionarPacienteNaTabela(item);
            });
        }else{
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();
})
