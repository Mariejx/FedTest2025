

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



// Comparison slider functionality
const divider = document.querySelector('.divider');
const goodImg = document.querySelector('.good');

let isDragging = false;

divider.addEventListener('mousedown', (e) => {
  isDragging = true;
  document.body.style.cursor = 'ew-resize';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const container = document.querySelector('.compare-container');
  const rect = container.getBoundingClientRect();
  let x = e.clientX - rect.left;
  x = Math.max(0, Math.min(x, rect.width));
  const percentage = (x / rect.width) * 100;
  divider.style.left = percentage + '%';
  goodImg.style.width = percentage + '%';
  const goodLabel = document.querySelector('.good-label');
  goodLabel.style.right = (percentage / 2) + '%';
  goodLabel.style.top = percentage > 50 ? '90%' : '10%';
  const badLabel = document.querySelector('.bad-label');
  badLabel.style.top = percentage < 50 ? '90%' : '10%';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = 'default';
});

// Touch support
divider.addEventListener('touchstart', (e) => {
  isDragging = true;
});

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const container = document.querySelector('.compare-container');
  const rect = container.getBoundingClientRect();
  let x = e.touches[0].clientX - rect.left;
  x = Math.max(0, Math.min(x, rect.width));
  const percentage = (x / rect.width) * 100;
  divider.style.left = percentage + '%';
  goodImg.style.width = percentage + '%';
  const goodLabel = document.querySelector('.good-label');
  goodLabel.style.right = (percentage / 2) + '%';
  goodLabel.style.top = percentage > 50 ? '90%' : '10%';
  const badLabel = document.querySelector('.bad-label');
  badLabel.style.top = percentage < 50 ? '90%' : '10%';
});

document.addEventListener('touchend', () => {
  isDragging = false;
});


//ANNOUCOUMENT//

const announcements = document.querySelectorAll('.announcement');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

function showAnnouncement(index) {
  announcements.forEach((el, i) => {
    el.classList.remove('active');
    if (i === index) el.classList.add('active');
  });
}

function nextAnnouncement() {
  currentIndex = (currentIndex + 1) % announcements.length;
  showAnnouncement(currentIndex);
}

function prevAnnouncement() {
  currentIndex = (currentIndex - 1 + announcements.length) % announcements.length;
  showAnnouncement(currentIndex);
}

// Event listeners voor de pijltjes
nextBtn.addEventListener('click', nextAnnouncement);
prevBtn.addEventListener('click', prevAnnouncement);

// Automatisch wisselen elke 5 seconden
setInterval(nextAnnouncement, 5000);

//https://gemini.google.com/share/28ef546ad769//




// FOOTER SUB//

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('yoishoForm');
  const manager = document.getElementById('newsletterManager');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Voorkomt dat de pagina herlaadt
      
      // Voeg de class toe die de CSS-wissel triggert
      manager.classList.add('is-sent');
    });
  }
});