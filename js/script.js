// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];


// Milestone 1
// // Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// //



// Milestone 2
// Coloriamo le icone per tipo
//
// creaimo un array che ha i colori scelti da noi
const colors = [
  'yellow',
  'coral',
  'green'
];

const categories = [];

// ciclo per estrarre le categorie dai nostri oggetti e con push inserire i dati in un array
icons.forEach((item, i) => {
  // condizione per non far ripetere l'estrazione piu volte
  if (categories.includes(item.category) == false ) {
    categories.push(item.category)
  }
});




const iconsColored = icons.map((icon ) => {
    // ora associamo gli indici di colors e categories
    const categoryIndex = categories.indexOf(icon.category);
    const colorItem = colors[categoryIndex];
    // assegno la nuova proprietà color
    icon.color = colorItem;
    // ritorno gli oggetti con le nuove proprietà
    return icon;
});


// stampiamo le icone colorate
iconsColored.forEach((icon) => {
  // usiamo la destrutturazione
  const {name, prefix, family, color} = icon;

  const html = `<div>
  <i class="${family} ${prefix}${name}" style="color:${color}"></i>
  <div class="title">${name}</div>
  </div>`;

  // con il metodo append di jQuery inseriamo il div nell'html
  $('.icons').append(html);
});



// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

iconsContainer = $('.icons');

// seleziono con jQuery l'elemento nel DOM e lo inserisco in un const
const select = $('#type');

// cicliamo con forEach l'array categories per creare le tre categorie da inserire nel DOM con append
categories.forEach((item) => {
  const option = `<option value="${item}">${item}</option>`;
  select.append(option);
});

// associamo la selezione del menu a tendina con la categoria/filtro esatta
select.change(function(){
  const optionSelected = $(this).val();

  let iconsFiltered = iconsColored.filter((icon) => {
    return icon.category == optionSelected;
  });
  if (iconsFiltered.lenght == 0) {
    iconsFiltered==iconsColored;
  };
  console.log(iconsFiltered);


  iconsContainer.html("");

  iconsFiltered.forEach((icon) => {
    const {name, prefix, family, color} = icon;

    const html = `<div>
    <i class="${family} ${prefix}${name}" style="color:${color}"></i>
    <div class="title">${name}</div>
    </div>`;

    iconsContainer.append(html);

  });

});
