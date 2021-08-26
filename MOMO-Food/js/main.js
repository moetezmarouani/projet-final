document.getElementById("inscription").addEventListener("submit" , function(event){
    event.preventDefault();
    var erreur;
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let email2 = document.getElementById("email2");
    let mdp = document.getElementById("mdp");

    if(document.getElementById("mdp").value==""){
        erreur= "please put your password"
    }
    if(document.getElementById("email2").value==""){
        erreur= "please verify your email"
    }
    if(document.getElementById("email").value==""){
        erreur= "please put your email"
    }
    if(document.getElementById("name").value==""){
        erreur= "please put your name"
    }

    if(erreur) {
        event.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }else {
        alert('form has been sent !')
    }
    
});