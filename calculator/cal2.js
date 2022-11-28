let string = "";
let buttons = document.querySelectorAll('button');
var ans=document.querySelector('input');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
    ans.value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
    ans.value = string;
    }
    else if(e.target.innerHTML == 'del'){
      let len=string.length;
     string=string.substring(0,len-1);
     ans.value=string;
    }
    else{ 
    console.log(e.target);
    string = string + e.target.innerHTML;
ans.value = string;
      }
  })
})
