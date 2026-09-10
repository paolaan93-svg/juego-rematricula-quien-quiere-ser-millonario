const questions = [
  // --- BLOQUE 1: PROCESOS Y CULTURA GENERAL ---
  { q: "¿En qué categoría de Soporte Servicio buscas sobre convalidación o notas?", options: ["Financiera", "Tecnológica", "Académica", "Habilidades Blandas"], correct: 2 },
  { q: "Cultura Pop: ¿Quién canta 'Despacito' junto a Daddy Yankee?", options: ["Bad Bunny", "Luis Fonsi", "J Balvin", "Maluma"], correct: 1 },
  { q: "Un estudiante necesita certificaciones de estudio. ¿A qué área pertenece?", options: ["Bienestar Universitario", "Administrativa", "Proceso de Grado", "Canales de Pago"], correct: 1 },
  { q: "Cultura Pop: Completa la letra de Shakira: 'Las mujeres ya no lloran, las mujeres...'", options: ["Facturan", "Trabajan", "Cantan", "Bailan"], correct: 0 },
  { q: "¿Cómo se llama la asistente virtual que ayuda en Soporte Servicio USAM?", options: ["Sofía", "MIA", "SAM", "Atenea"], correct: 1 },
  { q: "Geografía: ¿Cuál es la capital de Costa Rica?", options: ["Alajuela", "Cartago", "San José", "Heredia"], correct: 2 },
  { q: "Si un alumno necesita conocer convenios y becas, la categoría correcta es:", options: ["Tecnológica", "Financiera", "Institucional", "Académica"], correct: 1 },
  { q: "Música: ¿Qué grupo canta 'Devuélveme a mi chica' (Sufre mamón)?", options: ["Soda Stereo", "Hombres G", "Enanitos Verdes", "Mana"], correct: 1 },

  // --- BLOQUE 2: HERRAMIENTAS Y RANDOM ---
  { q: "¿Qué aspecto clave se encuentra en la sección de 'Habilidades Blandas'?", options: ["Derechos de grado", "Habilidades comerciales y bienestar emocional", "Cambio de carrera", "Carné institucional"], correct: 1 },
  { q: "Cultura Pop: ¿Qué animal es 'Mickey' de Disney?", options: ["Perro", "Ratón", "Pato", "Gato"], correct: 1 },
  { q: "Un estudiante no accede a las plataformas institucionales. ¿Dónde están las guías?", options: ["Administrativa", "Tecnológica", "Institucional", "Habilidades Blandas"], correct: 1 },
  { q: "Cine: ¿Cómo se llama el ogro verde de DreamWorks?", options: ["Fiona", "Shrek", "Burro", "Lord Farquaad"], correct: 1 },
  { q: "La 'Baja de Carrera' o 'Aplazamiento' se gestiona desde el área:", options: ["Académica", "Financiera", "Administrativa", "Tecnológica"], correct: 2 },
  { q: "Música: Completa: 'Oye, abre tus ojos, mira hacia arriba, disfruta las cosas buenas que...'", options: ["Nos da la vida", "Tiene la vida", "Vienen a la vida", "Sientes en la vida"], correct: 1 },
  { q: "¿Dónde se consulta la información de canales y medios de pago habilitados en USAM?", options: ["Institucional", "Habilidades Blandas", "Tecnológica", "Proceso de Grado"], correct: 0 },

  // --- BLOQUE 3: OPERATIVIDAD Y CULTURA GENERAL ---
  { q: "Random: ¿Cuántos minutos tiene una hora?", options: ["30", "45", "60", "90"], correct: 2 },
  { q: "Dentro del módulo Académico, además de registro y notas, ¿qué más se contempla?", options: ["Acreditación, docentes y cambios académicos", "Descuentos comerciales", "Actualización de carné", "Manejo del estrés"], correct: 0 },
  { q: "Música: ¿A qué banda pertenece la canción 'La Incondicional'?", options: ["Chayanne", "Luis Miguel", "Marc Anthony", "Alejandro Fernández"], correct: 1 },
  { q: "Diferencia principal entre las secciones Financiera y Administrativa en Matrícula:", options: ["Financiera cubre becas/aranceles; Administrativa cubre bajas y certificaciones", "Financiera maneja cambio de carrera; Administrativa los pagos", "Son idénticas", "Administrativa es solo para docentes"], correct: 0 },
  { q: "Cultura General: ¿Cuál es el océano más grande del planeta?", options: ["Atlántico", "Índico", "Pacífico", "Ártico"], correct: 2 },
  { q: "Información sobre Bienestar Universitario para actividades extracurriculares está en:", options: ["Académica", "Institucional", "Habilidades Blandas", "Administrativa"], correct: 1 },
  { q: "Música: Completa: 'Bebé, ¿qué fue? No que muy...'", options: ["Tranquilo", "Soltero", "Tragadito", "Olvidado"], correct: 2 },

  // --- BLOQUE 4: ESTRATEGIA COMERCIAL Y RANDOM ---
  { q: "Para guiar a un estudiante en cambio de carrera y ajuste financiero necesitas:", options: ["Tecnológica y Habilidades Blandas", "Académica y Financiera", "Institucional y Tecnológica", "Únicamente Administrativa"], correct: 1 },
  { q: "Random: ¿Cuál es el planeta más cercano al Sol?", options: ["Venus", "Marte", "Mercurio", "Júpiter"], correct: 2 },
  { q: "Para mejorar técnicas de cierre y manejo de objeciones emocionales se usa:", options: ["Habilidades Blandas", "Financiera", "Institucional", "SharePoint"], correct: 0 },
  { q: "Música: 'Amor prohibido murmuran por las calles...' ¿Quién la interpretaba?", options: ["Gloria Estefan", "Selena Quintanilla", "Thalía", "Paulina Rubio"], correct: 1 },
  { q: "Para formalizar pago y revisar oferta de materias en una sola llamada consultas:", options: ["Financiera y Académica", "Administrativa y Tecnológica", "Institucional y Habilidades Blandas", "Solo a MIA"], correct: 0 },
  { q: "Gastronomía: ¿De qué país es originaria la pizza?", options: ["España", "Grecia", "Italia", "Francia"], correct: 2 },
  { q: "Flujo recomendado para garantizar la retención y rematricula efectiva:", options: ["Enviar al estudiante solo", "Identificar categoría, guiar el trámite y aplicar Habilidades Blandas", "Transferir a MIA", "Enfocarse solo en cobro"], correct: 1 },

  // --- BLOQUE 5: NIVEL MAESTRÍA Y FINAL ---
  { q: "Música: 'Tusa' es una famosa colaboración entre Karol G y...", options: ["Nicki Minaj", "Rosalía", "Becky G", "Anitta"], correct: 0 },
  { q: "¿En qué apartado consultaría un alumno cómo tramitar su carné estudiantil?", options: ["Administrativa", "Institucional", "Tecnológica", "Académica"], correct: 0 },
  { q: "Cultura Pop: ¿Cómo se llama el superhéroe con traje rojo y azul que lanza telarañas?", options: ["Batman", "Superman", "Spider-Man", "Iron Man"], correct: 2 },
  { q: "Si un alumno solicita devoluciones de dinero de matrícula, ¿a qué categoría pertenece?", options: ["Administrativa", "Financiera", "Académica", "Institucional"], correct: 1 },
  { q: "Música: Completa la canción: 'Y cómo es él, ¿en qué lugar se enamoró de ti?...'", options: ["¿A qué dedica el tiempo libre?", "¿Dónde te conoció?", "¿Por qué se fue?", "¿A dónde fue contigo?"], correct: 0 },
  { q: "Si necesitas revisar procesos de graduación de un estudiante, consultas en:", options: ["Administrativa", "Académica", "Financiera", "Institucional"], correct: 1 },
  { q: "Random: ¿En qué año llegó el hombre a la Luna por primera vez?", options: ["1965", "1969", "1972", "1980"], correct: 1 },
  { q: "Si un estudiante no sabe navegar en el Campus Virtual, acudes a la categoría:", options: ["Tecnológica", "Académica", "Institucional", "Administrativa"], correct: 0 },
  { q: "Música: 'Provócame' y 'Torero' son éxitos del artista:", options: ["Ricky Martin", "Chayanne", "Enrique Iglesias", "David Bisbal"], correct: 1 },
  { q: "Al integrar todo el portal Soporte Servicio, el objetivo principal del equipo es:", options: ["Resolver rápido y colgar", "Cerrar la llamada", "Dar solución integral y asesoría empática", "Transferir casos"], correct: 2 },
  { q: "🏆 GRAN PREGUNTA FINAL: ¿Qué garantiza el éxito en la gestión de rematrícula?", options: ["El cobro rápido", "Dominar la información técnica y conectar humanamente con el estudiante", "Solo contestar las dudas sencillas", "Enviar la guía PDF"], correct: 1 }
];

// 40 Escalas de premios/puntos para mostrar en la barra lateral
const prizes = [
  "$100", "$200", "$300", "$400", "$500", "$600", "$700", "$800", "$900", "$1.000 (Seguro)",
  "$2.000", "$3.000", "$4.000", "$5.000", "$6.000", "$7.000", "$8.000", "$9.000", "$10.000", "$15.000 (Seguro)",
  "$20.000", "$25.000", "$30.000", "$35.000", "$40.000", "$45.000", "$50.000", "$60.000", "$70.000", "$80.000 (Seguro)",
  "$90.000", "$100.000", "$150.000", "$200.000", "$300.000", "$400.000", "$500.000", "$700.000", "$850.000", "$1.000.000"
];

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
    li.innerHTML = `<span>P${index + 1}</span> <span>${prize}</span>`;
    if (index === 9 || index === 19 || index === 29 || index === 39) li.classList.add("safe");
    ladderList.appendChild(li);
  });
}

function loadQuestion() {
  if (currentQuestion >= questions.length) {
    alert("¡FELICITACIONES! Han completado las 40 preguntas y ganado el $1.000.000.");
    return;
  }
  
  prizes.forEach((_, idx) => {
    const el = document.getElementById(`prize-${idx}`);
    if (el) el.classList.remove("active");
  });
  
  const currentEl = document.getElementById(`prize-${currentQuestion}`);
  if (currentEl) {
    currentEl.classList.add("active");
    currentEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

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
    alert("¡Respuesta Correcta!");
    currentQuestion++;
    loadQuestion();
  } else {
    alert(`Incorrecto. La respuesta correcta era: ${q.options[q.correct]}`);
    // En lugar de reiniciar a cero si se equivoca, avanza o mantiene según prefieras
    currentQuestion++; 
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
    alert(`El experto sugiere que la opción correcta es: ${q.options[q.correct]}`);
    document.getElementById("btn-expert").disabled = true;
  } else if (type === 'audience') {
    alert(`El público vota mayoritariamente por la opción: ${q.options[q.correct]}`);
    document.getElementById("btn-audience").disabled = true;
  }
}

window.onload = initGame;
