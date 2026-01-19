

// 1. Selecteer de knoppen voor de homepage EN de tweede pagina
const openBtn = document.querySelector('.menu-open-btn, .menu-open-btndark');
const closeBtn = document.querySelector('.menu-close-btn, .menu-close-btndark');
const navMenu = document.querySelector('.nav-menu');

// 2. Functie om het menu te openen
if (openBtn) {
  openBtn.addEventListener('click', () => {
    navMenu.classList.add('toonMenu');
    // Optioneel: voorkom scrollen van de achtergrond als menu open is
    document.body.style.overflow = 'hidden';
  });
}

// 3. Functie om het menu te sluiten
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('toonMenu');
    // Zet scrollen weer aan
    document.body.style.overflow = 'auto';
  });
}

// 4. Sluit het menu als je op een link klikt (handig voor mobiel)
const menuLinks = document.querySelectorAll('.menu-links a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('toonMenu');
    document.body.style.overflow = 'auto';
  });
});



