/**
 * Created by Zcy on 2016/11/1 0001.
 */

window.addEventListener('load',windowload,false)
function windowload(){
    canvasApp();
}
function canvasSupport(){
    return Modernizr.canvas;
}
function canvasApp(){
  if(!canvasSupport()){
      return;
  }
var canvasElement=document.getElementById('fullstarbg');
var cxt=canvasElement.getContext("2d");
var windowW=window.innerWidth;
var windowh=window.innerHeight;
canvasElement.width=windowW;
canvasElement.height=windowh;
//画星星
var nums=200;
var starArr=[];
for(var i=0;i<nums;i++){
    var arrs=["t","f"];
    var r= Math.random()*1;  //生成星星的半径
    var ax=Math.random()*canvasElement.width;
    var ay=Math.random()*canvasElement.height;
    var opactityS=Math.random()*1;
    opactityS=opactityS>0.7?0.7:opactityS;
    var trues=arrs[Math.floor(Math.random()*2)];

    starArr.push({
        x:ax,
        y:ay,
        R:r,
        initX:ax,
        initY:ay,
        moves:trues,
        initOpacity:opactityS,
        opacity:opactityS
    });
}
 //流线

 var newLine=true;
 var linesArr=[];
 var conter=0;
 function createLine(){
    if(newLine==true){
         var lineNum=Math.ceil(Math.random()*2);
         //#59576a;
         linesArr=[]
         for(var i=0;i<lineNum;i++){
             var lx=Math.random()*canvasElement.width;
             var ly=Math.random()*canvasElement.height-Math.random()*500;
             linesArr.push({
                 initX:lx,
                 initY:0,
                 length:Math.random()*50+30,
                 speed:Math.random()*10
             })
         }
        newLine=false;
    }
 }
    //3秒之后让红色的圆形运动
var redstart=false;
setTimeout(function(){
    redstart=true;
},3000)
var yred=-0.25*canvasElement.width*0.22;
var redYlimt=-0.35*canvasElement.width*0.22;;
 function draw(){
      cxt.clearRect(0,0,canvasElement.width,canvasElement.height);
     var colors=cxt.createLinearGradient(0,0,0,canvasElement.height);
     colors.addColorStop(0,"#090723");
     colors.addColorStop(0.75,"#090723");
     colors.addColorStop(1,"#08071e")
     cxt.fillStyle=colors; //08071e
     cxt.fillRect(0,0,canvasElement.width,canvasElement.height)
     //画圆 color r x y
     drawCircle("#f7f4d3",canvasElement.width*0.12,0.44*canvasElement.width,redYlimt,"#fcf6ac");                         //红
     drawCircle("#201620",canvasElement.width*0.025,0.95*canvasElement.width,0.32*canvasElement.height);       //灰
     drawCircle("#140c2a",canvasElement.width*0.01,0.75*canvasElement.width,0.22*canvasElement.height);        //紫
     drawCircle("#090929",canvasElement.width*0.018,0.82*canvasElement.width,0.52*canvasElement.height);       //蓝
     if(redstart==true){
         redYlimt+=1;
     }
     if(redYlimt>yred){
         redYlimt=yred;
     }
     //STAR
     for(var i=0;i<starArr.length;i++){
         var child=starArr[i];
         cxt.save();
         cxt.globalAlpha=child.opacity;
         cxt.beginPath();
         cxt.fillStyle="#ffffff";
         cxt.arc(child.initX,child.initY,child.R,0,Math.PI*2,false);
         cxt.fill();
         cxt.closePath();
         //移动

         if(child.moves=='t'){
             child.initX-=Math.random()*1*0.12;  //星星移动的速度
             if(child.initX<0){
                 child.initX=child.x;
             }
         }
         //透明度
         if(child.opacity<0.8){
             child.opacity+=0.005;
             if(child.opacity>0.7){
                 child.opacity=child.initOpacity;
             }
         }
         cxt.restore();
     }
     //lines
     createLine();

     for(var i=0;i<linesArr.length;i++){
        var child=linesArr[i];
          cxt.save();
          cxt.rotate(0);
         cxt.beginPath();
         cxt.strokeStyle="#59576a";
         cxt.moveTo(child.initX,child.initY);
         cxt.lineTo(child.initX-Math.cos(Math.PI/180*45)*child.length,child.initY+Math.sin(Math.PI/180*45)*child.length);
         cxt.stroke();
         cxt.restore();
         child.speed+=0.1;
         var preX=Math.cos(Math.PI/180*45)*child.speed;
         var preY=Math.sin(Math.PI/180*45)*child.speed;
         child.initX=child.initX-preX;
         child.initY=child.initY+preY;
         if(child.initX<0||child.initY>canvasElement.height){
             conter=i+1;
         }
         if(conter==linesArr.length){
             conter=0;
             newLine=true;


         }

     }
 }
  draw();
  setInterval(draw,20);
  function drawCircle(color,R,x,y,color2){
      cxt.beginPath();
	  if(color2){
		  var gradient2=cxt.createRadialGradient(x,y,R/2,x,y,R);
		  gradient2.addColorStop(0,color);
		  gradient2.addColorStop(0.5,color); 
		  gradient2.addColorStop(1,color2);
		  cxt.fillStyle=gradient2;
	   }else{
	     cxt.fillStyle=color;
	   }

      var r=R;
      cxt.arc(x,y,R,0,Math.PI*2,false);
      cxt.fill();
      cxt.closePath();
  }
    //代码思路：
    //星星 随机产生一定数量的星星对象{初始位置:x,y;星星半径}
    //星星闪烁与运动的原理 每隔一定秒数重新绘制 并且移动位置 与 改变透明度  闪烁与移动可以随机或者一定的规律
    //
    //流线  同流星原理类似  斜线根据角度与第一点 求第二点
}