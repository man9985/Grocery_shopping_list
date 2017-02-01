var groceryList = [
{
	name: "Milk",
	price: 3.50
},
{
	name: "Cereal",
	price: 3.00
},
{
	name: "Eggs",
	price: 2.50
}
];

var list = document.getElementById("list");
var foodTotal = document.getElementById("foodTotal");
var total = 0;
var button = document.getElementById("button");

button.addEventListener('click', function () {
  var userFood = document.getElementById('food').value;
  var userPrice = document.getElementById('price').value;
  var newUserFood = document.createElement("li");
  newUserFood.innerText += userFood + ": $" + userPrice;
  list.appendChild(newUserFood);
  total += parseFloat(userPrice);
  foodTotal.innerText = "Total: $" + total;
});

groceryList.forEach(function(item){
	var newItem = document.createElement("li");
	newItem.innerText += item.name + ": $" + item.price;
	list.appendChild(newItem);
	total += item.price;	
});

