<!DOCTYPE html>
<html lang="pt br">
    <head>
        <title>Minha página</title>
        <meta charset="utf 8">
        <script type="text/javascript" src="js/main.js"></script>
     <head>
     <body>
                <button type="button" onclick="clicou()">Clique aqui</button>
                <h3>id="agradecimento"</h3>  
                <p>id="Paragrafo"</p>
                <p id="agradecimento" onclick="redirecionar()"></p>  
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
    window.location.href = "url da pagina";
}
