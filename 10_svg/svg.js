var pic = document.getElementById("vimage");
/*
var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c.setAttribute("cx",0);
c.setAttribute("cy",0);
c.setAttribute("r", "100");
c.setAttribute("fill","red");
c.setAttribute("stroke","black");
*/
pic.addEventListener("click",draw);

var x0 = 10110;
var y0 = 10110;

function draw(event){
	console.log(event.offsetX);
	console.log(event.offsetY);
	var dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
	dot.setAttribute("cx",event.offsetX);
	dot.setAttribute("cy",event.offsetY);
	dot.setAttribute("r",10);
	dot.setAttribute("fill","red");
	pic.appendChild(dot);
	dot.addEventListener("mouseover",function(){
		pic.removeEventListener('click',draw);
	});
	dot.addEventListener("mouseout",function(){
		pic.addEventListener('click',draw);
	});
        dot.addEventListener("click",function(){
                 dot.setAttribute("fill","green");
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

function draw2(event){
	
	
}

var b = document.getElementById("b");
b.addEventListener("click",clear);

function clear(event){
	while(pic.lastChild){
		pic.removeChild(pic.lastChild);
	}
	x0 = 10110;
    y0 = 10110;

}
//pic.appendChild(c);

