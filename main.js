//Button d'affichage formulaire
let ajouter = document.querySelector("#ajouter");
let form = document.getElementById("form");
let supBut= document.getElementById("supprimer") ;
supBut.style.display="none"
function formDispaly(){
    form.style.display = "none";
}
ajouter.addEventListener("click",()=>{
    if(form.style.display=="none"){
    ajouter.innerText = "Cacher" 
    form.style.display="block";
    supBut.style.display = "inline"

    }
    else{
    supBut.style.display = "none"

    ajouter.innerText = "Ajouter" 
    form.style.display="none"
    }
})
//Verifions les donnees viendront du formulaire 
let store = [];
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",()=>{
    let code = document.getElementById("code").value ;
    let titre = document.getElementById("titre").value ;
    let description = document.getElementById("description").value ;
    let prix = document.getElementById("prix").value ;
    let categorie = document.getElementById("categorie").value ;
    let i = 0 ;
    if(code=="" || titre=="" || description=="" || prix=="" || categorie==""){
        i++;
        document.getElementById("msg").style.color="red" ;
        document.getElementById("msg").innerText="Verifier vos donnees";
    }else{
        document.getElementById("msg").classList.add("text-success")
        document.getElementById("msg").classList.add('text-center')
        document.getElementById("msg").innerText="Ajoute avec succes !";
    }
    let exist = store.find(p=>p.code==code);
    if(!exist){
        i++;
        let produit = {code,titre,description,prix,categorie} ;
        store.push(produit);
        console.log(store)
        afficherListe(produit)
    }else{
        document.getElementById("msg").style.color="red" ;
        document.getElementById("msg").innerText="Existe deja produit avec ce Code";
    }
})
document.getElementById("annuler").addEventListener("click",()=>{
    form.style.display="none";
})
function afficherListe(p){
    let table =document.getElementById("table");
    let tr = document.createElement("tr");
    tr.style.cursor="pointer";
    tr.addEventListener("click",function(){
        if(this.classList!="bg-success text-light"){
            this.classList.add("bg-success","text-light")
        }else{
            this.classList.remove("bg-success","text-light");


        }
    })
    let code = document.createElement("td");
    let titre = document.createElement("td");
    let description = document.createElement("td");
    let prix = document.createElement("td");
    let categorie = document.createElement("td");
    store.forEach(e => {
        console.log(e.code);
        code.innerText=e.code ;
        titre.innerText=e.titre ;
        description.innerText=e.description ;
        prix.innerText=e.prix ;
        categorie.innerText=e.categorie ;
        tr.appendChild(code);
        tr.appendChild(titre);
        tr.appendChild(description);
        tr.appendChild(prix);
        tr.appendChild(categorie);
        table.appendChild(tr)
    });
    document.querySelector("#supprimer").addEventListener("click",()=>{
        for(row of table.children){
            if(row.classList=="bg-success text-light"){
                let code = row.childNodes[0].innerText ;
                    store=store.filter(p=>p.code!=code) ;
                    row.remove()
        }
    }})
}
document.getElementById("vider").addEventListener("click",()=>{
    document.getElementById("code").value = ""
    document.getElementById("titre").value = ""
    document.getElementById("description").value = ""
    document.getElementById("prix").value = ""
    document.getElementById("categorie").value = ""
})
