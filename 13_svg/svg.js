var pic = document.getElementById("vimage");
/*
var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c.setAttribute("cx",0);
c.setAttribute("cy",0);
c.setAttribute("r", "100");
c.setAttribute("fill","red");
c.setAttribute("stroke","black");
*/
pic.addEventListener("click",draw,'true');

var x0 = 10110;
var y0 = 10110;

var num = 0;


function draw2(event){
	pic.removeChild(pic.lastChild);
	this.setAttribute("fill","green");
	this.removeEventListener("click",draw2);
	this.addEventListener("click",draw3);
}

function draw3(event){
	pic.removeChild(pic.lastChild);
	this.setAttribute("fill","red");
	var rx = Math.random() * 500;
	var ry = Math.random() * 500;
	
	console.log(rx);
	console.log(ry);
	
	this.setAttribute("cx",rx);
	this.setAttribute("cy",ry);
	this.removeEventListener("click",draw3);
	this.addEventListener("click",draw2);
}



function draw(event){
	var dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
	dot.setAttribute("id",num);
	dot.setAttribute("value",0);
	dot.setAttribute("cx",event.offsetX);
	dot.setAttribute("cy",event.offsetY);
	dot.setAttribute("r",10);
	dot.setAttribute("fill","red");
	pic.appendChild(dot);
	dot.addEventListener("click",draw2);

	num++;
/*	dot.addEventListener("mouseover",function(){
		pic.removeEventListener('click',draw);
	});
	dot.addEventListener("mouseout",function(){
		pic.addEventListener('click',draw);
	}); */
	/*
        dot.addEventListener("click",function(){
                 dot.setAttribute("fill","green");
                 pic.removeChild(pic.lastChild);
                 dot.addEventListener("click",function(){
			     pic.removeChild(this);
			//dot.setAttribute("fill","red");
			//dot.setAttribute("cx",(Math.random() * 500));
			//dot.setAttribute("cy",(Math.random() * 500));
			//pic.addEventListener('click',draw);
                 });
        });
                                                        

	/*

	if(x0 == 10110){
		x0 = event.offsetX;
		y0 = event.offsetY;
	}else{
		var line = document.createElementNS("http://www.w3.org/2000/svg","line");
		line.setAttribute("x1",x0);
		line.setAttribute("y1",y0);
		line.setAttribute("x2",event.offsetX);
		line.setAttribute("y2",event.offsetY);
		line.setAttribute("stroke","red");
		y0 = event.offsetY;
		x0 = event.offsetX;
		pic.appendChild(line);
	}
	*/
}


var b = document.getElementById("b");
b.addEventListener("click",clear);

function clear(event){
	while(pic.lastChild){
		pic.removeChild(pic.lastChild);
	}
	x0 = 10110;
    y0 = 10110;
	num = 0;
}



var id;

var m = document.getElementById("m");
m.addEventListener("click",move);

function move(){
		cancelAnimationFrame(id);
		//console.log(pic.numElements);
		for(var i = 0; i < num; i++){
			var element = pic.getElementById(i.toString());
			if(element.getAttribute("value") == 0){
				var ok = parseInt(element.getAttribute("cx")) + 1;
				element.setAttribute("cx",ok);
			}else{
				var ok = parseInt(element.getAttribute("cx")) - 1;
				element.setAttribute("cx",ok);
			}
			console.log(element.getAttribute("cx"));
			if(parseInt(element.getAttribute("cx")) > 500){
				element.setAttribute("value",1);
			}else if(parseInt(element.getAttribute("cx")) < 0){
				element.setAttribute("value",0);
			}
		}
		id = requestAnimationFrame(move);
}




