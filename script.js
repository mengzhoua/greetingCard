// function addEventLoad(func) {
//     var oldonload=window.onload;
//     if(typeof window.onload !='function'){
//         window.onload =func;
//     }else{
//         window.onload =function () {
//             oldonload();
//             func();
//         }
//     }
//
// }

window.onload =function () {

    //为了保证JavaScript能平稳退化,向后兼容
    if(!document.getElementById) return false;
    if(!document.getElementById("music")) return false;
    if(!document.getElementById("page1")) return false;
    if(!document.getElementById("page2")) return false;
    if(!document.getElementById("page3")) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementsByTagName("audio")) return false;
    var music= document.getElementById("music");
    var audio =document.getElementsByTagName("audio")[0];

    //当音乐播放完停止时候，自动停止光盘旋转效果
     audio.addEventListener("ended",function (event) {
         music.setAttribute("class","");
     },false);

    //点击音乐图标，控制音乐播放效果
    // music.onclick=function () {
    //     if(audio.paused){
    //         audio.play();
    //        // 图片会立即跑回原地this.setAttribute("class","play");
    //       //兼容性较差  this.style.animationPlayState ="running";
    //     }else{
    //         audio.pause();
    //         // 图片会立即跑回原地this.setAttribute("class","");
    //       //兼容性较差  this.style.animationPlayState ="paused";
    //     };
    // };

    music.addEventListener("touchstart",function (event) {
        if(audio.paused){
                    audio.play();
                    this.setAttribute("class","play");
                }else{
                    audio.pause();
                    this.setAttribute("class","");
                };
    },false);

    var page1=document.getElementById("page1");
    var page2=document.getElementById("page2");
    var page3=document.getElementById("page3");
    page1.addEventListener("touchstart",function (event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display ="block";
        page3.style.top     ="100%";

        setTimeout(function () {
            page2.setAttribute("class","page fadeOut");
            page3.setAttribute("class","page fadeIn")
        },5500)
    },false);
}
