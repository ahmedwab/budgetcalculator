var val=13; //number used for caesar cipher


function selecting(){


  if (document.getElementById('selector').value=='Caesar')
  {
    document.getElementById('num').style.visibility='visible';
  }
  else {
      document.getElementById('num').style.visibility='hidden';
  }

}


function encrypt(){



  if (document.getElementById('selector').value=='Caesar')
  {
    caesar_encrypt(val);
  }
  else if (document.getElementById('selector').value=='Atbash')
  {
    atbash_encrypt();
  }
  else if (document.getElementById('selector').value=='ROT13')
  {
    caesar_encrypt(13);
  }

}
function decrypt(){



  if (document.getElementById('selector').value=='Caesar')
  {
    caesar_decrypt(val);
  }
  else if (document.getElementById('selector').value=='Atbash')
  {
    atbash_decrypt();
  }
  else if (document.getElementById('selector').value=='ROT13')
  {
    caesar_decrypt(13);
  }


}




function isAlpha(c){ //boolean is a letter
  var alphabet="abcdefghijklmnopqrstuvwxyz";
  for(var i = 0 ; i < alphabet.length; i++){
    if(c==alphabet[i]) return true;
  }
  return false;


}

//encryption functions for atbash encryption
function atbash_encrypt(){ //function to encrypt text
  var cipher="";

  var input=document.getElementById('input');
  var ouptut=document.getElementById('output');

  for(var i = 0 ; i < input.value.length; i++){
    cipher += atbash_encrypt_change(input.value[i]);
  }
    output.value=cipher;

}
function atbash_decrypt(){ //function to decrypt text
  var cipher="";

  var output=document.getElementById('input');
  var input=document.getElementById('output');

  for(var i = 0 ; i < input.value.length; i++){
    cipher += atbash_encrypt_change(input.value[i]);
  }
    output.value=cipher;



}

function atbash_encrypt_change(c){ //encrypt character
  var alphabet="abcdefghijklmnopqrstuvwxyz";
  var reversed="zyxwvutsrqponmlkjihgfedcba";
  c=c.toLowerCase();
  if (!isAlpha(c)) return c;
  var pos=0;
  for(var i = 0 ; i < alphabet.length; i++){
    if(c==alphabet[i]) pos=i;
  }
  return reversed[pos];



}




//encryption functions for caesar's cipher

function caesar_encrypt(cipher_value){ //function to encrypt text
  var cipher="";

  var input=document.getElementById('input');
  var ouptut=document.getElementById('output');

  for(var i = 0 ; i < input.value.length; i++){
    cipher += caesar_encrypt_change(input.value[i],cipher_value);
  }
    output.value=cipher;



}

function caesar_decrypt(cipher_value){ //function to decrypt text
  var cipher="";

  var output=document.getElementById('input');
  var input=document.getElementById('output');

  for(var i = 0 ; i < input.value.length; i++){
    cipher += caesar_encrypt_change(input.value[i],26-cipher_value);
  }
    output.value=cipher;



}

function caesar_encrypt_change(c,r){ //encrypt character
  var alphabet="abcdefghijklmnopqrstuvwxyz";
  c=c.toLowerCase();
  if (!isAlpha(c)) return c;
  var pos=0;
  for(var i = 0 ; i < alphabet.length; i++){
    if(c==alphabet[i]) pos=i;
  }
  return alphabet[(pos+r)%26];



}

function changenum(x){//change cipher number
  if(x==1){
    val++;
    val=val%26;
  }
  else val--;
  if(val<0) val=val+25;
    document.getElementById('val').innerHTML="+"+val;
}

//Atbash Cipher
//The Atbash cipher is a substitution cipher with a specific key where the letters of the alphabet are reversed. I.e. all As are replaced with Zs, all Bs are replaced with Ys, and so on.

//ROT13 Cipher
//The ROT13 cipher is not really a cipher, more just a way to obscure information temporarily. It is often used to hide e.g. movie spoilers.

//Caesar Cipher
//The caesar cipher (a.k.a the shift cipher, Caesar's Code or Caesar Shift) is one of the earliest known and simplest ciphers.
