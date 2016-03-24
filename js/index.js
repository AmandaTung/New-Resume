window.onload = function(){setSize();draw();loadXMLDoc()};
window.onresize = setSize;
function setSize(){
  var height = document.documentElement.clientHeight+'px';
  document.getElementById('home').style.height = height;
  document.getElementById('information').style.height = height;
  document.getElementById('skill').style.height = height;
  document.getElementById('experience').style.height = height;
}
function draw(){
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  context.strokeStyle = '#a1a1a1';
  context.fillStyle='#f2f2f2';
  context.lineCap = 'round';
  context.lineWidth = 2;

  context.moveTo(320,30);
  context.lineTo(320,430);
  context.stroke();

  for(var i = 0; i<6; i++){
    context.beginPath();
    if (i<5) {
      context.arc(320,50+i*60,10,0,Math.PI*2,false);
    }else {
      context.arc(320,360,20,0,Math.PI*2,false);
    }
    context.closePath();
    context.fill();
    context.stroke();
  }
  context.beginPath();
  context.font='bold 20px Arial';
  context.fillStyle='#333';
  context.fillText('2012.7',340,30);
  context.fillText('2014.11',210,240);
  context.fillText('So far',340,430);
  context.closePath();

  context.beginPath();
  context.font='normal 20px Arial';
  context.fillStyle='#3399cc';
  context.fillText('Work in Foxconn from July',20,100);
  context.fillText('2012 to November 2014',20,120);
  context.fillText('From November 2014 to the',20,300);
  context.fillText('present，self study web front',20,320);
  context.fillText('end development',20,340);
  context.closePath();

  context.beginPath();
  context.font='normal 16px Arial';
  context.fillStyle='#3399cc';
  context.fillText('Windchill PDM 8.0"planing, maintaining and issue solving .',340,60);
  context.fillText('DMS "s planing, testing, maintaining and issue solving.',340,120);
  context.fillText('Internal auditor',340,180);
  context.fillText('Understanding of new product development process',340,240);
  context.fillText('Project management, coordination and communication skills',340,300);
  context.fillText('HTML+CSS+Javascript+jQuery',340,340);
  context.fillText('HTML5+CSS3',340,360);
  context.fillText('Ajax',340,380);
  context.fillText('Photoshop',340,400);
  context.closePath();
}

function loadXMLDoc(){
  document.getElementById('pBlog').onclick = pBlog;
}
function pBlog(){
  var request;
  if(window.XMLHttpRequest){
    request = new XMLHttpRequest();//IE7+,Firefox,Chrome,Opera,Safari...
  }else{
    request = new ActiveXObject('Microsoft.XMLHTTP');//IE6,IE5
  }
  request.open('GET','test.php',true);
  request.send();
  request.onreadystatechange=function(){
    if (request.readyState == 4 && request.status == 200) {
      document.getElementById('result').innerHTML = request.responseText;
    }
  }
}
