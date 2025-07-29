const ANIME_GRADIENTS = [
      ['naruto', ['#FFB300', '#FF6F00']],
      ['one piece', ['#0099FF', '#00FFCC']],
      ['luffy', ['#FF3131', '#FFD700']],
      ['sasuke', ['#191970', '#8A2BE2']],
      ['nezuko', ['#FFB6B9', '#FAE3D9']],
      ['demon slayer', ['#6B4226', '#BFAE9A']],
      ['attack on titan', ['#7c4f1d', '#e0c097']],
      ['totoro', ['#a1c4fd', '#c2e9fb']],
      ['midnight wave', ['#1e3c72', '#2a5298']],
  ['arctic horizon', ['#eef2f3', '#8e9eab']],
  ['sunbeam fusion', ['#ff9a00', '#ff6126']],
  ['electric night', ['#3a1c71', '#d76d77', '#ffaf7b']],
  ['neon forest', ['#56ab2f', '#a8e063']],
  ['digital sky', ['#2980b9', '#6dd5fa', '#ffffff']],
  ['mint frost', ['#c2e9fb', '#a1c4fd']],
  ['deep space', ['#000428', '#004e92']],
  ['infra glow', ['#ff416c', '#ff4b2b']],
  ['titanium steel', ['#868f96', '#596164']],
  ['clear ice', ['#e0eafc', '#cfdef3']],
  ['warm shadow', ['#f7f8f8', '#acbb78']],
  ['steel pulse', ['#485563', '#29323c']],
  ['berry blast', ['#bc4e9c', '#f80759']],
  ['cool cotton', ['#fdfbfb', '#ebedee']],
  ['obsidian light', ['#232526', '#414345']],
  ['twilight neon', ['#0f0c29', '#302b63', '#24243e']],
  ['sunrise edge', ['#ff512f', '#f09819']],
  ['tech wave', ['#396afc', '#2948ff']],
  ['storm cloud', ['#757f9a', '#d7dde8']],
  ['azure dust', ['#a1c4fd', '#c2e9fb']],
  ['electric mint', ['#00f2fe', '#4facfe']],
  ['black neon', ['#000000', '#434343']],
  ['frosted purple', ['#667eea', '#764ba2']],
  ['lemon frost', ['#fdfc47', '#24fe41']],
  ['calm green', ['#add100', '#7b920a']],
  ['blue quartz', ['#3a6073', '#16222a']],
  ['gold tech', ['#f6d365', '#fda085']],
  ['starlight', ['#fdfcfb', '#e2d1c3']],
  ['green circuit', ['#11998e', '#38ef7d']],
  ['pearl flash', ['#e0c3fc', '#8ec5fc']],
  ['future sky', ['#00c6ff', '#0072ff']],
  ['terminal night', ['#1f4037', '#99f2c8']],
  ['blue storm', ['#485563', '#29323c']],
  ['bubblegum splash', ['#ff9a9e', '#fecfef']],
  ['sunburst cold', ['#fceabb', '#f8b500']],
  ['ice laser', ['#93f9b9', '#1d976c']],
  ['smoky gold', ['#e6dada', '#274046']],
  ['moonlight', ['#232526', '#414345']],
  ['tropical heat', ['#ff416c', '#ff4b2b']],
  ['chrome burn', ['#3e5151', '#decba4']],
  ['dreamy silver', ['#cfd9df', '#e2ebf0']],
  ['skyline UI', ['#0099f7', '#f11712']],
  ['glass lavender', ['#DAE2F8', '#D6A4A4']],
  ['flat blur', ['#b3ffab', '#12fff7']],
  ['infra ocean', ['#4776E6', '#8E54E9']],
  ['lunar fade', ['#556270', '#FF6B6B']],
  ['graphite mint', ['#283c86', '#45a247']],
  ['aqua breeze', ['#43cea2', '#185a9d']],
  ['peach sunset', ['#ff7e5f', '#feb47b']],
  ['cotton candy', ['#ff9a9e', '#fad0c4']],
  ['deep ocean', ['#2C3E50', '#4CA1AF']],
  ['frozen lake', ['#83a4d4', '#b6fbff']],
  ['midnight city', ['#232526', '#414345']],
  ['sunset gold', ['#f7971e', '#ffd200']],
  ['skyline', ['#00c6ff', '#0072ff']],
  ['mint leaf', ['#76b852', '#8DC26F']],
  ['twilight', ['#0f2027', '#203a43', '#2c5364']],
  ['lavender blush', ['#d9a7c7', '#fffcdc']],
  ['bloody mary', ['#f85032', '#e73827']],
  ['blue raspberry', ['#00c3ff', '#ffff1c']],
  ['cosmic fusion', ['#ff00cc', '#333399']],
  ['sunny morning', ['#f6d365', '#fda085']],
  ['mystic purple', ['#7b4397', '#dc2430']],
  ['aurora sky', ['#00c6ff', '#0072ff']],
  ['dark mode', ['#434343', '#000000']],
  ['soft ice', ['#e0c3fc', '#8ec5fc']],
  ['forest dew', ['#5A3F37', '#2C7744']],
  ['volcano', ['#ff9966', '#ff5e62']],
  ['neon dream', ['#12c2e9', '#c471ed', '#f64f59']],
  ['blue lagoon', ['#43c6ac', '#191654']],
  ['calm dusk', ['#3e5151', '#decba4']],
  ['pink blossom', ['#ec6f66', '#f3a183']],
  ['icy sky', ['#2980B9', '#6DD5FA', '#FFFFFF']],
  ['warm beach', ['#f12711', '#f5af19']],
  ['morning frost', ['#000428', '#004e92']],
  ['serenity', ['#757F9A', '#D7DDE8']],
  ['grape jam', ['#6a3093', '#a044ff']],
  ['apple punch', ['#f00000', '#dc281e']],
  ['tech silver', ['#bdc3c7', '#2c3e50']],
  ['vivid pink', ['#ff4e50', '#f9d423']],
  ['green mist', ['#11998e', '#38ef7d']],
  ['holo UI', ['#ff6fd8', '#3813c2']],
  ['smart blue', ['#2193b0', '#6dd5ed']],
  ['ocean dive', ['#2b5876', '#4e4376']],
  ['lemon twist', ['#ffe000', '#799f0c']],
  ['clouds', ['#ECE9E6', '#FFFFFF']],
  ['purple rain', ['#6441A5', '#2a0845']],
  ['dust storm', ['#BA8B02', '#181818']],
  ['bora bora', ['#2BC0E4', '#EAECC6']],
  ['gold foil', ['#FFD700', '#FFA500']],
  ['vintage', ['#e96443', '#904e95']],
  ['nordic night', ['#373B44', '#4286f4']],
  ['sky peach', ['#ffecd2', '#fcb69f']],
  ['classic blue', ['#1e3c72', '#2a5298']],
  ['glacier', ['#83a4d4', '#b6fbff']],
  ['black sea', ['#2c3e50', '#000000']]

    ];
    
    // --- Sélection des éléments principaux ---
const container = document.querySelector(".radient-container");
const colorExample = document.querySelector(".color-example-container");
const cssCode = document.querySelector(".copy");

// --- Génération des exemples de dégradés à partir de ANIME_GRADIENTS ---
for (let i = 0; i < ANIME_GRADIENTS.length; i++) {
  const name = ANIME_GRADIENTS[i][0];
  const colors = ANIME_GRADIENTS[i][1];

  const miniCont = document.createElement('div');
  miniCont.className = "mini-container";
  miniCont.id = i;

  // Création des deux blocs de couleur
  const color1 = document.createElement('div');
  const color2 = document.createElement('div');
  const colorInfo = document.createElement('div');

  color1.className = "color1";
  color1.innerHTML = colors[0];
  color1.style.background = colors[0];

  color2.className = "color2";
  color2.innerHTML = colors[1];
  color2.style.background = colors[1];

  // Nom stylisé du dégradé
  const gradientName = document.createElement('p');
  gradientName.className = "gradientName";
  gradientName.innerHTML = "~ " + name + " ~";

  // Info affichant les 2 couleurs utilisées
  colorInfo.className = "colorInfo";
  colorInfo.innerHTML = `${colors[0]} - ${colors[1]}`;

  // Bouton pour appliquer ce dégradé
  buttonGenerer = document.createElement('button');
  buttonGenerer.className = "generer";

  // Ajout des éléments dans le DOM
  colorExample.appendChild(gradientName);
  colorExample.appendChild(miniCont);
  miniCont.appendChild(color1);
  miniCont.appendChild(color2);
  miniCont.appendChild(colorInfo);
  miniCont.appendChild(buttonGenerer);
}

// --- Ajout des événements sur les boutons "générer" ---
const btnGenerer = document.querySelectorAll(".generer");

btnGenerer.forEach(function(unBtn) {
  unBtn.addEventListener("click", function() {
    // Trouver le conteneur parent du bouton
    oneContainer = unBtn.closest(".mini-container");

    // Récupération des deux couleurs affichées dans les blocs
    const hex1 = oneContainer.children[0]; // .color1
    const hex2 = oneContainer.children[1]; // .color2

    // Application du gradient à l'arrière-plan
    container.style.background = `linear-gradient(to right, ${hex1.innerHTML}, ${hex2.innerHTML})`;
    cssCode.innerHTML = `linear-gradient(to right, ${hex1.innerHTML}, ${hex2.innerHTML})`;
  });
});

// --- Générateur de gradient aléatoire ---
const btnRandom = document.querySelector(".randomBtn");

btnRandom.addEventListener("click", function() {
  // Choix aléatoire d'un index de la liste
  var index = Math.floor(Math.random() * ANIME_GRADIENTS.length);
  const hex1 = ANIME_GRADIENTS[index][1][0];
  const hex2 = ANIME_GRADIENTS[index][1][1];
  console.log(hex1);

  // Application du gradient aléatoire
  container.style.background = `linear-gradient(to right, ${hex1}, ${hex2})`;
  cssCode.innerHTML = `linear-gradient(to right, ${hex1}, ${hex2})`;

  // Animation d'activité du bouton (feedback visuel)
  btnRandom.classList.add("active");
  setTimeout(function() {
    btnRandom.classList.remove("active");
  }, 500);
});

// --- Copie du CSS dans le presse-papier ---
const copyBtn = document.querySelector(".copyBtn");

copyBtn.addEventListener("click", function() {
  var texte = cssCode.innerHTML;
  console.log(texte);

  // Copie dans le presse-papier (API moderne navigateur)
  navigator.clipboard.writeText(texte)
    .then(function() {
      // Feedback visuel (icône check pendant 2 secondes)
      copyBtn.src = "check.svg";
      setTimeout(function() {
        copyBtn.src = "copy.svg";
      }, 2000);
    });
});
