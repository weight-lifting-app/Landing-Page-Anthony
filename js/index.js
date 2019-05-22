class ListItem {
  constructor(item){
  this.item = item;
  this.flashBackground = this.item.querySelector('.flash-background');
  this.normalBackground = this.item.querySelector('.normal-background');
  };
};


const menuItems = document.querySelectorAll('.nav-items');
menuItems.forEach(function(item){
  item.addEventListener('click', function(event){
    //event.preventDefault();
  });
});

const featureBlocks = document.querySelectorAll('.list-item');
featureBlocks.forEach((item) => new ListItem(item));

featureBlocks.forEach(function(item){
  item.addEventListener('click', function(event){
    event.style.border = "solid white 5px";
  });
})