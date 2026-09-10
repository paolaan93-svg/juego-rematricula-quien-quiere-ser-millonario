const questions = [
  { q: "¿En qué categoría del portal Soporte Servicio debes buscar sobre convalidación, registro de materias o notas?", options: ["Financiera", "Tecnológica", "Académica", "Habilidades Blandas"], correct: 2 },
  { q: "Un estudiante requiere certificaciones de estudio y constancias. ¿A qué área pertenece este trámite?", options: ["Bienestar Universitario", "Administrativa", "Proceso de Grado", "Canales de Pago"], correct: 1 },
  { q: "¿Cómo se llama la asistente virtual que ayuda a responder consultas de Soporte Servicio en USAM?", options: ["Sofía", "MIA", "SAM", "Atenea"], correct: 1 },
  { q: "Si un alumno necesita conocer convenios, becas y aranceles, la categoría correcta a revisar es:", options: ["Tecnológica", "Financiera", "Institucional", "Académica"], correct: 1 },
  { q: "¿Qué aspecto clave se encuentra clasificado bajo la sección de 'Habilidades Blandas'?", options: ["Pago de derechos de grado", "Habilidades comerciales y bienestar emocional", "Solicitud de cambio de carrera", "Descarga del carné"], correct: 1 },
  { q: "Un estudiante no puede acceder a las plataformas institucionales. ¿Qué categoría contiene las guías?", options: ["Administrativa", "Tecnológica", "Institucional", "Habilidades Blandas"], correct: 1 },
  { q: "La 'Baja de Carrera' o 'Aplazamiento de Cuatrimestre' se gestiona desde el área:", options: ["Académica", "Financiera", "Administrativa", "Tecnológica"], correct: 2 },
  { q: "¿Dónde se consulta la información de canales y medios de pago habilitados por USAM?", options: ["Institucional", "Habilidades Blandas", "Tecnológica", "Proceso de Grado"], correct: 0 },
  { q: "Dentro del módulo Académico, además de registro de materias y notas, ¿qué más se contempla?", options: ["Acreditación, docentes y cambios académicos", "Descuentos por convenios", "Actualización de datos", "Talleres de estrés"], correct: 0 },
  { q: "¿Diferencia principal entre las secciones Financiera y Administrativa respecto a Matrícula?", options: ["Financiera cubre becas/aranceles; Administrativa cubre bajas y certificaciones", "Financiera maneja cambio de carrera; Administrativa los pagos", "Son exactamente lo mismo", "Administrativa es solo para docentes"], correct: 0 },
  { q: "Información sobre Bienestar Universitario para actividades extracurriculares está en:", options: ["Académica", "Institucional", "Habilidades Blandas", "Administrativa"], correct: 1 },
  { q: "Para guiar a un estudiante en cambio de carrera y ajuste financiero necesitas:", options: ["Tecnológica y Habilidades Blandas", "Académica y Financiera", "Institucional y Tecnológica", "Únicamente Administrativa"], correct: 1 },
  { q: "Para mejorar técnicas de cierre y manejo de objeciones emocionales del estudiante se usa:", options: ["Habilidades Blandas", "Financiera", "Institucional", "SharePoint de Registro"], correct: 0 },
  { q: "Para formalizar pago y revisar oferta de materias en una sola llamada consultas:", options: ["Financiera y Académica", "Administrativa y Tecnológica", "Institucional y Habilidades Blandas", "Solo a MIA"], correct: 0 },
  { q: "¿Flujo recomendado para garantizar la retención y rematricula efectiva?", options: ["Enviar al estudiante a buscar solo", "Identificar categoría, guiar el trámite y aplicar Habilidades Blandas", "Transferir inmediatamente a MIA", "Enfocarse solo en el cobro financiero"], correct: 1 }
];

const prizes = ["$100", "$200", "$300", "$500", "$1.000", "$2.000", "$4.000", "$8.000", "$16.000", "$32.000", "$64.000", "$125.000", "$250.000", "$500.000", "$1.000.000"];

let currentQuestion = 0;

function initGame() {
  renderLadder();
  loadQuestion();
}

function renderLadder() {
  const ladderList = document.getElementById("ladder-list");
  ladderList.innerHTML = "";
  prizes.forEach((prize, index) => {
    const li = document.createElement("li");
    li.id = `prize-${index}`;
    li.innerHTML = `<span>Pregunta ${index + 1}</span> <span>${prize}</span>`;
    if (index === 4 || index === 9 || index === 14) li.classList.add("safe");
    ladderList.appendChild(li);
  });
}

function loadQuestion() {
  if (currentQuestion >= questions.length) {
    alert("¡FELICITACIONES! Has alcanzado el $1.000.000 de Puntos de Experto.");
    return;
  }
  
  // Actualizar indicador en escala
  prizes.forEach((_, idx) => {
    const el = document.getElementById(`prize-${idx}`);
    if (el) el.classList.remove("active");
  });
  document.getElementById(`prize-${currentQuestion}`).classList.add("active");

  const q = questions[currentQuestion];
  document.getElementById("question-text").innerText = `${currentQuestion + 1}. ${q.q}`;
  
  const btns = document.querySelectorAll(".answers-grid .btn");
  btns.forEach((btn, i) => {
    btn.style.display = "block";
    document.getElementById(`opt${i}`).innerText = q.options[i];
  });
}

function selectAnswer(index) {
  const q = questions[currentQuestion];
  if (index === q.correct) {
    alert("¡Correcto!");
    currentQuestion++;
    loadQuestion();
  } else {
    alert(`Incorrecto. La respuesta correcta era: ${q.options[q.correct]}`);
    currentQuestion = 0; // Reinicia el juego
    loadQuestion();
  }
}

function useLifeline(type) {
  const q = questions[currentQuestion];
  if (type === '5050') {
    let removed = 0;
    const btns = document.querySelectorAll(".answers-grid .btn");
    btns.forEach((btn, i) => {
      if (i !== q.correct && removed < 2) {
        btn.style.display = "none";
        removed++;
      }
    });
    document.getElementById("btn-5050").disabled = true;
  } else if (type === 'expert') {
    alert(`El experto sugiere que la respuesta correcta es: ${q.options[q.correct]}`);
    document.getElementById("btn-expert").disabled = true;
  } else if (type === 'audience') {
    alert(`El 80% del público opina que la respuesta correcta es la opción: ${q.options[q.correct]}`);
    document.getElementById("btn-audience").disabled = true;
  }
}

window.onload = initGame;
