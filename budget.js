//selectors to display and not display content


function select_ti(){
  select_element('ti_content');
  remove_element('le_content');
  remove_element('t_content');
  remove_element('f_content');
  remove_element('c_content');
  remove_element('h_content');
  remove_element('l_content');

}
function select_le(){
  select_element('le_content');
  remove_element('ti_content');
  remove_element('t_content');
  remove_element('f_content');
  remove_element('c_content');
  remove_element('h_content');
  remove_element('l_content');

}
function select_t(){
  select_element('t_content');
  remove_element('ti_content');
  remove_element('le_content');
  remove_element('f_content');
  remove_element('c_content');
  remove_element('h_content');
  remove_element('l_content');

}
function select_f(){
  select_element('f_content');
  remove_element('ti_content');
  remove_element('le_content');
  remove_element('t_content');
  remove_element('c_content');
  remove_element('h_content');
  remove_element('l_content');

}
function select_c(){
  select_element('c_content');
  remove_element('ti_content');
  remove_element('le_content');
  remove_element('t_content');
  remove_element('f_content');
  remove_element('h_content');
  remove_element('l_content');

}
function select_h(){
  select_element('h_content');
  remove_element('ti_content');
  remove_element('le_content');
  remove_element('t_content');
  remove_element('f_content');
  remove_element('c_content');
  remove_element('l_content');

}
function select_l(){
  select_element('l_content');
  remove_element('ti_content');
  remove_element('le_content');
  remove_element('t_content');
  remove_element('f_content');
  remove_element('c_content');
  remove_element('h_content');

}

//selector to display of hidden and hide if displayed
function select_element(content){
  var element=document.getElementById(content);
  if (element.style.visibility=='visible'){
    remove_element(content);
  }
  else {
    add_element(content);

  }
}

//selector to hide content
function remove_element(element){
  var element=document.getElementById(element);
  element.style.visibility='hidden';
  element.style.height='0px';

}

//selector to show content

function add_element(element){
  var element=document.getElementById(element);
  element.style.visibility='visible';
  element.style.height='50%';

}

//variables
//income variables array is for every income variable
//values[0] is for the income, while the rest is for each respective epense

var income=[0.0,0.0,0.0,0.0,0.001];
var values=[0.0,0.0,0.0,0.0,0.0,0.0,0.0];
var total=0.0;

//takes a value and multiplies by option 1,2,3,4,5 that stand for daily, weekly, bi weekly, monthly, Yearly
//returns a result of the expense or income adjusted to the monthly status
function select_option(value,option){

  var select=document.getElementById(option);
  value=parseFloat(value);


  if (select.value==1) {
    return value*30.00;
  }
  if (select.value==2) {
    return value*4.00;
  }
  if (select.value==3) {
    return value*2.00;
  }
  if (select.value==4) {
    return value;
  }
  if (select.value==5) {
    return +value/12.00;
  }
  console.log(value)





}


function addti(){ //function for total income
  income[0]=parseFloat(document.getElementById('mi1').value);
  income[1]=parseFloat(document.getElementById('mi2').value);
  income[2]=parseFloat(document.getElementById('mi3').value);
  income[3]=parseFloat(document.getElementById('mi4').value);
  income[4]=parseFloat(document.getElementById('mi5').value);


values[0]=income[0]+income[1]+income[2]+income[3]+income[4];
values[0]=select_option(values[0],'ti_period');
document.getElementById('ti_button').innerHTML="Total Income \u2713";
remove_element('ti_content');
}

function addle(){ //function for living expenses
  value1=parseFloat(document.getElementById('le1').value);
  value2=parseFloat(document.getElementById('le2').value);
  value3=parseFloat(document.getElementById('le3').value);
  value4=parseFloat(document.getElementById('le4').value);
  value5=parseFloat(document.getElementById('le5').value);
  value6=parseFloat(document.getElementById('le6').value);
  value7=parseFloat(document.getElementById('le7').value);

  values[1]=value1+value2+value3+value4+value5+value6+value7;
  values[1]=select_option(values[1],'le_period');
  document.getElementById('le_button').innerHTML="Living Expenses \u2713";
   remove_element('le_content');
}

function addt(){ //function for transportation
  value1=parseFloat(document.getElementById('t1').value);
  value2=parseFloat(document.getElementById('t2').value);
  value3=parseFloat(document.getElementById('t3').value);
  value4=parseFloat(document.getElementById('t4').value);


values[2]=value1+value2+value3+value4;
values[2]=select_option(values[2],'t_period');

document.getElementById('t_button').innerHTML="Transportation \u2713";
remove_element('t_content');

}


function addf(){ //function for financial
  value1=parseFloat(document.getElementById('f1').value);
  value2=parseFloat(document.getElementById('f2').value);
  value3=parseFloat(document.getElementById('f3').value);
  value4=parseFloat(document.getElementById('f4').value);
  value5=parseFloat(document.getElementById('f5').value);
  value6=parseFloat(document.getElementById('f6').value);
  value7=parseFloat(document.getElementById('f7').value);

values[3]=value1+value2+value3+value4+value5+value6+value7;
values[3]=select_option(values[3],'f_period');

document.getElementById('f_button').innerHTML="Financial \u2713";
remove_element('f_content');


}


function addc(){ //function for childcare
  value1=parseFloat(document.getElementById('c1').value);
  value2=parseFloat(document.getElementById('c2').value);
  value3=parseFloat(document.getElementById('c3').value);

  values[4]=value1+value2+value3;
  values[4]=select_option(values[4],'c_period');

  document.getElementById('c_button').innerHTML="Child Care \u2713";
  remove_element('c_content');
}


function addh(){ //function for health care
  value1=parseFloat(document.getElementById('h1').value);
  value2=parseFloat(document.getElementById('h2').value);
  value3=parseFloat(document.getElementById('h3').value);
  value4=parseFloat(document.getElementById('h4').value);
  value5=parseFloat(document.getElementById('h5').value);

  values[5]=value1+value2+value3+value4+value5;
  values[5]=select_option(values[5],'h_period');

  document.getElementById('h_button').innerHTML="Health Care \u2713";
  remove_element('h_content');
}


function addl(){ //function for leisure
  value1=parseFloat(document.getElementById('l1').value);
  value2=parseFloat(document.getElementById('l2').value);
  value3=parseFloat(document.getElementById('l3').value);
  value4=parseFloat(document.getElementById('l4').value);
  value5=parseFloat(document.getElementById('l5').value);
  value6=parseFloat(document.getElementById('l6').value);


  values[6]=value1+value2+value3+value4+value5+value6;
  values[6]=select_option(values[6],'l_period');

  document.getElementById('l_button').innerHTML="Leisure \u2713";
remove_element('l_content');
}

//hides all content and displays the summary div
//precondition: user inputted an income and user reported an expenses
//postcondition page of two google graphs that show the budget summary
function submit(){

  var expenses=0.0;

  for(i=1;i<7;i++){
    expenses+=values[i];
  }

  total=values[0];
  total=total-expenses;
  if(values[0]==0  ){
    window.alert("You did not report any income!")
  }
  else if(expenses==0 ){
    window.alert("You did not report any expenses!")
  }
  else if(total<0 ){
    window.alert("Your expenses are more than your income!")
  }
  else{
  var page=document.getElementById('options');
  page.style.visibility='hidden';
  page.style.height='0px';

  remove_element('ti_content');
  remove_element('le_content');
  remove_element('t_content');
  remove_element('f_content');
  remove_element('c_content');
  remove_element('h_content');
  remove_element('l_content');
  remove_element('forward_button');

  var display=document.getElementById('summary')
  display.style.marginTop='-10%';
  display.style.visibility='visible';


  document.getElementById('funds').innerHTML="Total Available Monthly Funds: "+total.toFixed(2);

  loadcharts();
  }
}

function goback(){
  var display=document.getElementById('summary')
  display.style.marginTop='+10%';
  display.style.visibility='hidden';
  var page=document.getElementById('options');
  page.style.visibility='visible';
  page.style.height='100%';
  var forward=document.getElementById('forward_button')
  forward.style.visibility='visible';
  forward.style.height='100%';


}
