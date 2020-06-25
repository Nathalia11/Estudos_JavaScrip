var idade = prompt("Qual sua iade"); //o comando prompt vai faer uma pergunta/ exibir uma pergunta para o usuario

var idade = 18;
if(idade>=18){
    alert("Maior de idade");
    }else{
        alert("Menor de idade");
    };



var count = 5;
while(count<5){       //Estrutura de reptição
    console.log(count);
    count = count + 1;
};



var count;     //Tambem é uma estrutura de reptição
for (count=0; count<=5; count++){
    alert(count);
};



var d = new Date(); //Mostra data é hora atual
alert(d);

var d = new Date ();
alert(d.getMonth()); //mostra o mês
alert(d.getDay()); //mostra o dia
