const legacyCourses = [
  ["calc", "CB0664", "Cálculo Fundamental", 1, 4, 64, []],
  ["fis", "CD0327", "Física Fundamental", 1, 4, 64, []],
  ["intro", "TIxxx1", "Introdução à Engenharia", 1, 2, 32, []],
  ["qui", "CE0846", "Química Geral para Engenharia", 1, 3, 48, []],
  ["fexp", "CD0328", "Física Experimental para Engenharia", 1, 1, 16, []],
  ["prog", "TIxxx2 / CK0108", "Introdução à Programação", 1, 4, 64, []],
  ["draw", "TC0617", "Desenho para Engenharia", 1, 4, 64, []],
  ["calc2", "CB0664", "Cálculo Fundamental", 2, 4, 64, []],
  ["fis2", "CD0327", "Física Fundamental", 2, 4, 64, []],
  ["qui2", "CE0846", "Química Geral para Engenharia", 2, 3, 48, []],
  ["fexp2", "CD0328", "Física Experimental para Engenharia", 2, 1, 16, []],
  ["alg", "CB0665", "Álgebra Linear", 2, 4, 64, []],
  ["ed", "TIxxx3 / CK0X08", "Estrutura de Dados", 2, 4, 64, ["prog"]],
  ["stat", "TIxxx4", "Estatística para Engenharia", 2, 4, 64, []],
  ["cvet", "CB0669", "Cálculo Vetorial Aplicado", 3, 4, 64, ["calc"]],
  ["eletro", "TIxxx6", "Eletromagnetismo Básico", 3, 4, 64, ["calc", "fis"]],
  ["dig", "TIxx44", "Eletrônica Digital", 3, 6, 96, ["prog"]],
  ["circ", "TI0054", "Circuitos Elétricos", 3, 6, 96, ["calc", "alg"]],
  [
    "poo",
    "TIxx41 / CK0112",
    "Programação Orientada a Objetos",
    3,
    4,
    64,
    ["ed"],
  ],
  ["disc", "CBxxxx", "Matemática Discreta", 4, 4, 64, []],
  ["sinais", "TIxx43", "Sinais e Sistemas", 4, 6, 96, ["calc", "alg"]],
  ["celet", "TI0057", "Circuitos Eletrônicos", 4, 6, 96, ["circ"]],
  ["num", "CK0X09", "Métodos Numéricos", 4, 4, 64, ["prog"]],
  ["micro", "TI0051", "Sistemas Microprocessados", 4, 6, 96, ["dig"]],
  ["econ", "TK0143", "Economia para Engenharia I", 5, 4, 64, []],
  ["aa", "CK0X10", "Construção e Análise de Algoritmos", 5, 4, 64, ["ed"]],
  [
    "controle",
    "TIxx10",
    "Introdução aos Sistemas de Controle",
    5,
    4,
    64,
    ["sinais"],
  ],
  ["redes", "TIxx46 / CK0X07", "Redes de Computadores I", 5, 4, 64, ["poo"]],
  ["es1", "TIxx49 / CK0X18", "Engenharia de Software I", 5, 4, 64, ["poo"]],
  ["so1", "TIxx45 / CK0X13", "Sistemas Operacionais I", 5, 4, 64, ["poo"]],
  ["auto", "CK0X11", "Autômatos e Teoria da Computação", 6, 6, 96, ["disc"]],
  ["bd", "CK0X12", "Bancos de Dados I", 6, 4, 64, ["ed"]],
  [
    "pdi",
    "TIxx47",
    "Fundamentos de Processamento Digital de Imagens",
    6,
    4,
    64,
    ["sinais"],
  ],
  ["emb", "TIxx48", "Sistemas Embarcados", 6, 4, 64, ["micro"]],
  ["ia", "TI0077 / CK0X05", "Inteligência Artificial", 6, 4, 64, ["alg"]],
  [
    "dist",
    "TIxx67 / CK0154",
    "Sistemas Distribuídos",
    6,
    4,
    64,
    ["so1", "redes"],
  ],
  ["etica", "TK0218", "Ética e Legislação", 7, 2, 32, []],
  ["adm", "TK0134", "Fundamentos da Administração", 7, 2, 32, []],
  ["opt7", "—", "Optativas ou livres (4 × 4 cr.)", 7, 16, 256, []],
  ["seg", "TD0922", "Higiene Industrial e Segurança do Trabalho", 8, 2, 32, []],
  ["mec", "TE0252", "Fundamentos de Mecânica dos Sólidos", 8, 2, 32, []],
  ["trans", "TD0943", "Fenômenos de Transporte", 8, 4, 64, ["fis", "calc"]],
  ["opt8", "—", "Optativas ou livres (3 × 4 cr.)", 8, 12, 192, []],
  ["amb", "TD0921", "Engenharia Ambiental", 9, 3, 48, ["qui"]],
  [
    "redtec",
    "TIxx40",
    "Redação Técnica e Metodologia Científica",
    9,
    2,
    32,
    [],
  ],
  ["tcc1", "TIxx98", "Trabalho de Conclusão de Curso I", 9, 2, 32, []],
  ["opt9", "—", "Optativas ou livres (2 × 4 cr.)", 9, 8, 128, []],
  ["ac", "—", "Atividades Complementares", 9, 8, 128, []],
  [
    "tcc2",
    "TIx100",
    "Trabalho de Conclusão de Curso II",
    10,
    0,
    96,
    [],
    "Integralização das demais componentes curriculares.",
  ],
  [
    "est",
    "TIxx97",
    "Estágio Supervisionado",
    10,
    0,
    160,
    [],
    "Mínimo de 50% das componentes curriculares e aval da Coordenação quando aplicável.",
  ],
];
const courses = [
  ["calc1", "", "Cálculo Fundamental I", 1, 4, 64, []],
  ["fis1", "", "Fundamentos de Física I", 1, 4, 64, []],
  ["qui", "", "Fundamentos de Química Aplicado à Engenharia", 1, 4, 64, []],
  ["prog", "", "Fundamentos de Programação", 1, 4, 64, []],
  ["intro", "", "Introdução a Engenharia de Computação", 1, 2, 32, []],
  ["graf", "", "Fundamentos e Expressão Gráfica de Projetos", 1, 4, 64, []],
  ["calc2", "", "Cálculo Fundamental II", 2, 4, 64, ["calc1"]],
  ["alg", "", "Álgebra Linear", 2, 4, 64, []],
  ["fis2", "", "Fundamentos de Física II", 2, 4, 64, ["fis1"]],
  ["expfis", "", "Experimentos de Física", 2, 2, 32, []],
  ["fmc", "", "Fundamentos Matemáticos da Computação", 2, 4, 64, []],
  ["poo", "", "Programação Orientada à Objetos", 2, 4, 64, ["prog"]],
  ["calc3", "", "Cálculo Fundamental III", 3, 4, 64, ["calc2"]],
  ["ed", "", "Estrutura de Dados", 3, 4, 64, ["fmc", "prog"]],
  ["eletro", "", "Eletromagnetismo Básico", 3, 4, 64, ["calc2", "fis2"]],
  ["dig", "", "Eletrônica Digital", 3, 6, 96, ["prog"]],
  ["circ", "", "Circuitos Elétricos", 3, 4, 64, ["alg"]],
  [
    "pi1",
    "",
    "Projeto Integrador I: Circuitos Elétricos e Digitais",
    3,
    2,
    32,
    ["alg"],
  ],
  ["aa", "", "Construção e Análise de Algoritmos", 4, 4, 64, ["ed"]],
  ["stat", "", "Estatística para Engenharia", 4, 4, 64, ["calc3"]],
  ["sinais", "", "Sinais e Sistemas", 4, 4, 64, ["calc2", "alg"]],
  ["micro", "", "Microprocessadores", 4, 6, 96, ["dig"]],
  ["celet", "", "Circuitos Eletrônicos", 4, 4, 64, ["circ"]],
  [
    "pi2",
    "",
    "Projeto Integrador II: Circuitos Eletrônicos e Sinais",
    4,
    3,
    48,
    ["pi1"],
  ],
  ["num", "", "Métodos Numéricos", 5, 4, 64, ["prog", "calc1"]],
  ["amb", "", "Engenharia Ambiental", 5, 3, 48, ["qui"]],
  ["redes", "", "Redes de Computadores I", 5, 4, 64, ["prog"]],
  ["es1", "", "Engenharia de Software I", 5, 4, 64, ["poo"]],
  ["controle", "", "Sistemas de Controle", 5, 4, 64, ["sinais"]],
  ["so", "", "Sistemas Operacionais", 5, 4, 64, ["micro"]],
  ["bd", "", "Fundamentos de Banco de Dados", 6, 4, 64, ["prog"]],
  ["robot", "", "Introdução a Robótica", 6, 4, 64, ["controle"]],
  ["ia", "", "Inteligência Computacional Aplicada", 6, 4, 64, ["alg"]],
  [
    "pdi",
    "",
    "Introdução ao Processamento Digital de Imagens",
    6,
    4,
    64,
    ["sinais"],
  ],
  [
    "hidro",
    "",
    "Acionamento e Controle Hidráulico e Pneumático",
    6,
    4,
    64,
    ["calc2", "fis2"],
  ],
  ["adm", "", "Fundamentos de Administração e Economia", 6, 2, 32, ["intro"]],
  ["pi3", "", "Projeto Integrador III", 7, 4, 64, ["pi2"]],
  ["pi4", "", "Projeto Integrador IV", 8, 4, 64, ["pi3"]],
  ["redacao", "", "Redação Científica", 9, 4, 64, ["pi4"]],
  ["pfc1", "", "Projeto Final de Curso I", 9, 4, 64, ["pi4"]],
  [
    "est",
    "",
    "Estágio Supervisionado",
    10,
    0,
    160,
    ["bd", "robot", "ia", "pdi", "hidro", "adm"],
  ],
  ["pfc2", "", "Projeto Final de Curso II", 10, 4, 64, ["pfc1"]],
  [
    "ac",
    "",
    "Atividades Complementares",
    "continuous",
    0,
    136,
    [],
    "Componente contínuo: pode ser realizado ao longo do curso.",
  ],
  [
    "ext",
    "",
    "Unidade Curricular Especial de Extensão",
    "continuous",
    0,
    264,
    [],
    "Componente contínuo: pode ser realizado ao longo do curso.",
  ],
];
const optatives = [
  ["Equações Diferenciais", 64],
  ["Sensores e Atuadores", 64],
  ["Introdução à Robótica", 64],
  ["Sistemas Eletrônicos Digitais Reconfiguráveis", 64],
  ["Introdução aos Circuitos Integrados", 64],
  ["Projetos de Circuitos Integrados", 64],
  ["Eletrotécnica", 32],
  ["Laboratório de Eletrotécnica", 32],
  ["Sistemas Operacionais II", 64],
  ["Processos Estocásticos", 64],
  ["Sistemas de Tempo Real", 64],
  ["Redes de Computadores II", 64],
  ["Computação Móvel", 64],
  ["Gestão de Projetos / Gerência de Projetos de Software", 64],
  ["Gestão da Inovação Tecnológica", 64],
  ["Controle de Tempo Real por Computador", 64],
  ["Introdução ao Reconhecimento de Padrões", 64],
  ["Modelagem e Controle de Robôs Móveis", 64],
  ["Redes Industriais", 64],
  ["Sistemas Inteligentes em Controle e Automação de Processos", 64],
  ["Modelagem e Identificação de Sistemas", 64],
  [
    "Desenvolvimento de Aplicações Web / Desenvolvimento de Software para Web",
    64,
  ],
  ["Engenharia de Software II", 64],
  [
    "Análise de Desempenho de Redes e Sistemas de Computação / Modelagem Analítica e Avaliação de Desempenho de Sistemas de Computação",
    64,
  ],
  ["Laboratório de Processamento Digital de Sinais", 32],
  ["Aquisição de Biossinais", 64],
  ["Processamento Digital de Sinais", 64],
  ["Introdução à Visão Computacional", 64],
  ["Fundamentos de Computação Gráfica / Computação Gráfica I", 64],
  ["Análise e Classificação de Formas", 64],
  ["Algoritmos em Grafos", 64],
  ["Introdução à Lógica Matemática", 96],
  ["Lógica Aplicada", 96],
  ["Teoria dos Grafos", 64],
  ["Processamento de Linguagem Natural", 64],
  ["Criptografia", 64],
  ["Linguagens de Programação I", 96],
  ["Sistemas de Gerenciamento de Bancos de Dados", 96],
  ["Computação Gráfica II", 64],
  ["Computação de Alto Desempenho", 64],
  ["Mineração de Dados", 64],
  ["Análise e Projeto de Sistemas Orientados a Objetos", 64],
  ["Visualização Científica", 64],
  ["Realidade Virtual", 64],
  ["Construção de Compiladores I", 96],
  ["Validação, Verificação e Teste de Software", 64],
  ["Padrões de Projeto de Software", 64],
  ["Qualidade de Software", 64],
  ["Gerenciamento de Redes", 64],
  ["Redes de Alta Velocidade", 64],
  ["Auditoria e Segurança da Informação", 64],
  ["Métodos Numéricos II", 64],
  ["Tópicos e Projetos em Engenharia de Computação I", 64],
  ["Tópicos e Projetos em Engenharia de Computação II", 64],
  ["Empreendedor em Informática", 64],
  ["Língua Brasileira de Sinais - LIBRAS", 64],
  ["Relações Étnico-Raciais e Africanidades", 64],
  ["Educação Ambiental", 32],
  ["Educação em Direitos Humanos", 64],
];
const baseCourseIds = new Set(courses.map((c) => c[0]));
let selectedOptatives = JSON.parse(
  localStorage.getItem("ecUfcSelectedOptatives") || "[]",
);
selectedOptatives.forEach((item) =>
  courses.push([
    item.id,
    "",
    item.name,
    item.semester,
    item.hours / 16,
    item.hours,
    [],
  ]),
);
const byId = Object.fromEntries(courses.map((c) => [c[0], c])),
  done = new Set(JSON.parse(localStorage.getItem("ecUfcDone") || "[]")),
  continuousHours = JSON.parse(
    localStorage.getItem("ecUfcContinuousHours") || "{}",
  );
let previewFadeIds = new Set();
const defaultSemesters = Object.fromEntries(courses.map((c) => [c[0], c[3]])),
  defaultSemesterOrder = courses
    .filter((c) => c[3] !== "continuous")
    .reduce((result, c) => (result[c[3]] ??= []).push(c[0]) && result, {}),
  savedSemesters = JSON.parse(
    localStorage.getItem("ecUfcSemesterLayout") || "{}",
  );
courses.forEach((c) => {
  if (Number.isInteger(savedSemesters[c[0]]) && savedSemesters[c[0]] > 0)
    c[3] = savedSemesters[c[0]];
});
let semesterCount = Math.max(
    10,
    Number(localStorage.getItem("ecUfcSemesterCount") || 10),
  ),
  draggedCourseId = null,
  touchDragTimer = null,
  touchDragStarted = false,
  touchStartPoint = null,
  touchDragSource = null,
  touchDragPoint = null,
  touchAutoScrollDirection = 0,
  touchAutoScrollTimer = null,
  ignoreCourseClickUntil = 0,
  semesterOrder = JSON.parse(
    localStorage.getItem("ecUfcSemesterOrder") || "{}",
  );
const termName = (t) => `${t}º semestre`;
function state(c) {
  if (done.has(c[0])) return "done";
  if (c[6].some((x) => !done.has(x))) return "locked";
  return "available";
}
function clearDependentPreview() {
  document
    .querySelectorAll(".dependent-preview")
    .forEach((card) =>
      card.classList.remove(
        "dependent-preview",
        "preview-locked",
        "fade-to-blue",
      ),
    );
}
function previewDependents(id) {
  clearDependentPreview();
  courses
    .filter((item) => item[6].includes(id))
    .forEach((item) => {
      const card = document.querySelector(`[data-course-id="${item[0]}"]`);
      if (!card) return;
      card.classList.add("dependent-preview");
      if (state(item) === "locked") card.classList.add("preview-locked");
      if (previewFadeIds.has(item[0])) card.classList.add("fade-to-blue");
    });
}
function hasOrderIssue(c) {
  return c[3] !== "continuous" && c[6].some((id) => byId[id][3] >= c[3]);
}
function normalizeSemesterOrder() {
  for (let t = 1; t <= semesterCount; t++) {
    const key = String(t),
      valid = (semesterOrder[key] || []).filter((id) => byId[id]?.[3] === t),
      missing = courses
        .filter((c) => c[3] === t && !valid.includes(c[0]))
        .map((c) => c[0]);
    semesterOrder[key] = [...valid, ...missing];
  }
}
function persistLayout() {
  normalizeSemesterOrder();
  selectedOptatives.forEach(
    (item) => (item.semester = byId[item.id]?.[3] ?? item.semester),
  );
  localStorage.setItem(
    "ecUfcSemesterLayout",
    JSON.stringify(
      Object.fromEntries(
        courses.filter((c) => c[3] !== "continuous").map((c) => [c[0], c[3]]),
      ),
    ),
  );
  localStorage.setItem("ecUfcSemesterCount", semesterCount);
  localStorage.setItem("ecUfcSemesterOrder", JSON.stringify(semesterOrder));
  localStorage.setItem(
    "ecUfcSelectedOptatives",
    JSON.stringify(selectedOptatives),
  );
}
function placeCourse(course, target, beforeId) {
  Object.values(semesterOrder).forEach((list) => {
    const index = list.indexOf(course[0]);
    if (index >= 0) list.splice(index, 1);
  });
  course[3] = target;
  const list =
      semesterOrder[String(target)] || (semesterOrder[String(target)] = []),
    index = beforeId ? list.indexOf(beforeId) : -1;
  if (index >= 0) list.splice(index, 0, course[0]);
  else list.push(course[0]);
}
function clearDragState() {
  clearTimeout(touchDragTimer);
  clearInterval(touchAutoScrollTimer);
  touchDragTimer = null;
  touchDragStarted = false;
  touchStartPoint = null;
  touchDragPoint = null;
  touchAutoScrollDirection = 0;
  touchAutoScrollTimer = null;
  if (touchDragSource) {
    const { card, placeholder } = touchDragSource;
    placeholder.remove();
    card.classList.remove("touch-moving");
    ["width", "height", "left", "top", "transform"].forEach((property) =>
      card.style.removeProperty(property),
    );
  }
  touchDragSource = null;
  draggedCourseId = null;
  document
    .querySelectorAll(".term,.course")
    .forEach((item) => item.classList.remove("dragging", "drag-over", "drop-before"));
}
function startTouchCard(card) {
  const bounds = card.getBoundingClientRect(),
    styles = getComputedStyle(card),
    placeholder = document.createElement("div");
  placeholder.className = "course-drag-placeholder";
  placeholder.style.height = `${bounds.height}px`;
  placeholder.style.marginBottom = styles.marginBottom;
  card.before(placeholder);
  touchDragSource = { card, placeholder };
  card.classList.add("touch-moving");
  card.style.width = `${bounds.width}px`;
  card.style.height = `${bounds.height}px`;
  card.style.left = `${bounds.left}px`;
  card.style.top = `${bounds.top}px`;
}
function moveTouchCard(touch) {
  if (!touchDragSource || !touchStartPoint) return;
  const x = touch.clientX - touchStartPoint.x,
    y = touch.clientY - touchStartPoint.y;
  touchDragSource.card.style.transform = `translate3d(${x}px, ${y}px, 0)`;
}
function scrollTouchGrid() {
  const grid = document.querySelector("#grid");
  if (!touchDragStarted || !touchAutoScrollDirection || !grid) {
    clearInterval(touchAutoScrollTimer);
    touchAutoScrollTimer = null;
    return;
  }
  const previousPosition = grid.scrollLeft;
  grid.scrollLeft += touchAutoScrollDirection * 14;
  if (grid.scrollLeft === previousPosition) {
    clearInterval(touchAutoScrollTimer);
    touchAutoScrollTimer = null;
    return;
  }
  if (touchDragPoint) touchDropTarget(touchDragPoint);
}
function updateTouchAutoScroll(touch) {
  const edgeSize = Math.min(80, Math.max(48, window.innerWidth * 0.16));
  let direction = 0;
  if (touch.clientX <= edgeSize) direction = -1;
  if (touch.clientX >= window.innerWidth - edgeSize) direction = 1;
  if (direction === touchAutoScrollDirection) return;
  touchAutoScrollDirection = direction;
  clearInterval(touchAutoScrollTimer);
  touchAutoScrollTimer = direction
    ? setInterval(scrollTouchGrid, 16)
    : null;
}
function touchDropTarget(touch) {
  const element = document.elementFromPoint(touch.clientX, touch.clientY),
    course = element?.closest(".course"),
    term = element?.closest(".term");
  document
    .querySelectorAll(".term,.course")
    .forEach((item) => item.classList.remove("drag-over", "drop-before"));
  if (course && course.dataset.courseId !== draggedCourseId) {
    course.classList.add("drop-before");
    return { course, term: course.closest(".term") };
  }
  if (term) {
    term.classList.add("drag-over");
    return { term };
  }
  return null;
}
function courseButton(c) {
  const continuous = c[3] === "continuous",
    s = state(c),
    issue = hasOrderIssue(c),
    b = document.createElement("button"),
    progress = continuous
      ? `${continuousHours[c[0]] || 0} / ${c[5]} h`
      : s === "done"
        ? "concluída"
        : s === "locked"
          ? "bloqueada"
          : "disponível";
  b.className =
    "course " +
    s +
    (continuous ? " continuous" : "") +
    (issue ? " invalid-plan" : "");
  b.dataset.courseId = c[0];
  b.innerHTML = `${c[1] ? `<span class="code">${c[1]}</span>` : ""}<span class="name">${c[2]}</span>${issue ? '<span class="order-warning">⚠ pré-requisito fora de ordem</span>' : ""}<span class="meta"><span>${continuous ? "" : c[4] ? c[4] + " cr." : ""}</span><span class="tag">${progress}</span></span>`;
  if (!continuous) {
    b.draggable = true;
    b.ondragstart = (e) => {
      draggedCourseId = c[0];
      b.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
    };
    b.ondragover = (e) => {
      if (!draggedCourseId || draggedCourseId === c[0]) return;
      e.preventDefault();
      e.stopPropagation();
      b.classList.add("drop-before");
    };
    b.ondragleave = () => b.classList.remove("drop-before");
    b.ondrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      b.classList.remove("drop-before");
      const course = byId[draggedCourseId];
      if (!course) return;
      placeCourse(course, c[3], c[0]);
      persistLayout();
      render();
    };
    b.ondragend = () => {
      clearDragState();
    };
    b.ontouchstart = (e) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      touchStartPoint = { x: touch.clientX, y: touch.clientY };
      touchDragTimer = setTimeout(() => {
        draggedCourseId = c[0];
        touchDragStarted = true;
        b.classList.add("dragging");
        startTouchCard(b);
      }, 400);
    };
    b.ontouchmove = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      if (
        !touchDragStarted &&
        touchStartPoint &&
        Math.hypot(
          touch.clientX - touchStartPoint.x,
          touch.clientY - touchStartPoint.y,
        ) > 10
      ) {
        clearTimeout(touchDragTimer);
        touchDragTimer = null;
      }
      if (!touchDragStarted) return;
      e.preventDefault();
      touchDragPoint = { x: touch.clientX, y: touch.clientY };
      moveTouchCard(touch);
      touchDropTarget(touch);
      updateTouchAutoScroll(touch);
    };
    b.ontouchend = (e) => {
      clearTimeout(touchDragTimer);
      if (!touchDragStarted) return;
      e.preventDefault();
      const target = touchDropTarget(e.changedTouches[0]),
        course = byId[draggedCourseId];
      ignoreCourseClickUntil = Date.now() + 450;
      if (course && target?.course) {
        placeCourse(course, Number(target.term.dataset.semester), target.course.dataset.courseId);
        persistLayout();
        render();
      } else if (course && target?.term) {
        placeCourse(course, Number(target.term.dataset.semester));
        persistLayout();
        render();
      }
      clearDragState();
    };
    b.ontouchcancel = clearDragState;
  }
  b.onclick = () => {
    if (Date.now() < ignoreCourseClickUntil) return;
    open(c);
  };
  return b;
}
function render() {
  normalizeSemesterOrder();
  const g = document.querySelector("#grid");
  g.innerHTML = "";
  for (let t = 1; t <= semesterCount; t++) {
    const list = courses
        .filter((c) => c[3] === t)
        .sort(
          (a, b) =>
            semesterOrder[String(t)].indexOf(a[0]) -
            semesterOrder[String(t)].indexOf(b[0]),
        ),
      hours = list.reduce((n, c) => n + c[5], 0);
    const col = document.createElement("section");
    col.className = "term";
    col.dataset.semester = t;
    col.innerHTML = `<div class="term-title"><h2>${termName(t)}</h2><span>${hours} h</span></div>`;
    col.ondragover = (e) => {
      if (!draggedCourseId) return;
      e.preventDefault();
      col.classList.add("drag-over");
    };
    col.ondragleave = () => col.classList.remove("drag-over");
    col.ondrop = (e) => {
      e.preventDefault();
      col.classList.remove("drag-over");
      const course = byId[draggedCourseId];
      if (!course) return;
      placeCourse(course, t);
      persistLayout();
      render();
    };
    list.forEach((c) => col.append(courseButton(c)));
    g.append(col);
  }
  let parallel = document.querySelector("#parallel");
  if (!parallel) {
    parallel = document.createElement("section");
    parallel.id = "parallel";
    parallel.className = "parallel";
    document
      .querySelector("main")
      .insertBefore(parallel, document.querySelector(".foot"));
  }
  parallel.innerHTML = '<div class="parallel-cards"></div>';
  courses
    .filter((c) => c[3] === "continuous")
    .forEach((c) =>
      parallel.querySelector(".parallel-cards").append(courseButton(c)),
    );
  const issues = courses.filter(hasOrderIssue),
    n = done.size,
    total = courses.length,
    completedHours =
      courses.filter((c) => done.has(c[0])).reduce((n, c) => n + c[5], 0) +
      Object.values(continuousHours).reduce((n, h) => n + Number(h || 0), 0),
    available = courses.filter((c) => state(c) === "available").length,
    pct = Math.round(
      ((n +
        Object.values(continuousHours).filter((h) => Number(h) > 0).length) /
        total) *
        100,
    );
  document.querySelector("#plan-warning").textContent = issues.length
    ? `⚠ ${issues.length} pré-requisito${issues.length > 1 ? "s" : ""} fora de ordem.`
    : "";
  document.querySelector("#completed").innerHTML = `${n} <em>/ ${total}</em>`;
  document.querySelector("#hours").textContent = `${completedHours} h`;
  document.querySelector("#percent").textContent = `${pct}%`;
  document.querySelector("#available").textContent = available;
  document.querySelector("#fill").style.width = pct + "%";
  document.querySelector("#remove-semester").hidden = semesterCount <= 10;
  localStorage.setItem("ecUfcDone", JSON.stringify([...done]));
  localStorage.setItem("ecUfcContinuousHours", JSON.stringify(continuousHours));
  persistLayout();
}
function flashPrereqs(course) {
  course[6]
    .filter((id) => !done.has(id))
    .forEach((id) => {
      const card = document.querySelector(`[data-course-id="${id}"]`);
      if (!card) return;
      card.classList.remove("needs-attention", "was-locked");
      if (state(byId[id]) === "locked") card.classList.add("was-locked");
      void card.offsetWidth;
      card.classList.add("needs-attention");
      setTimeout(
        () => card.classList.remove("needs-attention", "was-locked"),
        2106,
      );
    });
  document
    .querySelector("#grid")
    .scrollIntoView({ behavior: "smooth", block: "nearest" });
}
function open(c) {
  previewDependents(c[0]);
  if (c[3] === "continuous") {
    const current = continuousHours[c[0]] || 0;
    document.querySelector("#detail").innerHTML =
      `<h3>${c[2]}</h3><p>Total exigido: ${c[5]} horas.</p><div class="hour-entry"><label for="hours-input">Horas já concluídas</label><input id="hours-input" type="number" inputmode="numeric" min="0" max="${c[5]}" step="1" value="${current}"></div><button id="save-hours">Salvar horas</button>`;
    document.querySelector("#panel").classList.add("open");
    document.querySelector("#save-hours").onclick = () => {
      const value = Math.max(
        0,
        Math.min(
          c[5],
          Number(document.querySelector("#hours-input").value) || 0,
        ),
      );
      continuousHours[c[0]] = value;
      render();
      open(c);
    };
    return;
  }
  const prereq = c[6].map((x) => byId[x]);
  const can = state(c) !== "locked",
    prereqSection = prereq.length
      ? `<p><strong>Pré-requisitos</strong></p><ul>${prereq.map((p) => `<li>${p[2]} ${done.has(p[0]) ? "✓" : ""}</li>`).join("")}</ul>`
      : "";
  document.querySelector("#detail").innerHTML =
    `${c[1] ? `<div class="code">${c[1]}</div>` : ""}<h3>${c[2]}</h3><p>${c[5]} horas${c[4] ? " · " + c[4] + " créditos" : ""}</p>${c[7] ? `<p><strong>Regra:</strong> ${c[7]}</p>` : ""}${prereqSection}<button id="toggle" class="${!can && !done.has(c[0]) ? "locked-action" : ""}">${done.has(c[0]) ? "Marcar como não concluída" : "Marcar como concluída"}</button>`;
  document.querySelector("#panel").classList.add("open");
  document.querySelector("#toggle").onclick = () => {
    if (!can && !done.has(c[0])) {
      flashPrereqs(c);
      return;
    }
    if (done.has(c[0])) {
      done.delete(c[0]);
      previewFadeIds.clear();
    } else {
      done.add(c[0]);
      previewFadeIds = new Set(
        courses
          .filter(
            (item) => item[6].includes(c[0]) && state(item) === "available",
          )
          .map((item) => item[0]),
      );
    }
    render();
    open(c);
    setTimeout(() => previewFadeIds.clear(), 270);
  };
}
function creditLabel(hours) {
  const credits = hours / 16;
  return Number.isInteger(credits)
    ? credits
    : String(credits).replace(".", ",");
}
function semesterOptions() {
  return Array.from(
    { length: semesterCount },
    (_, i) => `<option value="${i + 1}">${i + 1}º semestre</option>`,
  ).join("");
}
function placeOptative(choice) {
  document.querySelector("#detail").innerHTML =
    `<h3>${choice.name}</h3><p>${choice.hours} h · ${creditLabel(choice.hours)} cr.</p><label class="semester-select" for="optative-semester">Semestre</label><select id="optative-semester">${semesterOptions()}</select><button id="confirm-optative">Adicionar à grade</button>`;
  document.querySelector("#confirm-optative").onclick = () => {
    const semester = Number(document.querySelector("#optative-semester").value),
      course = [
        choice.id,
        "",
        choice.name,
        semester,
        choice.hours / 16,
        choice.hours,
        [],
      ];
    selectedOptatives.push({ ...choice, semester });
    courses.push(course);
    byId[choice.id] = course;
    persistLayout();
    render();
    document.querySelector("#panel").classList.remove("open");
  };
}
function openFreeOptative() {
  const used = selectedOptatives
      .filter((item) => item.free)
      .reduce((total, item) => total + item.hours, 0),
    remaining = 192 - used;
  document.querySelector("#detail").innerHTML =
    `<h3>Optativa Livre</h3><p>${used} / 192 h utilizadas</p><div class="hour-entry"><label for="free-name">Nome da disciplina</label><input id="free-name" type="text" placeholder="Nome da optativa"><label for="free-hours">Carga horária</label><input id="free-hours" type="number" inputmode="numeric" min="1" max="${remaining}" step="1" placeholder="Até ${remaining} h"></div><button id="continue-free">Escolher semestre</button>`;
  document.querySelector("#continue-free").onclick = () => {
    const name = document.querySelector("#free-name").value.trim(),
      hours = Number(document.querySelector("#free-hours").value);
    if (!name || !hours || hours < 1 || hours > remaining) {
      alert(`Informe nome e uma carga entre 1 e ${remaining} h.`);
      return;
    }
    placeOptative({ id: `free-${Date.now()}`, name, hours, free: true });
  };
}
function removeOptative(id) {
  const courseIndex = courses.findIndex((course) => course[0] === id);
  if (courseIndex >= 0) courses.splice(courseIndex, 1);
  delete byId[id];
  Object.values(semesterOrder).forEach((list) => {
    const index = list.indexOf(id);
    if (index >= 0) list.splice(index, 1);
  });
  selectedOptatives = selectedOptatives.filter((item) => item.id !== id);
  persistLayout();
  render();
  openOptatives();
}
const normalizeSearch = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
function openOptatives() {
  const freeHours = selectedOptatives
    .filter((item) => item.free)
    .reduce((total, item) => total + item.hours, 0);
  document.querySelector("#detail").innerHTML =
    `<h3>Optativas</h3><button class="free-optative" id="free-optative">Optativa Livre <span>${freeHours} / 192 h</span></button>${selectedOptatives.length ? `<div class="added-optatives"><strong>Adicionadas à grade</strong>${selectedOptatives.map((item) => `<div><span>${item.name}</span><button data-remove-optative="${item.id}" aria-label="Remover ${item.name}">Remover</button></div>`).join("")}</div>` : ""}<input class="optative-search" id="optative-search" type="search" placeholder="Buscar optativa"><div class="optative-list">${optatives
      .map(([name, hours], index) => {
        const selected = selectedOptatives.some(
          (item) => item.id === `opt-${index}`,
        );
        return `<button class="optative-choice" data-index="${index}" ${selected ? "disabled" : ""}><span>${name}</span><small>${selected ? "adicionada" : `${hours} h · ${creditLabel(hours)} cr.`}</small></button>`;
      })
      .join("")}</div>`;
  document.querySelector("#panel").classList.add("open");
  document.querySelector("#free-optative").onclick = openFreeOptative;
  document.querySelector("#optative-search").oninput = (e) => {
    const query = normalizeSearch(e.target.value.trim());
    document.querySelectorAll(".optative-choice").forEach((button) => {
      const [name] = optatives[Number(button.dataset.index)];
      button.hidden = !!query && !normalizeSearch(name).includes(query);
    });
  };
  document
    .querySelectorAll("[data-remove-optative]")
    .forEach(
      (button) =>
        (button.onclick = () => removeOptative(button.dataset.removeOptative)),
    );
  document.querySelectorAll(".optative-choice").forEach(
    (button) =>
      (button.onclick = () => {
        const index = Number(button.dataset.index),
          [name, hours] = optatives[index];
        placeOptative({ id: `opt-${index}`, name, hours, free: false });
      }),
  );
}
document.querySelector("#close").onclick = () => {
  clearDependentPreview();
  document.querySelector("#panel").classList.remove("open");
};
document.querySelector("#reset").onclick = () => {
  if (
    !confirm(
      "Recomeçar a grade? Seu progresso, optativas adicionadas e organização dos semestres serão apagados.",
    )
  )
    return;
  done.clear();
  Object.keys(continuousHours).forEach((id) => delete continuousHours[id]);
  courses
    .filter((c) => !baseCourseIds.has(c[0]))
    .forEach((c) => delete byId[c[0]]);
  courses.splice(
    0,
    courses.length,
    ...courses.filter((c) => baseCourseIds.has(c[0])),
  );
  selectedOptatives = [];
  courses.forEach((c) => (c[3] = defaultSemesters[c[0]]));
  semesterCount = 10;
  semesterOrder = JSON.parse(JSON.stringify(defaultSemesterOrder));
  previewFadeIds.clear();
  clearDependentPreview();
  localStorage.removeItem("ecUfcSemesterLayout");
  localStorage.removeItem("ecUfcSemesterCount");
  localStorage.removeItem("ecUfcSemesterOrder");
  localStorage.removeItem("ecUfcSelectedOptatives");
  render();
  document.querySelector("#panel").classList.remove("open");
};
document.querySelector("#optatives").onclick = openOptatives;
document.querySelector("#add-semester").onclick = () => {
  if (semesterCount >= 18) return;
  semesterCount++;
  persistLayout();
  render();
};
document.querySelector("#remove-semester").onclick = () => {
  if (courses.some((c) => c[3] === semesterCount)) {
    alert("Mova as disciplinas do último semestre antes de removê-lo.");
    return;
  }
  delete semesterOrder[String(semesterCount)];
  semesterCount--;
  persistLayout();
  render();
};
render();
