var totalincome=0;
var livingexpenses=0;
var transportation=0;
var childcare=0;
var healthcare=0;
var financial=0;
var leisure=0;
let total=0;

function dropdown(name){

  document.getElementById('dropb').innerHTML=name;
  var current=document.getElementById('exp');

  if (name=="Total Income") {
    current.src="total_income.html";
  }
  if (name=="Living Expenses") {
    current.src="living_expenses.html";
  }
  if (name=="Transportation") {
    current.src="transportation.html";
  }
  if (name=="Child Care") {
    current.src="childcare.html";
  }
  if (name=="Health Care") {
    current.src="healthcare.html";
  }
  if (name=="Financial") {
    current.src="financial.html";
  }
  if (name=="Leisure") {
    current.src="leisure.html";
  }





}

function addti(){ //function for total income
  var value1=document.getElementById('mi1').value;
  var value2=document.getElementById('mi2').value;
  var value3=document.getElementById('mi3').value;
  var value4=document.getElementById('mi4').value;
  var value5=document.getElementById('mi5').value;
  totalincome=totalincome+parseFloat(value1)+parseFloat(value2)+parseFloat(value3)+parseFloat(value4)+parseFloat(value5);
}
function addle(){ //function for living expenses

  var value1=document.getElementById('le1').value;
  var value2=document.getElementById('le2').value;
  var value3=document.getElementById('le3').value;
  var value4=document.getElementById('le4').value;
  var value5=document.getElementById('le5').value;
  var value6=document.getElementById('le6').value;
  var value7=document.getElementById('le7').value;

  livingexpenses=livingexpenses+parseFloat(value1)+parseFloat(value2)+parseFloat(value3)+parseFloat(value4)+parseFloat(value5)+parseFloat(value6)+parseFloat(value7);
  total=livingexpenses+total;

}
function addt(){ //function foe l=transportation costs
  var value1=document.getElementById('t1').value;
  var value2=document.getElementById('t2').value;
  var value3=document.getElementById('t3').value;
  var value4=document.getElementById('t4').value;
  transportation=transportation+parseFloat(value1)+parseFloat(value2)+parseFloat(value3)+parseFloat(value4);




}
function addc(){ //function for childcare costs
  var value1=document.getElementById('c1').value;
  var value2=document.getElementById('c2').value;
  var value3=document.getElementById('c3').value;
  childcare=childcare+parseFloat(value1)+parseFloat(value2)+parseFloat(value3);




}
function addh(){//function foe healthcare costs
  var value1=document.getElementById('h1').value;
  var value2=document.getElementById('h2').value;
  var value3=document.getElementById('h3').value;
  var value4=document.getElementById('h4').value;
  var value5=document.getElementById('h5').value;
  healthcare=healthcare+parseFloat(value1)+parseFloat(value2)+parseFloat(value3)+parseFloat(value4)+parseFloat(value5);




}
function addf(){// function for financials cost
  var value1=document.getElementById('f1').value;
  var value2=document.getElementById('f2').value;
  var value3=document.getElementById('f3').value;
  var value4=document.getElementById('f4').value;
  var value5=document.getElementById('f5').value;
  var value6=document.getElementById('f6').value;
  var value7=document.getElementById('f7').value;

  financial=financial+parseFloat(value1)+parseFloat(value2)+parseFloat(value3)+parseFloat(value4)+parseFloat(value5)+parseFloat(value6)+parseFloat(value7);




}
function addl(){//function for leisure costs
  var value1=document.getElementById('l1').value;
  var value2=document.getElementById('l2').value;
  var value3=document.getElementById('l3').value;
  var value4=document.getElementById('l4').value;
  var value5=document.getElementById('l5').value;
  var value6=document.getElementById('l6').value;

  leisure=leisure+parseFloat(value1)+parseFloat(value2)+parseFloat(value3)+parseFloat(value4)+parseFloat(value5)+parseFloat(value6);



}
function submit(){// submit button to load summary of all financial information
  document.getElementById('exp').src="summary.html";
  document.getElementById('dropb').innerHTML="Summary";


}
