const quotes = [
  {
    quote: "Todo lo puedo en Cristo que me fortalece.",
    cita: "Flipenses 4:13",
    bg: "url('./assets/mar.webp')",
  },
  {
    quote:
      "Entra en tu aposento, y a puerta cerrada, ora a tu Padre que está en lo secreto; y tu Padre que ve en lo secreto, te lo recompensará en público.",
    cita: "Mateo 6:6",
    bg: "url('./assets/fondo1.jpg')",
  },
  {
    quote:
      "Por que si perdonais a los hombres sus ofensas, os perdonará también a vosotros vuestro Padre celestial.",
    cita: "Mateo 6:14",
    bg: "url('./assets/fondo2.jpg')",
  },
  {
    quote:
      "Mirando a cara descubierta como en un espejo la gloria del Señor, vamos siendo transformados de gloria en gloria.",
    cita: "2 Corintion 3:18",
    bg: "url('./assets/fondo3.jpg')",
  },
  {
    quote:
      "Por que esta leve tribulación momentánea nos produce, en una medida que sobrepasa toda medida, un eterno peso de gloria.",
    cita: "2 Corinrios 3:17",
    bg: "url('./assets/fondo4.jpg')",
  },
  {
    quote:
      "Si tú de mañana buscas a Dios; Si eres limpio y recto, Él velará por ti, y aunque tu principio haya sido pequeño, tu postrer estado será muy grande.",
    cita: "Job 8:5",
    bg: "url('./assets/fondo5.jpg')",
  },
  {
    quote: "En las palmas de las manos te llevo tatuado; afirma Jehová.",
    cita: "Isaias 49:16",
    bg: "url('./assets/fondo6.jpg')",
  },
];
const randomSelection = () => {
  let claves = Object.keys(quotes);
  claves = claves.length - 1;

  let quote = Math.round(Math.random() * claves);
  console.log(quote);
  let randomQuote = quotes[quote];
  return randomQuote;
};
const addFirstQuote = () => {
  const firstQuote = document.getElementById("text");
  let quote = randomSelection();
  firstQuote.innerHTML = quote.quote;
  const author = document.getElementById("author");
  author.innerHTML = quote.cita;
  let imagen = document.getElementById("container-fluid");
  imagen.style.backgroundImage = quote.bg;
};
const newQuoteButton = () => {
  const newQuote = document.getElementById("new-quote");
  newQuote.addEventListener("click", addFirstQuote);
};

window.addEventListener("load", () => {
  randomSelection();
  addFirstQuote();
  newQuoteButton();
});
