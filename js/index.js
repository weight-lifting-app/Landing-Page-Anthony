const menuItems = document.querySelectorAll('.nav-items');
menuItems.forEach(function(item){
  item.addEventListener('click', function(event){
    //event.preventDefault();
  });
});
//ITEM 1
const pencilItem = document.querySelector('.pencil');
pencilItem.addEventListener('mouseenter', function(eventObject){
  pencilItem.classList.add('flash-border');
  pencilItem.classList.remove('border-blank');
});

pencilItem.addEventListener('mouseleave', function(eventObject){
  pencilItem.classList.add('border-blank');
  pencilItem.classList.remove('flash-border');
});

//ITEM2
const searchItem = document.querySelector('.search');
searchItem.addEventListener('mouseenter', function(eventObject){
  searchItem.classList.add('flash-border');
  searchItem.classList.remove('border-blank');
});

searchItem.addEventListener('mouseleave', function(eventObject){
  searchItem.classList.add('border-blank');
  searchItem.classList.remove('flash-border');
});

//ITEM 3
const dumbbellItem = document.querySelector('.dumbbell');
dumbbellItem.addEventListener('mouseenter', function(eventObject){
  dumbbellItem.classList.add('flash-border');
  dumbbellItem.classList.remove('border-blank');
});

dumbbellItem.addEventListener('mouseleave', function(eventObject){
  dumbbellItem.classList.add('border-blank');
  dumbbellItem.classList.remove('flash-border');
});

//ITEM 4
const chartItem = document.querySelector('.chart');
chartItem.addEventListener('mouseenter', function(eventObject){
  chartItem.classList.add('flash-border');
  chartItem.classList.remove('border-blank');
});

chartItem.addEventListener('mouseleave', function(eventObject){
  chartItem.classList.add('border-blank');
  chartItem.classList.remove('flash-border');
});

// function hoverEnter(){
//   blocks.forEach(block => block.classList.add('flash-border'));
//   blocks.forEach(block => block.classList.remove('border-blank'));
// }

// function hoverExit(){
//   blocks.forEach(block => block.classList.remove('flash-border'))
//   blocks.forEach(block => block.classList.add('border-blank'));
// }

class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-content');
    this.button.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
  this.content.classList.toggle('dropdown-hidden');
  }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));