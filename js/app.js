'use strict';

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');
let leftImageIndex;
let middleImageIndex;
let rightImageIndex;
let maxAttempts = 25;
let attempts = 0;

function Product(name, source) {

    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shows = 0;
    Product.allProducts.push(this);

}

Product.allProducts = [];

new Product('bag', 'images/bag.jpg');
new Product('banana', 'images/banana.jpg');
new Product('bathroom', 'images/bathroom.jpg');
new Product('boots', 'images/boots.jpg');
new Product('breakfast', 'images/breakfast.jpg');
new Product('bubblegum', 'images/bubblegum.jpg');
new Product('chair', 'images/chair.jpg');
new Product('cthulhu', 'images/cthulhu.jpg');
new Product('dog-duck', 'images/dog-duck.jpg');
new Product('dragon', 'images/dragon.jpg');
new Product('pen', 'images/pen.jpg');
new Product('pet-sweep', 'images/pet-sweep.jpg');
new Product('scissors', 'images/scissors.jpg');
new Product('shark', 'images/shark.jpg');
new Product('sweep', 'images/sweep.png');
new Product('tauntaun', 'images/tauntaun.jpg');
new Product('unicorn', 'images/unicorn.jpg');
new Product('usb', 'images/usb.gif');
new Product('water-can', 'images/water-can.jpg');
new Product('wine-glass', 'images/wine-glass.jpg');

function generateRandomIndex() {
    return Math.floor(Math.random() * Product.allProducts.length);
}


function renderThreeImages() {

    do {
        leftImageIndex = generateRandomIndex();
        middleImageIndex = generateRandomIndex();
        rightImageIndex = generateRandomIndex();
    } while ((leftImageIndex === rightImageIndex) || (leftImageIndex === middleImageIndex) || (rightImageIndex === middleImageIndex))


    leftImageElement.src = Product.allProducts[leftImageIndex].source;
    leftImageElement.setAttribute('width', '250px');
    leftImageElement.setAttribute('height', '250px');
    middleImageElement.src = Product.allProducts[middleImageIndex].source;
    middleImageElement.setAttribute('width', '250px');
    middleImageElement.setAttribute('height', '250px');
    rightImageElement.src = Product.allProducts[rightImageIndex].source;
    rightImageElement.setAttribute('width', '250px');
    rightImageElement.setAttribute('height', '250px');

    Product.allProducts[leftImageIndex].shows++;
    Product.allProducts[middleImageIndex].shows++;
    Product.allProducts[rightImageIndex].shows++;


}

renderThreeImages();

leftImageElement.addEventListener('click', handleUserClick);
middleImageElement.addEventListener('click', handleUserClick);
rightImageElement.addEventListener('click', handleUserClick);

function handleUserClick(event) {
    // give the user 10 tries to click after that show result
    
  
    console.log(event.target.id);
  
    if (attempts<maxAttempts){

      if(event.target.id ==='left-image'){

        Product.allProducts[leftImageIndex].votes++;  

      }else if (event.target.id ==='middle-image'){

        Product.allProducts[middleImageIndex].votes++;  
  
      }else{

        Product.allProducts[rightImageIndex].votes++; 
  
      }
      attempts++;
      renderThreeImages();
  
    }
    else{
      
      let list=document.getElementById('results-list');
      let result;
      for(let i=0;i<Product.allProducts.length;i++){
        result=document.createElement('li');
        list.appendChild(result);
        result.textContent = (Product.allProducts[i].name).charAt(0).toUpperCase() + (Product.allProducts[i].name).slice(1) +  ' had ' + Product.allProducts[i].votes + ' votes, was seen ' + Product.allProducts[i].shows + ' Times' ;
      }
      leftImageElement.removeEventListener('click',handleUserClick);
      middleImageElement.removeEventListener('click',handleUserClick);
      rightImageElement.removeEventListener('click',handleUserClick);
  
  
    }
  }