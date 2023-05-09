const productsArray = [
  // Produtos Paintings
    {
      image: "./assets/img/paintings/quadro-c3po.jpg",
      name: "Robot",
      price: "R$250,00",
      type: "Paintings",
    },
    {
      image: "./assets/img/paintings/quadro-controle.jpg",
      name: "Controle Playstation",
      price: "R$99,00",
      type: "Paintings",
    },
    {
      image: "./assets/img/paintings/quadro-mario.jpg",
      name: "Mario",
      price: "R$275,00",
      type: "Paintings",
    },
    {
      image: "./assets/img/paintings/quadro-pacman.jpg",
      name: "PacMan",
      price: "R$160,00",
      type: "Paintings",
    },
    {
      image: "./assets/img/paintings/quadro-relogio.jpg",
      name: "Smart Watch",
      price: "R$120,00",
      type: "Paintings",
    },
  // Produto Action Figures
    {
      image: "./assets/img/actions/dragonball-action-figure.jpg",
      name: "Goku Super Saiyajin",
      price: "R$500,00",
      type: "Action Figures",
    },
    {
      image: "./assets/img/actions/godzilla-action-figure.jpg",
      name: "Godzilla",
      price: "R$700,00",
      type: "Action Figures",
    },
    {
      image: "./assets/img/actions/groot-action-figure.jpg",
      name: "Groot",
      price: "R$950,00",
      type: "Action Figures",
    },
    {
      image: "./assets/img/actions/ironman-action-figure.jpg",
      name: "Homem de Ferro",
      price: "R$1030,00",
      type: "Action Figures",
    },
    {
      image: "./assets/img/actions/starwars-action-figure.jpg",
      name: "Sr Yoda",
      price: "R$870,00",
      type: "Action Figures",
    },
    {
      image: "./assets/img/actions/wolverine-action-figure.jpg",
      name: "Wolverine",
      price: "R$510,00",
      type: "Action Figures",
    }
];
const actionFiguresArray = [];
const paintingsArray = [];
const body = document.querySelector('body');
const main = document.createElement('main');
const sectionPaintings = document.createElement('section');
const sectionAction = document.createElement('section');
const listPaintings = document.createElement('ul');
const listAction = document.createElement('ul');
const nameSectionPaintings = document.createElement('h2');
const nameSectionActions = document.createElement('h2');

function separateItens(productsArray){

  body.appendChild(main);
  main.append(sectionPaintings, sectionAction);
  sectionPaintings.append(nameSectionPaintings, listPaintings);
  sectionAction.append(nameSectionActions, listAction);

  nameSectionPaintings.innerText = 'Paintings';
  nameSectionActions.innerText = 'Action Figures';

  for(let i = 0; i < productsArray.length; i++){
  
    const imageProduct = document.createElement('img');
    const nameProduct = document.createElement('p');
    const priceProduct = document.createElement('p');

    imageProduct.classList.add('imgProduct');
    nameProduct.classList.add('pProduct');
    priceProduct.classList.add('pPrice');

    if (productsArray[i].type === 'Paintings'){

      imageProduct.src = productsArray[i].image;
      nameProduct.innerText = productsArray[i].name;
      priceProduct.innerText = productsArray[i].price;
      paintingsArray.push[i];

      const productPaintings = document.createElement('li');
      productPaintings.append(imageProduct, nameProduct, priceProduct);
      listPaintings.appendChild(productPaintings);

    } else if (productsArray[i].type === 'Action Figures'){

      imageProduct.src = productsArray[i].image;
      nameProduct.innerText = productsArray[i].name;
      priceProduct.innerText = productsArray[i].price;
      actionFiguresArray.push[i];
      
      const productAction = document.createElement('li');
      productAction.append(imageProduct, nameProduct, priceProduct);
      listAction.appendChild(productAction);

    }
  }
}

separateItens(productsArray);