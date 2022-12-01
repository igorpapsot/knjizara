function ocitajIzmenu(){

    xhr.open('GET', link + 'korisnici.json');
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            korisnici = JSON.parse(xhr.responseText);
            
            var a = new URLSearchParams(window.location.search)
            var id = a.get('id')
            var korisnik = korisnici[id];             
            izmena(korisnik, id)      
        }
    };
  
  }

function izmena(korisnik, id){

var kontejner = document.getElementById("izmena_kontejner")

var placeholderDiv = document.createElement("div")
placeholderDiv.classList.add("col-md-6")
var placeholderTekst = document.createElement("h2")
placeholderTekst.textContent = 'Adresa: '

placeholderDiv.appendChild(placeholderTekst)
kontejner.appendChild(placeholderDiv)

var inputDiv= document.createElement("div")
inputDiv.classList.add("col-md-6")
var input = document.createElement("input")
input.value = korisnik['adresa']
input.style.width = "100%"
inputDiv.appendChild(input)

kontejner.appendChild(inputDiv)


var kontejner = document.getElementById("izmena_kontejner")

var placeholderDiv = document.createElement("div")
placeholderDiv.classList.add("col-md-6")
var placeholderTekst = document.createElement("h2")
placeholderTekst.textContent = 'Datum rodjenja: '

placeholderDiv.appendChild(placeholderTekst)
kontejner.appendChild(placeholderDiv)

var inputDiv= document.createElement("div")
inputDiv.classList.add("col-md-6")
var input = document.createElement("input")
input.value = korisnik['datumRodjenja']
input.style.width = "100%"
inputDiv.appendChild(input)

kontejner.appendChild(inputDiv)


var kontejner = document.getElementById("izmena_kontejner")

var placeholderDiv = document.createElement("div")
placeholderDiv.classList.add("col-md-6")
var placeholderTekst = document.createElement("h2")
placeholderTekst.textContent = 'Email: '

placeholderDiv.appendChild(placeholderTekst)
kontejner.appendChild(placeholderDiv)

var inputDiv= document.createElement("div")
inputDiv.classList.add("col-md-6")
var input = document.createElement("input")
input.value = korisnik['email']
input.style.width = "100%"
inputDiv.appendChild(input)

kontejner.appendChild(inputDiv)


var kontejner = document.getElementById("izmena_kontejner")

var placeholderDiv = document.createElement("div")
placeholderDiv.classList.add("col-md-6")
var placeholderTekst = document.createElement("h2")
placeholderTekst.textContent = 'Ime: '

placeholderDiv.appendChild(placeholderTekst)
kontejner.appendChild(placeholderDiv)

var inputDiv= document.createElement("div")
inputDiv.classList.add("col-md-6")
var input = document.createElement("input")
input.value = korisnik['ime']
input.style.width = "100%"
inputDiv.appendChild(input)

kontejner.appendChild(inputDiv)


var kontejner = document.getElementById("izmena_kontejner")

var placeholderDiv = document.createElement("div")
placeholderDiv.classList.add("col-md-6")
var placeholderTekst = document.createElement("h2")
placeholderTekst.textContent = 'Password: '

placeholderDiv.appendChild(placeholderTekst)
kontejner.appendChild(placeholderDiv)

var inputDiv= document.createElement("div")
inputDiv.classList.add("col-md-6")
var input = document.createElement("input")
input.value = korisnik['password']
input.style.width = "100%"
inputDiv.appendChild(input)

kontejner.appendChild(inputDiv)


var kontejner = document.getElementById("izmena_kontejner")

var placeholderDiv = document.createElement("div")
placeholderDiv.classList.add("col-md-6")
var placeholderTekst = document.createElement("h2")
placeholderTekst.textContent = 'Prezime: '

placeholderDiv.appendChild(placeholderTekst)
kontejner.appendChild(placeholderDiv)

var inputDiv= document.createElement("div")
inputDiv.classList.add("col-md-6")
var input = document.createElement("input")
input.value = korisnik['prezime']
input.style.width = "100%"
inputDiv.appendChild(input)

kontejner.appendChild(inputDiv)


var kontejner = document.getElementById("izmena_kontejner")

var placeholderDiv = document.createElement("div")
placeholderDiv.classList.add("col-md-6")
var placeholderTekst = document.createElement("h2")
placeholderTekst.textContent = 'Telefon: '

placeholderDiv.appendChild(placeholderTekst)
kontejner.appendChild(placeholderDiv)

var inputDiv= document.createElement("div")
inputDiv.classList.add("col-md-6")
var input = document.createElement("input")
input.value = korisnik['telefon']
input.style.width = "100%"
inputDiv.appendChild(input)

kontejner.appendChild(inputDiv)


var kontejner = document.getElementById("izmena_kontejner")

var placeholderDiv = document.createElement("div")
placeholderDiv.classList.add("col-md-6")
var placeholderTekst = document.createElement("h2")
placeholderTekst.textContent = 'Username: '

placeholderDiv.appendChild(placeholderTekst)
kontejner.appendChild(placeholderDiv)

var inputDiv= document.createElement("div")
inputDiv.classList.add("col-md-6")
var input = document.createElement("input")
input.value = korisnik['username']
input.style.width = "100%"
inputDiv.appendChild(input)

kontejner.appendChild(inputDiv)
}

function uradiIzmenu(e){
    e.preventDefault()
    alert("Uspesna izmena")
    return false
  }