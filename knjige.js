const link = "https://knjizara-ef8fe-default-rtdb.firebaseio.com/";
const xhr = new XMLHttpRequest();

function ucitajKnjige(){
    xhr.open('GET', link + 'knjige.json');
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            knjige = JSON.parse(xhr.responseText);
            console.log(knjige);
            
            for(var id in knjige){
                
              var knjiga = knjige[id];
              knjigeDiv = document.getElementById("knjige");
              knjigeDiv.appendChild(napraviKarticu(knjiga,id));
                    
            }
                
            
        }
        
    };
}


function napraviKarticu(knjiga, id){

    var container = document.createElement("div");
    container.classList.add("col-md-6");
    container.classList.add("col-lg-3");

    var kartica = document.createElement("div");
    kartica.classList.add("card");
    kartica.classList.add("kartica");

    var link = document.createElement("a");
    link.href = "knjiga.html?id=" + id;

    var h3 = document.createElement("h3");
    h3.classList.add("card-title");
    if(knjiga['naziv'].length > 16){
        h3.classList.add("manji_tekst");
    }
    h3.textContent = knjiga['naziv'];
    link.appendChild(h3);

    var h4 = document.createElement("h4");
    h4.classList.add("card-title");
    h4.textContent = knjiga['autor'];
    link.appendChild(h4);

    var img = document.createElement("img");
    img.classList.add("slika");
    img.src = knjiga['slika'];
    link.appendChild(img);

    var mini_container = document.createElement("div");
    mini_container.classList.add("container");

    var row = document.createElement("div");
    row.classList.add("row");

    var cena = document.createElement("div");
    cena.classList.add("col-6");

    var p_cena = document.createElement("p");
    p_cena.classList.add("cena");
    p_cena.textContent = knjiga['cena'] + 'rsd';
    cena.appendChild(p_cena);
    row.appendChild(cena);
    

    mini_container.appendChild(row);
    link.appendChild(mini_container);
    kartica.appendChild(link);
    
    var dugme = document.createElement("button");
    dugme.classList.add("dugme_kupi")
    dugme.classList.add("col");
    dugme.textContent = "Kupi"
    dugme.onclick = () => {
        var korpa = ucitajKorpu()

        if (korpa.includes(id)){
        if (confirm("Da li ste sigurni da zelite da uklonite knjigu iz korpe?")){
            dugme.style.background = null
            dugme.textContent = "Kupi"
            ukloniIzKorpe(id)
        }
        }
        else{
        dodajUKorpu(id)
        dugme.style.background = "#00FF00"
        dugme.textContent = "U korpi"
        }
    }
    var div = document.createElement("div")
    div.classList.add("row")

    kartica.appendChild(div);
    div.appendChild(dugme)
    container.appendChild(kartica);

    var korpa = ucitajKorpu()

    if (korpa.includes(id)){
        dugme.style.background = "#00FF00"
        dugme.textContent = "U korpi"
    }

    var ocena = document.createElement("div");
    ocena.classList.add("col");
    var niz = []
    for(let i = 0;i < 5; i++){
      var zvezda = document.createElement("span")
      zvezda.classList.add("fa")
      zvezda.classList.add("fa-star")             
      ocena.appendChild(zvezda)
      niz.push(zvezda)
      if (i < knjiga['ocena']){
        zvezda.classList.add("obojeno")
      }
      zvezda.onmouseenter = function(){
        for(let j = 0;j < 5; j++){
          if (j <= i){
            niz[j].classList.add("obojeno")
          }else{
            niz[j].classList.remove("obojeno")
          }
        }
      }
      zvezda.onmouseleave = function(){
        for(let j = 0;j < 5; j++){
          if (j < knjiga['ocena']){
            niz[j].classList.add("obojeno")
          }else{
            niz[j].classList.remove("obojeno")
          }
        
        }
      }
      zvezda.onclick = function(){
        knjiga['ocena'] = i + 1
      }
    }

    div.appendChild(ocena)

    return container
}

function ucitajKorpu(){
  if (window.localStorage["korpa"]){
    return window.localStorage["korpa"].split(",")
  }
  return []
}

function dodajUKorpu(id){
  var korpa = ucitajKorpu()
  korpa.push(id)
  window.localStorage["korpa"] = [...new Set(korpa)]; //Niz će se automatski pretvoriti u string
}

function ukloniIzKorpe(id){
  var korpa = ucitajKorpu()
  var index = korpa.indexOf(id);
  if (index > -1) {
    korpa.splice(index, 1);
  }
  window.localStorage["korpa"] = korpa
}

function popuniKorpu(){
  var korpa = ucitajKorpu()
  var kontejner = document.getElementById("korpa_knjige")
  var ukupnaCena = 0

  xhr.open('GET', link + 'knjige.json');
  xhr.send();
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200){
          knjige = JSON.parse(xhr.responseText);
          console.log(knjige);
          
          for(var id of korpa){
                
            var knjiga = knjige[id];
            kontejner.appendChild(napraviKarticuKnjigeZaKorpu(knjiga))
            ukupnaCena += knjiga['cena']
            document.getElementById("ukupna_cena").textContent = "Cena: " + ukupnaCena + " rsd"   
                
          }
      }
      
  }; 
    
}

function napraviKarticuKnjigeZaKorpu(knjiga){
  var kartica = document.createElement("div")
  kartica.classList.add("card")
  kartica.classList.add("col-md-4")
  kartica.classList.add("korpa_kartica")

  var no_guttersDiv = document.createElement("div")
  no_guttersDiv.classList.add("row")
  no_guttersDiv.classList.add("no-gutters")
  kartica.appendChild(no_guttersDiv)

  var slika = document.createElement("img")
  slika.src = knjiga['slika']
  slika.classList.add("card-img");
  slika.classList.add("korpa_slika");

  var slikaDiv = document.createElement("div")
  slikaDiv.classList.add("col-md-4")
  slikaDiv.appendChild(slika)

  no_guttersDiv.appendChild(slikaDiv);

  var maliDiv = document.createElement("div");
  maliDiv.classList.add("col-md-8");
  no_guttersDiv.appendChild(maliDiv);

  var bodyDiv = document.createElement("div");
  bodyDiv.classList.add("card-body")
  maliDiv.appendChild(bodyDiv)

  var h5 = document.createElement("h5")
  h5.classList.add("card-title")
  bodyDiv.appendChild(h5)

  var p;

  p = document.createElement("p")
  p.classList.add("card-text")
  p.textContent = knjiga['naziv']
  bodyDiv.appendChild(p)

  p = document.createElement("p")
  p.classList.add("card-text")
  p.textContent = knjiga['autor']
  bodyDiv.appendChild(p)

  p = document.createElement("p")
  p.classList.add("card-text")
  p.textContent = "Ocena: " + knjiga['ocena']
  bodyDiv.appendChild(p)

  p = document.createElement("p")
  p.classList.add("card-text")

  var ocenaBold = document.createElement("b")
  ocenaBold.textContent = knjiga['cena']
  p.appendChild(ocenaBold)

  bodyDiv.appendChild(p)

  return kartica;
}

function ucitajKnjigu(){
  var a = new URLSearchParams(window.location.search)
  var id = a.get('id')
  xhr.open('GET', link + 'knjige.json');
  xhr.send();
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200){
          knjige = JSON.parse(xhr.responseText);
          console.log(knjige);
          
          for(id in knjige){
              var a = new URLSearchParams(window.location.search)
              var id = a.get('id')
              var knjiga = knjige[id];             
              prikaziJednuKnjigu(knjiga, id)
                  
          }             
          
      }
      
  };
}


function prikaziJednuKnjigu(knjiga, id){

  document.getElementById("slika").src = knjiga['slika']
  document.getElementById("naziv").textContent = knjiga['naziv']
  document.getElementById("autor").textContent = knjiga['autor']
  document.getElementById("ocena").textContent = "Ocena: " + knjiga['ocena']
  document.getElementById("cena").textContent = knjiga['cena'] + " rsd"
  document.getElementById("isbn").textContent = knjiga['isbn']
  document.getElementById("brojStranica").textContent = knjiga['brojStranica']
  document.getElementById("godinaIzdavanja").textContent = knjiga['godinaIzdavanja']
  document.getElementById("izdavackaKuca").textContent = knjiga['izdavacKuca']
  document.getElementById("jezik").textContent = knjiga['jezik']
  document.getElementById("opis").textContent = knjiga['opis']
  document.getElementById("pismo").textContent = knjiga['pismo']
  document.getElementById("tipPoveza").textContent = knjiga['tipPoveza']

  var dugme = document.getElementById("dodaj_u_korpu_dugme")
  var korpa = ucitajKorpu()

  if (!korpa.includes(id)){
    dugme.style.background = null
    dugme.textContent = "Dodaj u korpu"
  }
  else{
    dugme.style.background = "#00FF00"
    dugme.textContent = "U korpi"
  }
  dugme.onclick = () => {
    var korpa = ucitajKorpu()

    if (korpa.includes(id)){
      if (confirm("Da li ste sigurni da zelite da uklonite knjigu iz korpe?")){
        dugme.style.background = null
        dugme.textContent = "Dodaj u korpu"
        ukloniIzKorpe(id)
      }
    }
    else{
      dodajUKorpu(id)
      dugme.style.background = "#00FF00"
      dugme.textContent = "U korpi"
    }
  }

  var izmeniDugme = document.getElementById("izmeni_knjigu")
  izmeniDugme.onclick = () => {
    window.location.href = window.location.href.replace("knjiga.html", "izmena.html") + "&grupa=knjige"

  }

}

