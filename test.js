var nmin=0;
function minn(tabs) {
 document.getElementById('tab').innerHTML+=tabs;
    for (let i = 0; i < 2; i++) {
        var x=Math.min(...tabs);
        nmin+=x;
        console.log(x);
        var p=tabs.indexOf(x)
        console.log(p)
        tabs.splice(p,1);
        console.log('supprime '+ tabs)
    }
    document.getElementById('min').innerHTML+=nmin;
}
minn([1,5,8,7]);
//  var num;
//   while (num = prompt('Entrez un nombre positif:')) {
//      if (num>=0) {
//           tabs.push(num);
//        }
//       else{
//          alert('choisir un nombre positif');
//         }
//     }
// var nmin=0;
// if (tabs.length > 0) {
//  alert(tabs.join(' '));
//  console.log(tabs)
//  document.getElementById('tab').innerHTML+=tabs;
//  for (let i = 0; i < 2; i++) {
//      var x=Math.min(...tabs);
//      nmin+=x;
//      console.log(x);
//      var p=tabs.indexOf(x)
//      console.log(p)
//      tabs.splice(p,1);
//      console.log('supprime '+ tabs)
//     }
//     document.getElementById('min').innerHTML+=nmin;
// }
// else {
//  alert('Il n\'y a aucun prénom en mémoire');
// }

// Exercice 2
// var n;
// var tab=[];
var sum=0;
// while (n = prompt('Entrez un nombre :')) {
//     tab.push(n);
//     if (n>=0) {
//        sum+=Number(n);
//     }
// } 
// if (tab.length > 0) {
//  document.getElementById('list').innerHTML+=tab;
//  document.getElementById('som').innerHTML+=sum;
// }
// else {
//     document.getElementById('list').innerHTML+='liste vide';
//     document.getElementById('som').innerHTML+=0;
// }
function summ(y) {
    if (y==[]) {
        document.getElementById('list').innerHTML+='liste vide';
      document.getElementById('som').innerHTML+=0;
    }
    else{
     for (let i = 0; i < y.length; i++) {
          if (y[i]>=0) {
              sum+=y[i];  
            }
        } 
        document.getElementById('list').innerHTML+=y;
        document.getElementById('som').innerHTML+=sum;
    }  
}
summ([-1,5,8,-7,5]);

function maj(ch) {
   var p=ch.indexOf(' ');
   console.log(p);
   var ch1=ch.charAt(0).toUpperCase();
   ch1+='.'+ch.charAt(p+1).toUpperCase();
  document.getElementById('ch').innerHTML+=ch;
  document.getElementById('sortie').innerHTML+=ch1;
    
}
maj('hana idoudi')

// var ch=prompt('Saisir une chaine de deux mots');
// var s=0;
// if (ch.match(/[ ]/g).length==1) {
//     

// }

// alert("le lion est mort ce soir".match(/[ ]/g).length);
// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//       if (splitStr.length[i] < splitStr.length) {
//         splitStr[i].charAt(0).toUpperCase();     
//       }
//          str = splitStr.join(' '); 
//          console.log(str)
//     }
//    return str;
//    }
   
//    titleCase("I'm a little Tea Pot");