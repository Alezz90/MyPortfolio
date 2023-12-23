//varibles
const Upbutton = document.getElementById("UpArrow");
const sections = document.querySelectorAll("section");


document.getElementById("CertificateButton").addEventListener("click", () => {
  document.getElementById("CertificateID").scrollIntoView({ behavior: "smooth" });
})
document.getElementById("SkillButton").addEventListener("click", () => {
  document.getElementById("SkillID").scrollIntoView({ behavior: "smooth" });
})
document.getElementById("MyWorkButton").addEventListener("click", () => {
  document.getElementById("ProjectID").scrollIntoView({ behavior: "smooth" });
})
document.getElementById("ContactButton").addEventListener("click", () => {
  document.getElementById("ContactMeID").scrollIntoView({ behavior: "smooth" });
})



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   Upbutton.style.display = "block";
   
  } else {
   Upbutton.style.display = "none";
}
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  }

  const MyScrolStop = callback => {
    let ScrollWork;
    window.addEventListener('scroll', e => {
        clearTimeout(ScrollWork);
        ScrollWork = setTimeout(() => {callback();}, 1500);
      },
      false
    );
  };
  // on scrollstop up
  MyScrolStop(() => {
    Upbutton.style.display="none";
    
   
  });

 