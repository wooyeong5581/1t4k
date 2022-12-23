function show(){
    var wol = document.getElementById('date').value;
    if(wol == "2022-08"){
        const main = document.getElementById('main');
        main.innerHTML = 
        "<a href='/'>메인 페이지로 이동</a><br><br>\
        <form>\
            <input id='date' type='month' value='' min='2022-08' max='2022-12'>\
            <input id='submit' type='submit' value='확인' onclick='show()'>\
        </form><br>\
        <div id='div1'><p style='font-size: 30px;'>8월</p><hr>\
            <img src='image/8-1.jpg'>\
            <video autoplay='' muted='' loop=''><source type='video/mp4' src='image/8-2.mp4'></video>\
            <video autoplay='' muted='' loop=''><source type='video/mp4' src='image/8-3.mp4'></video>\
            <video autoplay='' muted='' loop=''><source type='video/mp4' src='image/8-4.mp4'></video>\
            <video autoplay='' muted='' loop=''><source type='video/mp4' src='image/8-5.mp4'></video>\
            <img src='image/8-6.jpg'>\
            <video autoplay='' muted='' loop=''><source type='video/mp4' src='image/8-7.mp4'></video>\
            <img src='image/8-8.jpg'>\
        </div>"
    }
    else if(wol == "2022-09"){
        const main = document.getElementById('main');
        main.innerHTML = 
        "<a href='/'>메인 페이지로 이동</a><br><br>\
        <form>\
            <input id='date' type='month' value='' min='2022-08' max='2022-12'>\
            <input id='submit' type='submit' value='확인' onclick='show()'>\
        </form><br>\
        <div id='div1'><p style='font-size: 30px;'>9월</p><hr>\
            <img src='image/9-1.jpg'>\
            <video autoplay='' muted='' loop=''><source type='video/mp4' src='image/9-2.mp4'></video>\
            <video autoplay='' muted='' loop=''><source type='video/mp4' src='image/9-3.mp4'></video>\
            <img src='image/9-4.jpg'>\
            <video autoplay='' muted='' loop=''><source type='video/mp4' src='image/9-5.mp4'></video>\
        </div>"
    }
    else if(wol == "2022-10"){
        const main = document.getElementById('main');
        main.innerHTML = 
        "<a href='/'>메인 페이지로 이동</a><br><br>\
        <form>\
            <input id='date' type='month' value='' min='2022-08' max='2022-12'>\
            <input id='submit' type='submit' value='확인' onclick='show()'>\
        </form><br>\
        <div id='div1'><p style='font-size: 30px;'>10월</p><hr>\
            <video autoplay='' muted='' loop=''><source type='video/mp4' src='image/10-1.mp4'></video>\
            <img src='image/10-2.jpg'>\
            <img src='image/10-3.jpg'>\
            <img src='image/10-4.jpg'>\
            <img src='image/10-5.jpg'>\
            <img src='image/10-6.jpg'>\
        </div>"
    }
    else if(wol == "2022-11"){
        const main = document.getElementById('main');
        main.innerHTML = 
        "<a href='/'>메인 페이지로 이동</a><br><br>\
        <form>\
            <input id='date' type='month' value='' min='2022-08' max='2022-12'>\
            <input id='submit' type='submit' value='확인' onclick='show()'>\
        </form><br>\
        <div id='div1'><p style='font-size: 30px;'>11월</p><hr>\
            <video autoplay='' muted='' loop=''><source type='video/mp4' src='image/11-1.mp4'></video>\
            <img src='image/11-2.jpg'>\
        </div>"
    }
    else if(wol == "2022-12"){
        const main = document.getElementById('main');
        main.innerHTML = 
        "<a href='/'>메인 페이지로 이동</a><br><br>\
        <form>\
            <input id='date' type='month' value='' min='2022-08' max='2022-12'>\
            <input id='submit' type='submit' value='확인' onclick='show()'>\
        </form><br>\
        <div id='div1'><p style='font-size: 30px;'>12월</p><hr>\
            <img src='image/12-1.jpg'>\
            <img src='image/12-2.jpg'>\
        </div>"
    }
}