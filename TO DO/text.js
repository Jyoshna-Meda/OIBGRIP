var shelf1 = document.querySelector('#con1 ul');
var shelf2=document.querySelector('#con2 ul');
shelf2.addEventListener('click',function(e){
    if(e.target.className=="delete"){
        const em=e.target.parentElement;
        shelf2.removeChild(em);
    }
})
shelf1.addEventListener("click",function(ee){
 if(ee.target.className=="delete"){
   const ele=ee.target.parentElement;
   shelf1.removeChild(ele);
}

if(ee.target.className=="edit"){
    const ele=ee.target.parentElement;
    var mm = ele.childNodes;
    var x = mm[0].textContent.toLowerCase();
    var str1="";
    var str2="";
        y=x.charAt(0);
        if(y.match(/[a-z]/i)){
            str1=mm[0];
            str2=mm[1];
        }
        else{
            str1=mm[1];
            str2=mm[3];
        }

        str1.contentEditable = true;
        str2.contentEditable=true;
        str1.style.backgroundColor = "#FFF";
        str2.style.backgroundColor = "#FFF";

}
if(ee.target.className=="save"){
    const ele=ee.target.parentElement;
    var mm = ele.childNodes;
    var x = mm[0].textContent.toLowerCase();
    var str1="";
    var str2="";
        y=x.charAt(0);
        if(y.match(/[a-z]/i)){
            str1=mm[0];
            str2=mm[1];
        }
        else{
            str1=mm[1];
            str2=mm[3];
        }

        str1.contentEditable = false;
        str2.contentEditable=false;
        str1.style.backgroundColor = "#e79ac6";
        str2.style.backgroundColor = "#e79ac6";
}

if(ee.target.className=="finish"){

        const ele=ee.target.parentElement;

        var mm = ele.childNodes;

        const li= document.createElement('li');
        li.classList.add('task');
        const name= document.createElement('span');
        const dess= document.createElement('span');
        const edit= document.createElement('span');
        const finish= document.createElement('span');
        const deletebtn= document.createElement('span');
        const save= document.createElement('span');

        li.appendChild(name);
        li.appendChild(dess);
        li.appendChild(edit);
        li.appendChild(save);
        li.appendChild(deletebtn);
        li.appendChild(finish);
        


        var x = mm[0].textContent.toLowerCase();
        y=x.charAt(0);
        if(y.match(/[a-z]/i)){
            name.textContent=mm[0].textContent;
            dess.textContent=mm[1].textContent;
        }
        else{
            name.textContent=mm[1].textContent;
            dess.textContent=mm[3].textContent;
        }

        
        edit.textContent='Edit';
        save.textContent='Save';
        deletebtn.textContent='Delete';
        finish.textContent='Finished';
        finish.style.backgroundColor="green";

        name.classList.add('name');
        dess.classList.add('dess');
        edit.classList.add('edit');
        finish.classList.add('finish');
        deletebtn.classList.add('delete');
        save.classList.add('save');
         shelf2.append(li);
        shelf1.removeChild(ele);
    }
});

var Add= document.forms['input-det'];
 
Add.addEventListener('submit',function(e){
    e.preventDefault();
    var names = Add.querySelector('.add-title').value;
    var des = Add.querySelector('.add-des').value;

    if(names && des){
        
    }
    else{
        alert('Enter the valid Information');
        return;
    }
    
    const li= document.createElement('li');
    li.classList.add('task');
    const name= document.createElement('span');
    const dess= document.createElement('span');
    const edit= document.createElement('span');
    const finish= document.createElement('span');
    const deletebtn= document.createElement('span');
    const save= document.createElement('span');

    li.appendChild(name);
    li.appendChild(dess);
    li.appendChild(edit);
    li.appendChild(save);
    li.appendChild(deletebtn);
    li.appendChild(finish);

    name.textContent=names;
    dess.textContent=des;
    edit.textContent='Edit';
    save.textContent='Save';
    finish.textContent='Pending';
    deletebtn.textContent='Delete';

    name.classList.add('name');
    dess.classList.add('dess');
    edit.classList.add('edit');
    finish.classList.add('finish');
    deletebtn.classList.add('delete');
    save.classList.add('save');

    shelf1.append(li);


})