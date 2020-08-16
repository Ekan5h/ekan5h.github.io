flag = true;
function startTyping(){
    content = "<font color=\"lime\"><b>ekan5h@github</b></font> <font color=\"cyan\">~ $ </font>";
    a = document.getElementById("terminal");
    a.style.minHeight="375px";
    a.innerHTML = content+'_';
    input = "\b\b\b\b\b\b\b\bcat intrests.txt\n\b\b\bls\n\b\b\b\b\bcat in\t\n";
    outputs = [
        "<font color='tomato'><b>cat: intrests.txt: No such file or directory</b></font>",
        "<font color='cyan'>source-code&nbsp;&nbsp;&nbsp; byte-of-87&nbsp;&nbsp;&nbsp;</font> interests.txt",
        "<pre>  _____       _                     _       <br> |_   _|     | |                   | |      <br>   | |  _ __ | |_ ___ _ __ ___  ___| |_ ___ <br>   | | | '_ \\| __/ _ \\ '__/ _ \\/ __| __/ __|<br>  _| |_| | | | ||  __/ | |  __/\\__ \\ |_\\__ \\<br> |_____|_| |_|\\__\\___|_|  \\___||___/\\__|___/</pre><br><b>* Computer Vision<br>* Image Processing<br>* Machine Learning<br>* Web Development</b><br><br>"
    ];
    endl = "<br><font color=\"lime\"><b>ekan5h@github</b></font> <font color=\"cyan\">~ $ </font>"; 
    i=0;
    j=0;
    k=0;
    setInterval(
        ()=>{
            k++;
            a = document.getElementById("terminal");
            if (Math.floor(k/5)%2)
                a.innerHTML = content+'<b>_</b>';
            else
                a.innerHTML = content;
            if(i<input.length && input[i]!='\b'){
                if(input[i]!='\t')content+=input[i];
                if(input[i]=='\n'){
                    content+='<br>'+outputs[j]+endl;
                    j++;
                }else if(input[i]=='\t'){
                    content+='terests.txt';
                }
                i++;
            }else if(i<input.length) i++;
        },100
    )
}

var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        if(flag){
            setTimeout(startTyping, 300);
            flag = false;
            clearInterval(obs);
        }
    }
}, { threshold: [1] });


obs = setInterval(() => {
    observer.observe(document.querySelector("#terminal"));
}, 50);

tabs = document.getElementsByClassName("tab");
win = document.getElementById('window');
locations = [[0,0]];
j=0;
for(var i=1; i<tabs.length; i++){
    x = i*450;
    y = j+50-Math.floor(100*Math.random());
    tabs[i].style.top = x+'px';
    tabs[i].style.left = y+'%';
    j = y;
    locations.push([x,y]);
}
tabs[0].style.opacity='1';
tabs[0].style.pointerEvents = 'auto';
current = 0;
function nextSlide(){
    if (current==tabs.length-1) return;
    tabs[current].style.opacity='0.5';
    tabs[current].style.pointerEvents = 'none';
    current++;
    tabs[current].style.opacity='1';
    tabs[current].style.pointerEvents = 'auto';
    win.style.transform = 'translate('+(20-locations[current][1])+'%,'+(250-locations[current][0])+'px)';
}

function prevSlide(){
    if (current==0) return;
    tabs[current].style.opacity='0.5';
    tabs[current].style.pointerEvents = 'none';
    current--;
    tabs[current].style.opacity='1';
    tabs[current].style.pointerEvents = 'auto';
    win.style.transform = 'translate('+(20-locations[current][1])+'%,'+(250-locations[current][0])+'px)';
}
slideshow = null;
function startSlides(){
    slideshow = setInterval(
        ()=>{
            tabs[current].style.opacity='0.5';
            tabs[current].style.pointerEvents = 'none';
            current++;
            current = current%tabs.length;
            tabs[current].style.opacity='1';
            tabs[current].style.pointerEvents = 'auto';
            win.style.transform = 'translate('+(20-locations[current][1])+'%,'+(250-locations[current][0])+'px)';    
        },2000
    )
}
startSlides();
document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 38:
        case 37:
            prevSlide();
            break;
        case 40:
        case 39:
            nextSlide();
            break;
    }
};

var tabs = document.querySelectorAll(".tab");

for(var i=0; i<tabs.length; i++){
    let title = tabs[i].querySelector('h1');
    let link = tabs[i].querySelector('a');
    title.innerHTML = "<a target='_blank_' href = '"+link.href+"'>"+title.innerHTML+"</a>";
}

// window.onload = () => {
document.getElementById("overlay").style.display = "none";
// }
