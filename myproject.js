document.addEventListener("DOMContentLoaded", function () {

  /* === ТЁМНАЯ ТЕМА (сохранение) === */
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  const themeBtn = document.getElementById("theme-toggle");

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");

      if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });

      // === Sleep XP — мини-игра ===

  const xpValue = document.getElementById("xp-value");
  const xpBtn = document.getElementById("xp-btn");
  let xp = 0;

  if (xpBtn && xpValue) {
    xpBtn.addEventListener("click", function () {
      xp += 5; // каждый клик +5
      xpValue.textContent = xp;
    });
  }
document.addEventListener("DOMContentLoaded", function () {
  // тёмная тема
  // советы
  // таймер
});
  // === ПУЗЫРЬКИ СПОКОЙСТВИЯ ===
  const bubblesArea = document.getElementById("bubbles-area");

  if (bubblesArea) {
    bubblesArea.addEventListener("click", function (event) {
      const areaRect = bubblesArea.getBoundingClientRect();

      // создаём несколько пузырьков за один клик
      for (let i = 0; i < 5; i++) {
        const bubble = document.createElement("span");
        bubble.classList.add("bubble");

        // случайная позиция по горизонтали
        const randomLeft = Math.random() * 100;
        bubble.style.left = randomLeft + "%";

        // случайная задержка анимации
        const delay = Math.random() * 0.5;
        bubble.style.animationDelay = delay + "s";

        bubblesArea.appendChild(bubble);

        // убираем пузырёк после анимации
        setTimeout(function () {
          bubble.remove();
        }, 2500);
      }
    });
  }

  // === ПРОВЕРКА УСТАЛОСТИ ===
  const tiredText = document.getElementById("tired-text");
  const tiredButtons = document.querySelectorAll(".tired-btn");

  if (tiredText && tiredButtons.length > 0) {
    tiredButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const level = btn.getAttribute("data-tired");

        if (level === "high") {
          tiredText.textContent = " Пожалуйста, отдохни и будь к себе мягче 💜";
        } else if (level === "medium") {
          tiredText.textContent = "Глоток воды, пару вдохов — и ты справишься 🌸";
        } else {
          tiredText.textContent = "Горжусь тобой. Не забывай и про отдых 😼";
        }
      });
    });
  }

  // === СЛУЧАЙНЫЙ ЗВУК ПРИРОДЫ ===
  const soundText = document.getElementById("sound-text");
  const soundBtn = document.getElementById("sound-btn");

  const sounds = [
    "Лесной дождь 🌧 — шум капель и листьев",
    "Ночной океан 🌊 — волны и далёкий ветер",
    "Лес днём 🍃 — птицы и тихий шелест ветра",
    "Костёр у палатки 🔥 — треск дров и уют",
    "Космический шум ✨ — мягкий белый шум"
  ];

  if (soundBtn && soundText) {
    soundBtn.addEventListener("click", function () {
      const index = Math.floor(Math.random() * sounds.length);
      soundText.textContent = sounds[index];
    
    });
  }
  // === МЕДИТАЦИЯ ДНЯ НА СТРАНИЦЕ КОНТЕНТ ===
  const meditationDayText = document.getElementById("meditation-day-text");
  const meditationDayBtn = document.getElementById("meditation-day-btn");

  const meditationsList = [
    "Мягкое засыпание — 10 минут спокойного дыхания и расслабления тела.",
    "Сканирование тела — поочередно расслабляем каждую часть тела.",
    "Океан снов — визуализация волн и ночного неба.",
    "Отпуск тревоги — практика на отпускание навязчивых мыслей.",
    "Тёплый свет — представляешь мягкий свет, окутывающий тебя перед сном."
  ];

  if (meditationDayBtn && meditationDayText) {
    meditationDayBtn.addEventListener("click", function () {
      const index = Math.floor(Math.random() * meditationsList.length);
      meditationDayText.textContent = meditationsList[index];
    });
  }
 
  }


  /* === СОВЕТ ПЕРЕД СНОМ === */

  const sleepTips = [
    "Сделай глубокий вдох и медленный выдох.",
    "Отложи телефон хотя бы на 10 минут.",
    "Сконцентрируйся на звуках вокруг.",
    "Посчитай в уме от 20 до 0.",
    "Напомни себе: всё хорошо, ты в безопасности.",
    "Расслабь плечи и шею.",
    "Представь тёплый мягкий свет вокруг себя."
  ];

  const tipText = document.getElementById("sleep-tip-text");
  const tipBtn = document.getElementById("sleep-tip-btn");

  if (tipBtn && tipText) {
    tipBtn.addEventListener("click", function () {
      const index = Math.floor(Math.random() * sleepTips.length);
      tipText.textContent = sleepTips[index];
    });
  }


  /* === ТАЙМЕР 10 СЕКУНД === */

  let timer = null;
  let time = 10;

  const timerValue = document.getElementById("timer-value");
  const timerText = document.getElementById("timer-text");
  const startBtn = document.getElementById("timer-start-btn");

  if (startBtn && timerValue && timerText) {
    startBtn.addEventListener("click", function () {
      if (timer !== null) return; // защита от повторного запуска

      time = 10;
      timerValue.textContent = time;
      timerText.textContent = "Дышим спокойно...";

      timer = setInterval(function () {
        time--;
        timerValue.textContent = time;

        if (time <= 0) {
          clearInterval(timer);
          timer = null;
          timerText.textContent = "Отличная работа 💜";
        }
      }, 1000);
    });
  }

});


