if(window.innerWidth <= 560){
    document.getElementById("index").onclick = function(){
        $("#samuel").toggleClass("text-zero")
        $("#samuel").toggleClass("after:content-[attr(data-hover)]")
        $("#samuel").toggleClass("after:text-6xl")
        
        $("#iam").toggleClass("text-zero")
        $("#iam").toggleClass("after:content-[attr(data-hover)]")
        $("#iam").toggleClass("after:text-6xl")
    
        $("#hello").toggleClass("text-zero")
        $("#hello").toggleClass("after:content-[attr(data-hover)]")
        $("#hello").toggleClass("after:text-6xl")
    
        $("#samuel").addClass("animate__fadeInLeft")
        $("#iam").addClass("animate__fadeInLeft")
        $("#hello").addClass("animate__fadeInLeft")
        setTimeout(function(){
            $("#samuel").removeClass("animate__fadeInLeft")
            $("#iam").removeClass("animate__fadeInLeft")
            $("#hello").removeClass("animate__fadeInLeft")
        }, 1000)
    
        document.getElementById("index").onclick = function(){}
    
        $("#texts").addClass("z-40")
    }
}

try{
    document.getElementById("hello").onclick = function(){
        window.location.href = "./about.html"
    }
}
catch{}

try{
    document.getElementById("iam").onclick = function(){
        window.location.href = "./projects.html"
    }
}
catch{}

try{
    document.getElementById("samuel").onclick = function(){
        window.location.href = "./contact.html"
    }
}
catch{}

try{
    document.getElementById("gh").onclick = function(){
        window.location.href = "https://github.com/OrlatoDev"
    }
}
catch{}

try{
    document.getElementById("caif").onclick = function(){
        window.location.href = "https://cript0m0edas.web.app/"
    }
}
catch{}

try{
    document.getElementById("cls").onclick = function(){
        window.location.href = "https://covid19-live-stats.web.app/"
    }
}
catch{}

try{
    document.getElementById("dyv").onclick = function(){
        window.location.href = "https://download-ytvideo.herokuapp.com/"
    }
}
catch{}

try{
    document.getElementById("github").onclick = function(){
        window.location.href = "https://github.com/OrlatoDev"
    }
}
catch{}

try{
    document.getElementById("email").onclick = function(){
        window.location.href = "mailto:s.orlato@pm.me"
    }
}
catch{}

try{
    document.getElementById("youtube").onclick = function(){
        window.location.href = "https://www.youtube.com/channel/UCTU5-NCtr7mF0tpqjXpmWHw"
    }
}
catch{}

try{
    document.getElementById("discord").onclick = function(){
        window.location.href = "https://discord.gg/eh5TzMkZKY"
    }
}
catch{}