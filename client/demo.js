
document.write("hello world  ");

onload=function () {
    alert("window load success")
    document.getElementById("my_event").onclick=function () {
        alert("hello  tongtong")
    }
    demo_pop_event();
}


function demo_location() {
	window.location="http://www.baidu.com"
}

//window在浏览器中是全局对象
function demo_location2() {
    location="http://www.baidu.com"
}

function demo_timeout() {
    setTimeout(function() {
		alert("hello world");
    },2000)
}

//document
// 每个document对象都有style和className对象
function demo_document() {
	alert(document.getElementById("my_document"));
}


function demo_style() {
    document.getElementById("my_style").style.backgroundColor="red";
}

function demo_url_js() {
    window.location="javascript:alert(new Date().toLocaleTimeString())"
}


function demo_pop_event() {
    document.onclick=function () {
        alert("pop event");
    }
}





















