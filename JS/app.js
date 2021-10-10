

window.addEventListener('DOMContentLoaded', (event) => {
  
  const menuBtn = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navBar");
  const list =document.querySelector(".list")
  const contactMe =document.querySelector("#contactMe");
  const sliders=document.querySelectorAll(".slide-in");
  const slideUp=document.querySelector(".slide-up");
  let btn = false;
  
  
  
  contactMe.addEventListener("click",()=>{
    
    navbar.classList.remove("open")
      menuBtn.classList.remove("open")
      btn=false
    
    
  })
  
  list.addEventListener("click",(e)=>{
    
   
    if(e.target)
    {
      
      navbar.classList.remove("open")
      menuBtn.classList.remove("open")
      btn=false
    
    }
    
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    e.target.parentElement.classList.add("active")
    console.log(e.target.parentElement)
  })
  
  menuBtn.addEventListener("click", () => {
   
    if(btn){
      
      navbar.classList.remove("open")
      menuBtn.classList.remove("open")
      btn=false
    }else{
      
      navbar.classList.add("open")
      menuBtn.classList.add("open")
      btn=true
    }
    
    
  });
  
  // observer
  
  const appearOptions={
    
  threshold:0,
  rootMargin:"0px 0px -200px 0px"
    
    
  }
  
  const appearOnScroll=new IntersectionObserver(function(
    entries,
    appearOnScroll
    
  ){
    
    entries.forEach(entry=>{
      
      if(!entry.isIntersecting){
        
        return;
        
      }else{
        
        entry.target.classList.add('appear')
        appearOnScroll.unobserve(entry.target)
        
      }
      
    })
    
  },appearOptions)
  
  
  sliders.forEach(slider=>{
    
    
    appearOnScroll.observe(slider)
    
  })
  
  appearOnScroll.observe(slideUp)
});

