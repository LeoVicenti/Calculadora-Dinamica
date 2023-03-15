const numeroUm = document.querySelector("#n1");
const numeroDois = document.querySelector("#n2");
const seletor = document.querySelector("#op");
/*const calc = document.querySelector("#calcular") 
removendo para o exercicio de calculo automatico*/ 
let resultado = document.querySelector("#resultado");

seletor.addEventListener("click", calcular);
numeroUm.addEventListener("keyup", calcular);
numeroDois.addEventListener("keyup", calcular);
    function calcular(){
        
        /*A BAIXO CODIGO PARA CALCULO COM BOTAO, COM MENSAGEM DE ERRO CASO NAO TENHAM COLOCADO DOIS NMERO
        if(numeroUm.value==='' || numeroDois.value===''){
            resultado.classList.add("problema")
            resultado.innerHTML="para algum resultado, Por Favor, preencha todos os campos";
            setTimeout(()=>{ setando um tempo
                resultado.classList.remove("problema"); usando classlist.remove para remover o problema
                resultado.innerHTML="tente novamente "
            },3000);/*comando funciona em mili segundos, 3mil =3s*/
        if(numeroUm != "" && numeroDois != ""){
            const valor1 = parseInt(numeroUm.value);
            const valor2 = parseInt(numeroDois.value);
            const operacao = seletor.value
            if(operacao==="soma +")
                resultado.innerHTML= valor1 + valor2;
            if(operacao==="subtrair -")
                resultado.innerHTML= valor1 - valor2;
            if(operacao==="divisao /")
                resultado.innerHTML= valor1 / valor2;
            if(operacao==="multiplicacao *")
                resultado.innerHTML= valor1 * valor2;
            if(operacao==="porcentagem %")
                resultado.innerHTML= valor2 / 100 * valor1;
                
        
        if(numeroUm.value === '' || numeroDois.value === ''){
            resultado.classList.add("problema")
            resultado.innerHTML="para algum resultado, Por Favor, preencha todos os campos";
        }
    }
}     
          
    
   