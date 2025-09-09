let nome = prompt("digite seu nome:")
let idade = prompt("digite sua idade:")

if(nome === "admim"){
    alert("Bem-vindo, Admin! Acesso total liberado.")
}else if(nome === "moderador" && idade >=16){
    alert("Olá, Moderador! Acesso liberado para a área de moderação. ")
}else if(idade >=18){
    alert(`Olá,${nome}!Voce tem acesso completo. Boas-vindas àrea de moderação` )
}else if(idade =13 && idade <=17){
    alert("Acesso negado. Voce pode participar do nosso programa Jovem Aprendiz!")
}else{
    alert("Acesso negado. O conteúdo é exclusivo para maiors de 18 anos")
}
