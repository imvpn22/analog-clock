const deg = 6;
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

setClock = () => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(setClock, 1000);

setLightMode = () => {
  document.documentElement.style.setProperty('--main-bg-color', '#fff');
  document.documentElement.style.setProperty('--main-text-color', '#888');
};

setDarkMode = () => {
  document.documentElement.style.setProperty('--main-bg-color', '#1e1f26');
  document.documentElement.style.setProperty('--main-text-color', '#ccc');
};

const switchModeBtn = document.querySelector('.switch-btn');
switchModeBtn.addEventListener('click', () => {
  if (switchModeBtn.textContent.toLowerCase() === 'dark') {
    switchModeBtn.textContent = 'light';
    setDarkMode();
  } else {
    switchModeBtn.textContent = 'dark';
    setLightMode();
  }
});
