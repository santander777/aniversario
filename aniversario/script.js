// ====== EDITA AQUÍ ======
// Fecha en que empezaron (año, mes 0-11, día). Agosto = 7.
const INICIO = new Date(2026, 7, 20, 0, 0, 0);

// Un texto por cada foto/video, en el orden en que aparecen (27 en total).
const TEXTOS = [
  "Desde que llegaste, todo en mí se volvió más tranquilo y más bonito. Contigo aprendí que el amor puede sentirse como un día de cielo despejado, sin prisa y sin miedo. Gracias por llegar a mi vida.",
  "Tu sonrisa es mi lugar favorito en el mundo. Cada vez que te veo reír, siento que el día se arregla solo. Quiero ser siempre la razón por la que sonríes así, hoy, mañana y todos los días que vengan.",
  "Me encantan tus abrazos, porque ahí todo se siente en su lugar. Cuando estoy contigo se me olvidan los problemas y solo quiero quedarme ahí un rato más. Eres mi refugio y mi calma, Naomy.",
  "Eres lo mejor que me pasó en este tiempo. No necesito grandes cosas para ser feliz; me basta con tenerte cerca, escucharte y saber que estás ahí. Contigo, lo simple se vuelve especial.",
  "Contigo hasta lo más pequeño se convierte en un recuerdo que quiero guardar para siempre. Una charla, una risa, un mensaje tuyo: todo me hace sentir afortunado de que me hayas elegido para caminar a tu lado.",
  "Ojalá pudiera enseñarte cómo me haces sentir. Me haces querer ser mejor persona, cuidarte, escucharte y estar contigo en los días buenos y también en los difíciles. Gracias por confiar en mí y quedarte.",
  "A tu lado el tiempo se pasa volando y, aun así, cada momento se queda grabado en mi corazón. Me gusta cómo me miras, cómo me hablas y cómo haces que todo parezca más fácil. Te quiero muchísimo.",
  "Dos meses y siento que apenas empezamos. Todavía nos faltan tantos lugares, tantas risas, tantas noches de platicar sin que se acabe el tema. Y lo mejor es que quiero vivirlo todo contigo, nadie más.",
  "Este video es para recordar lo bonito que es esto que tenemos. Cada vez que lo vea, voy a acordarme de lo feliz que me haces. Gracias por llenar mis días de cariño, de paciencia y de tanto amor.",
  "Bajo las estrellas, con todo el cielo brillando, solo pienso que tú eres mi mejor suerte. Si pudiera pedir un deseo, sería que estos momentos contigo duraran para siempre. Te quiero más de lo que sé decir.",
  "Quiero bailar contigo en cada momento bonito de nuestra vida, aunque no sepamos los pasos. Lo importante es tenerte de la mano y saber que juntos podemos con todo. Eres mi persona favorita, Naomy.",
  "Me haces querer ser mejor cada día, no por obligación, sino porque tú lo mereces todo. Mereces cariño, paciencia, respeto y mucho amor. Prometo esforzarme para dártelo siempre, de la mejor manera que pueda.",
  "Eres mi lugar favorito, ese al que siempre quiero volver. Da igual dónde estemos, si tú estás ahí, ya es mi hogar. Gracias por hacerme sentir tan querido y por quedarte conmigo.",
  "Cada día contigo es un regalo que no sabía que necesitaba. Me enseñaste que el amor es cuidarse, reírse juntos y apoyarse cuando todo se pone difícil. Eso es lo que quiero seguir construyendo contigo.",
  "Gracias por ser tú, tal cual eres, con todo lo que te hace única. Me encanta tu forma de ser, tu risa, tus detalles y hasta tus rarezas. Todo de ti me parece hermoso, y todo de ti lo quiero.",
  "Si el mundo se acabara mañana, me gustaría pasar mi último día a tu lado. Contigo aprendí que no hace falta nada más cuando tienes a la persona correcta. Y yo sé que tú eres esa persona para mí.",
  "Mi corazón sonríe cada vez que pienso en ti, y eso pasa muy seguido. Eres lo primero que quiero contarle a alguien cuando algo bueno me pasa. Gracias por ser mi mejor compañía y mi mejor historia.",
  "Otro video, otro recuerdo que quiero conservar contigo. Quiero que cuando pase el tiempo podamos mirar hacia atrás y sonreír por todo lo que vivimos. Que cada día juntos sea mejor que el anterior.",
  "Eres la luz de mis días, incluso de los más grises. Basta con que me escribas o me veas para que todo cambie. Gracias por iluminar mi vida con tu cariño, tus abrazos y tu forma tan bonita de quererme.",
  "Quiero que sigamos creando recuerdos juntos, de esos que se guardan en el corazón y no se olvidan. Viajes, tardes tranquilas, noches de películas, locuras y abrazos largos. Todo contigo suena perfecto.",
  "No sé qué haya hecho para merecerte, pero agradezco al universo cada día por haberte puesto en mi camino. Eres tan especial que a veces siento que estoy soñando. Y si es un sueño, no quiero despertar.",
  "Estos 2 meses fueron los más hermosos. Me dieron risas, calma, cariño y muchas ganas de seguir. Quiero que sepas que estoy aquí para ti, siempre, en lo bueno y en lo malo, con toda mi sinceridad.",
  "Aquí hay mucho más por vivir, y lo quiero vivir contigo. Cada mes que pase, te voy a querer un poquito más. Prometo cuidar lo nuestro, hacerte reír y recordarte todos los días lo importante que eres.",
  "Naomy, gracias por quererme tal cual soy. Contigo me siento libre, tranquilo y feliz, como si el mundo fuera un campo de flores bajo la luna. Eres mi persona favorita y mi mejor decisión.",
  "Cada día que pasa te quiero más, y cada momento a tu lado es un tesoro para mí. No sé qué nos espera, pero sé que quiero descubrirlo contigo, tomados de la mano, sin soltarnos nunca.",
  "Gracias por estos 2 meses llenos de cariño y de momentos que jamás voy a olvidar. Eres mi todo, Naomy, y quiero que lo sepas cada día de mi vida, aunque a veces no sepa cómo decirlo.",
  "Estas son las canciones que me llegan a recordar a ti, a lo que sentimos y a todo lo que hemos vivido. Cada vez que las escucho, pienso en nosotros. Dale play y quédate un ratito conmigo. Feliz aniversario, mi amor 💙"
];
// ========================

const $ = id => document.getElementById(id);

// Contador
function reloj() {
  const t = Math.max(0, Math.floor((new Date() - INICIO) / 1000));
  $('reloj').textContent = `💙 ${Math.floor(t / 86400)} días, ${Math.floor(t % 86400 / 3600)} h, ${Math.floor(t % 3600 / 60)} min y ${t % 60} s juntos`;
}
reloj(); setInterval(reloj, 1000);

// Lista de elementos: 24 fotos con 3 videos intercalados
const items = [];
let v = 1;
for (let i = 1; i <= 24; i++) {
  items.push({ t: 'img', src: 'img/' + String(i).padStart(2, '0') + '.jpg' });
  if (i % 8 === 0 && v <= 2) items.push({ t: 'vid', src: 'video/v' + (v++) + '.mp4' });
}
items.push({ t: 'spot' });

// Construir galería
const grid = $('grid');
items.forEach((it, n) => {
  const d = document.createElement('div');
  d.className = 'item' + (it.t === 'vid' ? ' vid' : it.t === 'spot' ? ' spot' : '');
  d.innerHTML = it.t === 'img'
    ? `<img src="${it.src}" alt="Recuerdo ${n + 1}" loading="lazy">`
    : it.t === 'spot'
    ? `<div class="lista"><span>🎵</span><b>Canciones que me recuerdan a nosotros</b></div>`
    : `<video src="${it.src}#t=0.5" muted playsinline preload="metadata"></video>`;
  d.onclick = () => abrir(it, n);
  grid.appendChild(d);
});

// Entrar / volver
$('entrar').onclick = () => {
  $('fotos').classList.add('on');
  $('fotos').scrollTop = 0;
  grid.querySelectorAll('.item').forEach((e, i) => setTimeout(() => e.classList.add('ver'), 120 * i));
};
$('volver').onclick = () => {
  $('fotos').classList.remove('on');
  grid.querySelectorAll('.item').forEach(e => e.classList.remove('ver'));
};

// Visor con texto que se escribe
let timer;
function abrir(it, n) {
  $('medio').innerHTML = it.t === 'img'
    ? `<img src="${it.src}" alt="">`
    : it.t === 'spot'
    ? `<iframe src="https://open.spotify.com/embed/playlist/3OhXOWe39soTHpGlzc1RLM" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    : `<video src="${it.src}" controls autoplay playsinline></video>`;
  const txt = TEXTOS[n] || 'Te quiero mucho 💙', p = $('texto');
  p.textContent = '';
  clearInterval(timer);
  let k = 0;
  timer = setInterval(() => { p.textContent = txt.slice(0, ++k); if (k >= txt.length) clearInterval(timer); }, 22);
  $('visor').classList.add('on');
}
function cerrar() { clearInterval(timer); $('medio').innerHTML = ''; $('visor').classList.remove('on'); }
$('cerrar').onclick = cerrar;
$('visor').onclick = e => { if (!$('caja').contains(e.target)) cerrar(); };
addEventListener('keydown', e => { if (e.key === 'Escape') cerrar(); });

// Pétalos que caen
const cv = $('petalos'), cx = cv.getContext('2d');
const col = ['#9ec5ff', '#cfe0ff', '#f2a7c6', '#fff3b0'];
function tam() { cv.width = innerWidth; cv.height = innerHeight; }
tam(); addEventListener('resize', tam);
const nuevo = y => ({ x: Math.random() * cv.width, y: y ?? -10, r: 4 + Math.random() * 6, v: .6 + Math.random() * 1.2,
  a: Math.random() * 6, c: col[Math.floor(Math.random() * col.length)] });
const pet = Array.from({ length: 35 }, () => nuevo(Math.random() * innerHeight));
(function anim() {
  cx.clearRect(0, 0, cv.width, cv.height);
  pet.forEach((p, i) => {
    p.y += p.v; p.a += .03; p.x += Math.sin(p.a) * .8;
    cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a);
    cx.fillStyle = p.c; cx.globalAlpha = .75;
    cx.beginPath(); cx.ellipse(0, 0, p.r, p.r / 2, 0, 0, 6.3); cx.fill(); cx.restore();
    if (p.y > cv.height + 10) pet[i] = nuevo();
  });
  requestAnimationFrame(anim);
})();
