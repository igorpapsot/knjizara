function login(e){
    e.preventDefault()
    xhr.open('GET', link + 'korisnici.json');
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            korisnici = JSON.parse(xhr.responseText);
            console.log(korisnici);
            var username = document.getElementById("txtUsername").value
            var password = document.getElementById("txtPassword").value
            var errorPolje = document.getElementById("login_greska")
            
            for(var id in korisnici){
                
                var korisnik = korisnici[id];
                console.log(korisnik)
                
                if (username == korisnik['username'] && password == korisnik['password']){
                    errorPolje.textContent = "Uspešno prijavljivanje"
                    return
                }
                
                errorPolje.textContent = "Neuspešna prijava. Proverite korisničko ime i lozinku"

                return false
            }
                
            
        }
        
    };
}


function register(e){

  e.preventDefault()

  var username = document.getElementById("register_username").value
  var password = document.getElementById("register_password").value
  var email = document.getElementById("email").value
  var errorPolje = document.getElementById("register_greska")
  var brojTelefona = document.getElementById("Br").value

  xhr.open('GET', link + 'korisnici.json');
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            korisnici = JSON.parse(xhr.responseText);
             
            for(var id in korisnici){
                
                var korisnik = korisnici[id];
                if (korisnik['username'] == username){
                    errorPolje.textContent = "Već postoji korisnik sa tim korisničkim imenom"
                    return
                  }
                  if (korisnik['email'] == email){
                    errorPolje.textContent = "Već postoji korisnik registrovan sa unetim mejlom"
                    return
                  }
                  
            }
                
            
        }
        
    };

  var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regexEmail.test(String(email).toLowerCase())){
    errorPolje.textContent = "Unesite ispravnu mejl adresu"
    return
  }

  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  if (!passwordRegex.test(password)){
    errorPolje.textContent = "Lozinka koju ste uneli ne zadovoljava sigurnosne standarde"
    return
  }

  var phoneRegex = /^\+?(\d){7,14}$/
  if (!phoneRegex.test(brojTelefona)){
    errorPolje.textContent = "Unesite ispravan broj telefona"
    return
  }

  errorPolje.textContent = "Uspešna registracija"
  
  return false

}

function ucitajKorisnike(){
  xhr.open('GET', link + 'korisnici.json');
  xhr.send();
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200){
          korisnici = JSON.parse(xhr.responseText);
          var userDiv = document.getElementById("korisnici") 
          for(var id in korisnici){
              
            var korisnik = korisnici[id];
            userDiv.appendChild(napraviKarticuKorisnika(korisnik, id))   
          }
              
          
      }
      
  };
}

function napraviKarticuKorisnika(korisnik, id){

  var kartica = document.createElement("div")
  kartica.classList.add("card")
  kartica.classList.add("col-12")
  kartica.classList.add("korisnik_kartica")

  var no_guttersDiv = document.createElement("div")
  no_guttersDiv.classList.add("row")
  no_guttersDiv.classList.add("no-gutters")
  kartica.appendChild(no_guttersDiv)

  var ikonicaDiv = document.createElement("div")
  ikonicaDiv.classList.add("col-md-4")

  var ikonica = document.createElement("img")
  ikonica.src = "ikonica2.png"
  ikonica.classList.add("card-img")
  ikonica.classList.add("ikonica")
  ikonicaDiv.appendChild(ikonica)
  no_guttersDiv.appendChild(ikonicaDiv)

  var divTekst = document.createElement("div")
  divTekst.classList.add("col-md-8")

  var divBody = document.createElement("div")
  divBody.classList.add("card-body")
  divTekst.appendChild(divBody)

  var h5;

  h5 = document.createElement("h5")
  h5.classList.add("card-text")
  h5.textContent = korisnik['ime'] + " " + korisnik['prezime']
  divBody.appendChild(h5)


  h5 = document.createElement("h5")
  h5.classList.add("card-text")
  h5.textContent = korisnik['email']
  divBody.appendChild(h5)

  h5 = document.createElement("h5")
  h5.classList.add("card-text")
  h5.textContent = korisnik['username']
  divBody.appendChild(h5)

  h5 = document.createElement("h5")
  h5.classList.add("card-text")
  h5.textContent = korisnik['password']
  divBody.appendChild(h5)

  h5 = document.createElement("h5")
  h5.classList.add("card-text")
  h5.textContent = korisnik['datumRodjenja']
  divBody.appendChild(h5)

  h5 = document.createElement("h5")
  h5.classList.add("card-text")
  h5.textContent = korisnik['adresa']
  divBody.appendChild(h5)

  h5 = document.createElement("h5")
  h5.classList.add("card-text")
  h5.textContent = korisnik['telefon']
  divBody.appendChild(h5)

  var link = document.createElement("a")
  link.href = "izmenaKorisnik.html?grupa=korisnici&id=" + id
  divTekst.appendChild(link)

  var dugme = document.createElement("button")
  dugme.classList.add("dugme_izmeni")
  dugme.textContent = "Izmeni"
  link.appendChild(dugme)
  no_guttersDiv.appendChild(divTekst)
  return kartica 
}
