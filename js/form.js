
const botaoAdicionar=document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",e=>{
    e.preventDefault();
    const form=document.querySelector("#form-adiciona");
    const paciente=obterPacienteFormulario(form);
    const erros=validaPaciente(paciente);
    
    if(erros.length>0){
        exibeMensagensDeErro(erros);
        return;
    }
    adicionarPacienteNaTabela(paciente);

   form.reset();
   const mensagensErro=document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML="";
});

const obterPacienteFormulario=form=>{
    const paciente={
        nome:form.nome.value,
        peso:form.peso.value,
        altura: form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
};

const montarTr=paciente=>{
    const pacienteTr=document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
};

const montaTd=(dado, classe)=>{
    const td=document.createElement("td");
    td.classList.add(classe);
    td.textContent=dado;

    return td;
};

const validaPaciente=paciente=>{
    const erros=[];

    if(paciente.nome.length==0){
        erros.push("O nome não pode ser em branco");
    }
    if(paciente.gordura.length==0){
        erros.push("A gordura não pode ser em branco");
    }
    if(paciente.peso.length==0){
        erros.push("O peso não pode ser em branco");
    }
    if(paciente.altura.length==0){
        erros.push("A altura não pode ser em branco");
    }
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválido");
    }
    return erros;
}
const exibeMensagensDeErro= erros=>{
    const ul=document.querySelector("#mensagens-erro");
    ul.innerHTML="";

    erros.forEach(erro=>{
        const li=document.createElement("li");
        li.textContent=erro;
        ul.appendChild(li);
    });
}
const adicionarPacienteNaTabela=paciente=>{
const pacienteTr=montarTr(paciente);
const tabela=document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
     
}


