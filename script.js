window.addEventListener('load', (event) => {
    var win = window,
        doc = document,
        body = document.getElementsByTagName("body"),
        containers = document.getElementsByClassName("container"),
        x = win.innerWidth || body.clientWidth,
        y = win.innerHeight|| body.clientHeight;

    
    document.body.style.height = y + "px";
    document.body.style.width = x + "px";


    for (var i = 0; i < containers.length; i++) {
        containers[i].style.height = y + "px";
        containers[i].style.width = x + "px";
    }
    

    window.addEventListener("resize", function(){
        var x = win.innerWidth || body.clientWidth,
        y = win.innerHeight|| body.clientHeight;
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.height = y + "px";
            containers[i].style.width = x + "px";
        }
        document.body.style.height = y + "px";
        document.body.style.width = x + "px";   
    });

    var tl = gsap.timeline();


    tl.to(".container", {ease: Power1.easeOut ,opacity: 1, duration: 1 }, .4);

    return tl;
  });