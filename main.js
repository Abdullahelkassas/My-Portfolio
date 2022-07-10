

let links = document.querySelectorAll(".nav-link")
let about = document.querySelector(".about")
let home = document.querySelector(".home")
let section= document.querySelector("#skills1")
let spans = document.querySelectorAll(".progress span")



links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');        
    });
});

let upup = document.querySelector(".upup")

window.onscroll= function(){
window.scrollY >= 300 ? upup.classList.add("show"):upup.classList.remove("show")
if(window.scrollY >= (section.offsetTop-300)){
    spans.forEach(span=> {
    span.style.width= span.dataset.width
    })
    }else{
        spans.forEach(span=> {
            span.style.width= 0
            })
    }
}


upup.onclick= function(){

window.scrollTo({
    top:0,
    behavior:"smooth"
    }) 
links.forEach(link => link.classList.remove('active'));
home.classList.add("active")
}
//////
// 

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");

      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your message!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

