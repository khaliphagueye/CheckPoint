var body = document.querySelector('body')
var p = document.createElement('p');
var btn = document.createElement('input');
btn.setAttribute('type', 'button');
body.appendChild(p)
body.appendChild(btn);
p.innerHTML ="Veuillez choisir un nombre dans votre tete";
btn.value = 'Next'
var som = 0
var nbrOp = 2
var indice = 0
    btn.addEventListener('click', function(e) {
       if (indice < nbrOp) {
        var x = Math.floor(Math.random()*10)
        p.innerHTML='Ajouter '+x+ ' à ce nombre'
        btn.value = 'Valider'
        som+=x
       } else if(indice==nbrOp){
        p.innerHTML='retire le premier nombre de la somme'
       }
       else{
        p.innerHTML='le nombre que tu as est '
        btn.value = som
       }
       indice++;
       

    })


