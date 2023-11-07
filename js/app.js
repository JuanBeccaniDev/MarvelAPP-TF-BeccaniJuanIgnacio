
const marvel = {
  render: ()=> {
    const urlAPI ='https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=e5a260751cdeab3549f6f46ec52156db&hash=c6746913877bac56bd0be06f42342eb9';
    const container = document.querySelector('#marvel-row');
    let contentHTML ='';


    fetch (urlAPI)
    .then(res=> res.json())
    .then((json)=>{
        for(const comics of json.data.results){
           let  urlComics = comics.urls[0].url;
           contentHTML +=`
           
           <div class= "col-md-4">
            <a href="${urlComics}" target="_blank">
                 <img src="${comics.thumbnail.path}.${comics.thumbnail.extension}" alt="${comics.name}.${comics.description }.${comics.image}" class="img-thumbnail">
           </a>
             <h3 class="title">${comics.title} </h3>
             </div>

             
        </div>`
        }
        container.innerHTML = contentHTML
    })
}
};
marvel.render()
// local Storages de marvel App

localStorage.setItem('urlComics', 'comics');
const valor = localStorage.getItem('comics');
localStorage.removeItem('comics');



// esta libreria se activa si tocamos el boton que dice Correo Novedades
const sweetAlert = document.getElementById('sweetAlert')
sweetAlert.addEventListener("click",async ()=>{
  
    const { value: email } = await Swal.fire({
        title: "Input email address",
        input: "email",
        inputLabel: "Your email address",
        inputPlaceholder: "Enter your email address"
      });
      if (email) {
        Swal.fire(`Entered email: ${email}`);
      }
  
}) 


  
 
    const forms = document.querySelectorAll('.needs-validation')
  
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })



