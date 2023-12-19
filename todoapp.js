let TodoArray = [];

Add = () => {
    let getdate = document.querySelector('.date');
    let gettitle = document.querySelector('.title');
    let getdes = document.querySelector('.message');

    gettitleElement = gettitle.value;
    getdateEelement = getdate.value;
    getdesElement = getdes.value;
 
    TodoArray.push(
        {
            date : getdateEelement,
            title : gettitleElement,
            msg : getdesElement,
        }
    );


    gettitle.value = '';
    getdate.value = '';
    getdes.value = '';
    Display();
    localStorage.setItem('massege', JSON.stringify(TodoArray));

   
}

heading = () =>{
let getheading = document.querySelector('.heading');
getheading.innerHTML= `
<h3>Date</h3>
<h3>Title</h3>
<h3>Description</h3>
<h3>Delete</h3>


`
}
heading();

Display = () => {
    let getoutcontainer = document.querySelector('.output-container');
   
    
   
     let Newhtml = '';

    for(let i = 0; i < TodoArray.length; i++){
        let showdate = TodoArray[i].date;
        let showTitle = TodoArray[i].title;
        let showdes = TodoArray[i].msg;
    
    Newhtml += `

    <div class="msg-container">
    <p class="showdate">${showdate}</p>
     
    <p class="showTitle">${showTitle}</p>
   
   <div class="showdes">
   <p>${showdes}</p>
   </div>
   <button class="delete" onclick = "TodoArray.splice(${i},1); Display();"><i class="fa-solid fa-trash"></i></button>
    </div>
    `

    }
    getoutcontainer.innerHTML = Newhtml;


}




