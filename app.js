



let tl = gsap.timeline();
tl.from(".line1 h1",{
    y:150,
    stagger:0.2,
    duration :0.6,
    delay:0.5,
})
tl.from(".line1-p1 , .line1 h2",{
    opacity:0,
    onStart:()=>{
        let h5timer =  document.querySelector(".line1-p1 h5");
        let grow =0;
        setInterval(function(){
        if(grow<100){
            h5timer.innerHTML = grow++;
        }else h5timer.innerHTML = grow;
        },25)
    }
})
tl.to(".line1 h2",{
    animationName:"anime",
    opacity:1
})
tl.to(".loader" ,{
    opacity:0,
    duration:0.4,
    delay:2.5,
})
tl.from(".page1",{
    y:1600,
    delay:0.2,
    duration:0.5,
    opacity:0,
    ease: "power4"
})
tl.to(".loader",{
    display:"none"
})