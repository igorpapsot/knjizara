function ocitajIzmenu(){

    xhr.open('GET', link + 'knjige.json');
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            knjige = JSON.parse(xhr.responseText);
            
            var a = new URLSearchParams(window.location.search)
            var id = a.get('id')
            var knjiga = knjige[id];             
            izmena(knjiga, id)      
        }
    };
  
  }
  
  
  function izmena(knjiga, id){
    
    var kontejner = document.getElementById("izmena_kontejner")
  
    var placeholderDiv = document.createElement("div")
    placeholderDiv.classList.add("col-md-6")
    var placeholderTekst = document.createElement("h2")
    placeholderTekst.textContent = 'Autor: '
  
    placeholderDiv.appendChild(placeholderTekst)
    kontejner.appendChild(placeholderDiv)
    
    var inputDiv= document.createElement("div")
    inputDiv.classList.add("col-md-6")
    var input = document.createElement("input")
    input.value = knjiga['autor']
    input.style.width = "100%"
    inputDiv.appendChild(input)
  
    kontejner.appendChild(inputDiv)
    
    var kontejner = document.getElementById("izmena_kontejner")
  
    var placeholderDiv = document.createElement("div")
    placeholderDiv.classList.add("col-md-6")
    var placeholderTekst = document.createElement("h2")
    placeholderTekst.textContent = 'Broj Stranica: '
  
    placeholderDiv.appendChild(placeholderTekst)
    kontejner.appendChild(placeholderDiv)
    
    var inputDiv= document.createElement("div")
    inputDiv.classList.add("col-md-6")
    var input = document.createElement("input")
    input.value = knjiga['brojStranica']
    input.style.width = "100%"
    inputDiv.appendChild(input)
  
    kontejner.appendChild(inputDiv)
  
    var kontejner = document.getElementById("izmena_kontejner")
  
    var placeholderDiv = document.createElement("div")
    placeholderDiv.classList.add("col-md-6")
    var placeholderTekst = document.createElement("h2")
    placeholderTekst.textContent = 'Cena: '
  
    placeholderDiv.appendChild(placeholderTekst)
    kontejner.appendChild(placeholderDiv)
    
    var inputDiv= document.createElement("div")
    inputDiv.classList.add("col-md-6")
    var input = document.createElement("input")
    input.value = knjiga['cena']
    input.style.width = "100%"
    inputDiv.appendChild(input)
  
    kontejner.appendChild(inputDiv)
  
    
    var kontejner = document.getElementById("izmena_kontejner")
  
    var placeholderDiv = document.createElement("div")
    placeholderDiv.classList.add("col-md-6")
    var placeholderTekst = document.createElement("h2")
    placeholderTekst.textContent = 'ISBN: '
  
    placeholderDiv.appendChild(placeholderTekst)
    kontejner.appendChild(placeholderDiv)
    
    var inputDiv= document.createElement("div")
    inputDiv.classList.add("col-md-6")
    var input = document.createElement("input")
    input.value = knjiga['isbn']
    input.style.width = "100%"
    inputDiv.appendChild(input)
  
    kontejner.appendChild(inputDiv)


    var kontejner = document.getElementById("izmena_kontejner")
  
    var placeholderDiv = document.createElement("div")
    placeholderDiv.classList.add("col-md-6")
    var placeholderTekst = document.createElement("h2")
    placeholderTekst.textContent = 'Jezik: '
  
    placeholderDiv.appendChild(placeholderTekst)
    kontejner.appendChild(placeholderDiv)
    
    var inputDiv= document.createElement("div")
    inputDiv.classList.add("col-md-6")
    var input = document.createElement("input")
    input.value = knjiga['jezik']
    input.style.width = "100%"
    inputDiv.appendChild(input)
  
    kontejner.appendChild(inputDiv)

    var kontejner = document.getElementById("izmena_kontejner")
  
    var placeholderDiv = document.createElement("div")
    placeholderDiv.classList.add("col-md-6")
    var placeholderTekst = document.createElement("h2")
    placeholderTekst.textContent = 'Naziv: '
  
    placeholderDiv.appendChild(placeholderTekst)
    kontejner.appendChild(placeholderDiv)
    
    var inputDiv= document.createElement("div")
    inputDiv.classList.add("col-md-6")
    var input = document.createElement("input")
    input.value = knjiga['naziv']
    input.style.width = "100%"
    inputDiv.appendChild(input)
  
    kontejner.appendChild(inputDiv)

    var kontejner = document.getElementById("izmena_kontejner")
  
    var placeholderDiv = document.createElement("div")
    placeholderDiv.classList.add("col-md-6")
    var placeholderTekst = document.createElement("h2")
    placeholderTekst.textContent = 'Ocena: '
  
    placeholderDiv.appendChild(placeholderTekst)
    kontejner.appendChild(placeholderDiv)
    
    var inputDiv= document.createElement("div")
    inputDiv.classList.add("col-md-6")
    var input = document.createElement("input")
    input.value = knjiga['ocena']
    input.style.width = "100%"
    inputDiv.appendChild(input)
  
    kontejner.appendChild(inputDiv)
    
    var kontejner = document.getElementById("izmena_kontejner")
  
    var placeholderDiv = document.createElement("div")
    placeholderDiv.classList.add("col-md-6")
    var placeholderTekst = document.createElement("h2")
    placeholderTekst.textContent = 'Pismo: '
  
    placeholderDiv.appendChild(placeholderTekst)
    kontejner.appendChild(placeholderDiv)
    
    var inputDiv= document.createElement("div")
    inputDiv.classList.add("col-md-6")
    var input = document.createElement("input")
    input.value = knjiga['pismo']
    input.style.width = "100%"
    inputDiv.appendChild(input)
  
    kontejner.appendChild(inputDiv)


    var kontejner = document.getElementById("izmena_kontejner")
  
    var placeholderDiv = document.createElement("div")
    placeholderDiv.classList.add("col-md-6")
    var placeholderTekst = document.createElement("h2")
    placeholderTekst.textContent = 'Tip poveza: '
  
    placeholderDiv.appendChild(placeholderTekst)
    kontejner.appendChild(placeholderDiv)
    
    var inputDiv= document.createElement("div")
    inputDiv.classList.add("col-md-6")
    var input = document.createElement("input")
    input.value = knjiga['tipPoveza']
    input.style.width = "100%"
    inputDiv.appendChild(input)
  
    kontejner.appendChild(inputDiv)

    var kontejner = document.getElementById("izmena_kontejner")
  
    var placeholderDiv = document.createElement("div")
    placeholderDiv.classList.add("col-md-6")
    var placeholderTekst = document.createElement("h2")
    placeholderTekst.textContent = 'Godina izdavanja: '
  
    placeholderDiv.appendChild(placeholderTekst)
    kontejner.appendChild(placeholderDiv)
    
    var inputDiv= document.createElement("div")
    inputDiv.classList.add("col-md-6")
    var input = document.createElement("input")
    input.value = knjiga['godinaIzdavanja']
    input.style.width = "100%"
    inputDiv.appendChild(input)
  
    kontejner.appendChild(inputDiv)

    var kontejner = document.getElementById("izmena_kontejner")
  
    var placeholderDiv = document.createElement("div")
    placeholderDiv.classList.add("col-md-6")
    var placeholderTekst = document.createElement("h2")
    placeholderTekst.textContent = 'Izdavacka kuca: '
  
    placeholderDiv.appendChild(placeholderTekst)
    kontejner.appendChild(placeholderDiv)
    
    var inputDiv= document.createElement("div")
    inputDiv.classList.add("col-md-6")
    var input = document.createElement("input")
    input.value = knjiga['izdavackaKuca']
    input.style.width = "100%"
    inputDiv.appendChild(input)
  
    kontejner.appendChild(inputDiv)
  };

  function uradiIzmenu(e){
    e.preventDefault()
    alert("Uspesna izmena")
    return false
  }