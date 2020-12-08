

const handleClick = () => {
   const buttons = document.querySelectorAll('button') 
   for (let i = 0; i < buttons.length; i += 1) {
       buttons[i].onclick = (e) => {
           
        console.log(e.target.innerText);

        alert(e.target.innerText);
        
       }
   }
}

handleClick();

