/*====================================================
  MYSTERY DEV PORTFOLIO
  Part 1 - Core Animations
====================================================*/


/* ===========================
      Loading Screen
=========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        },500);

    },1200);

});



/* ===========================
      Typed Text
=========================== */

new Typed("#typing",{

    strings:[

        "Professional Web Developer",

        "Frontend Developer",

        "Responsive Website Expert",

        "UI / UX Designer"

    ],

    typeSpeed:70,

    backSpeed:45,

    backDelay:1800,

    loop:true

});



/* ===========================
     Scroll Reveal
=========================== */

const sections=document.querySelectorAll(".section");

function revealSections(){

    sections.forEach(section=>{

        const top=section.getBoundingClientRect().top;

        const screen=window.innerHeight;

        if(top<screen-120){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();



/* ===========================
       Counter Animation
=========================== */

const counters=document.querySelectorAll(".count");

let started=false;

function startCounter(){

    const stats=document.getElementById("stats");

    const trigger=stats.getBoundingClientRect().top;

    if(trigger<window.innerHeight && !started){

        started=true;

        counters.forEach(counter=>{

            const target=+counter.dataset.target;

            let count=0;

            const speed=target/120;

            function update(){

                count+=speed;

                if(count<target){

                    counter.innerHTML=Math.floor(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerHTML=target;

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll",startCounter);

startCounter();



/* ===========================
      Back To Top
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};



/* ===========================
    Active Navbar Links
=========================== */

const navItems=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    document.querySelectorAll("section").forEach(section=>{

        const top=section.offsetTop-150;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

  navItems.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href")==="#" + current){

        link.classList.add("active");


        }

    });

});
/*====================================================
  PART 2 - PARTICLES / CURSOR / CONTACT / EFFECTS
====================================================*/


/* ===========================
        Particles
=========================== */

particlesJS("particles-js",{

particles:{

number:{
value:80
},

color:{
value:"#00d9ff"
},

shape:{
type:"circle"
},

opacity:{
value:0.5
},

size:{
value:3
},

line_linked:{
enable:true,
distance:150,
color:"#00d9ff",
opacity:.4,
width:1
},

move:{
enable:true,
speed:2
}

},

interactivity:{

detect_on:"canvas",

events:{

onhover:{
enable:true,
mode:"grab"
},

onclick:{
enable:true,
mode:"push"
}

},

modes:{

grab:{
distance:180
},

push:{
particles_nb:4
}

}

},

retina_detect:true

});




/* ===========================
        Mouse Glow
=========================== */

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});




/* ===========================
      Contact Form
=========================== */

const form=document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=form.querySelectorAll("input,textarea");

let empty=false;

inputs.forEach(input=>{

if(input.value.trim()==""){

empty=true;

input.style.border="2px solid red";

}else{

input.style.border="none";

}

});

if(empty){

alert("Please fill all fields.");

return;

}

alert("Thank you! Your message has been received.");

form.reset();

});




/* ===========================
      Smooth Anchor Scroll
=========================== */

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});




/* ===========================
      Navbar Shadow
=========================== */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.boxShadow="0 5px 25px rgba(0,217,255,.25)";

}else{

header.style.boxShadow="none";

}

});




/* ===========================
      Floating Cards Delay
=========================== */

document.querySelectorAll(

".service-card,.project-card,.price-card"

).forEach((card,index)=>{

card.style.animationDelay=(index*.25)+"s";

});
/* ===========================
   Mobile Menu
=========================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// Close menu after clicking a link

document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});




/* ===========================
       Console Message
=========================== */

console.log("%cWelcome To Mystery Dev Portfolio",

"font-size:22px;color:#00d9ff;font-weight:bold");

console.log("%cDesigned by Mystery Ahmed Khan",

"color:white;font-size:14px;");




/* ===========================
      Random Background Glow
=========================== */

setInterval(()=>{

document.body.style.backgroundPosition=

Math.floor(Math.random()*100)+"% "+

Math.floor(Math.random()*100)+"%";

},6000);
