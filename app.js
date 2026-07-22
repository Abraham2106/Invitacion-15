const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const openInvitation = document.getElementById('openInvitation');
const hero = document.querySelector('.hero');

openInvitation.addEventListener('click', (event) => {
  if (reduceMotion) return;
  event.preventDefault();
  hero.classList.add('is-departing');
  window.setTimeout(() => {
    document.getElementById('invitacion').scrollIntoView({ behavior: 'smooth' });
  }, 420);
  window.setTimeout(() => hero.classList.remove('is-departing'), 1400);
});

const targetDate = new Date('2026-09-05T16:00:00-06:00').getTime();
const countdownCells = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
};

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateCountdown() {
  const remaining = Math.max(0, targetDate - Date.now());
  countdownCells.days.textContent = pad(Math.floor(remaining / 86400000));
  countdownCells.hours.textContent = pad(Math.floor((remaining % 86400000) / 3600000));
  countdownCells.minutes.textContent = pad(Math.floor((remaining % 3600000) / 60000));
  countdownCells.seconds.textContent = pad(Math.floor((remaining % 60000) / 1000));
}

updateCountdown();
window.setInterval(updateCountdown, 1000);

const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
const playIcon = document.getElementById('playIcon');
const musicProgress = document.getElementById('musicProgress');
const chorusStart = 52;
let hasStarted = false;

function setPlayIcon(isPlaying) {
  playIcon.innerHTML = isPlaying
    ? '<path d="M7 5h4v14H7zm6 0h4v14h-4z" fill="currentColor"/>'
    : '<path d="M8 5v14l11-7z" fill="currentColor"/>';
  playButton.setAttribute(
    'aria-label',
    isPlaying ? 'Pausar Superestrella de Aitana' : 'Reproducir Superestrella de Aitana'
  );
}

async function playSong() {
  if (!hasStarted) {
    if (audio.readyState < 1) {
      const metadataReady = new Promise((resolve) => audio.addEventListener('loadedmetadata', resolve, { once: true }));
      audio.load();
      await metadataReady;
    }
    audio.currentTime = Math.min(chorusStart, audio.duration || chorusStart);
    hasStarted = true;
  }
  await audio.play();
  setPlayIcon(true);
}

playButton.addEventListener('click', async () => {
  if (!audio.paused) {
    audio.pause();
    setPlayIcon(false);
    return;
  }

  try {
    await playSong();
  } catch {
    setPlayIcon(false);
  }
});

audio.addEventListener('timeupdate', () => {
  const progress = audio.duration ? audio.currentTime / audio.duration : 0;
  musicProgress.style.transform = `scaleX(${progress})`;
});

audio.addEventListener('ended', () => {
  hasStarted = false;
  musicProgress.style.transform = 'scaleX(0)';
  setPlayIcon(false);
});

const rsvpButton = document.getElementById('rsvpButton');
const rsvpStatus = document.getElementById('rsvpStatus');

rsvpButton.addEventListener('click', () => {
  const number = rsvpButton.dataset.whatsapp.trim();
  if (!number) {
    rsvpStatus.textContent = 'El número de confirmación se agregará muy pronto.';
    return;
  }

  const message = encodeURIComponent('Confirmo mi asistencia a los XV de Isabella.');
  window.open(`https://wa.me/${number}?text=${message}`, '_blank', 'noopener');
});

if (!reduceMotion && 'IntersectionObserver' in window) {
  const reveals = [...document.querySelectorAll('.reveal')];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  reveals.forEach((element) => observer.observe(element));
  document.documentElement.classList.add('motion-ready');
}
