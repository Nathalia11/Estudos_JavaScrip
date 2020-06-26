<!DOCTYPE html>
<html lang="pt br">
    <head>
        <title>Minha página</title>
        <meta charset="utf 8">
        <script type="text/javascript" src="js/main.js"></script>
     <head>
     <body onload="load()"> 
                <button type="button" onclick="clicou()">Clique aqui</button>
                <h3>id="agradecimento"</h3>  
                <p>id="Paragrafo"</p>
                <p id="agradecimento" onclick="redirecionar()"></p>
                <p id="mousemove" onmouseover="trocar(this)">Passe o mouse aqui</p>
                <select onchange="funcaoChange(this)">
                    <option value="1">Valor 1</option>
                    <option value="2">Valor 2</option>
                    <option value="3">Valor 3</option>
                </select>
     </body>     
</html>   







//Manipulando elementos da Página
function clicou(){
    alert("Obrigado por clicar");
}



function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("agradecimento"));

}



function redirecionar(){
    window.open("escreva a url do site que vc quer redirecionar");
    window.location.href = "url da pagina"; //na mesma janela
}



function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";//passa o mouse e o texto troca
    //alert("trocar texto");//passar o mouse encima do texto e aparece mensagem
}



function load(){
    alert("pagina carregada");
}



function funcaoChange(elemento){
    console.log(elemento.valuer); //botão com opções de escolha
}  
