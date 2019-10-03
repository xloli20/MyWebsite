	var svgn = "https://www.w3.org/2000/svg";
	var svg = document.createElementNS(svgn,"svg");
	svg.setAttribute("version","1.1");
	svg.setAttribute("width",600);
	svg.setAttribute("height",400);
	document.body.appendChild(svg);

	rect = document.createElementNS(xmlns,"rect");
	rect.setAttribute("x",650);
	rect.setAttribute("y",120);
	rect.setAttribute("width",50);
	rect.setAttribute("height",50);
	rect.setAttribute("fill","red");
	document.firstChild.appendChild(rect);
