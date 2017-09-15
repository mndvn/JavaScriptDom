// Java Script can be used to read, write and etc... to DOM!
/* console.dir(document);
console.log(document.html);
console.log(document.domain);
console.log(document.URL);
console.log(document.body); */

function Changer(){
    var newColor = document.getElementById("name");
    newColor.style.color = 'red' ;
}

function ReChanger(){
    var exColor = document.getElementById("name");
    exColor.style.color = 'black';
}

