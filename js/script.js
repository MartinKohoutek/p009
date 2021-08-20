
function spocitej() {
    
    pocet = document.forms["vstupneForm"]["pocet"].value
    if (pocet > 3) pocet *= 0.7
    sezona = document.forms["vstupneForm"]["sezona"].value
    fakulta1 = document.getElementById("fakulta1")
    fakulta2 = document.getElementById("fakulta2")
    fakulta3 = document.getElementById("fakulta3")
    fakulta4 = document.getElementById("fakulta4")
    let fakulty = 0
    if (fakulta1.checked) fakulty += 100
    if (fakulta2.checked) fakulty += 100
    if (fakulta3.checked) fakulty += 100
    if (fakulta4.checked) fakulty += 100
    
    zobrazVysledek = document.getElementsByClassName('cena')
    zobrazVysledek[0].innerHTML = (pocet * fakulty * sezona/100) + ' Kč';
    
}

//  spocitej()