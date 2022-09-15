function tree(data) {
	
	console.log(data);
	let list = data;
	
	let step = 1;
	let stack = [];
	let scriptString = "";
	
	for(let i = 0; i < list.length; i++){
		if (list[i].progLvl==1){
			for(var j = 0; j < stack.length; j++){ 
            	scriptString = scriptString.concat(stack.pop()+"\n");
            }
			scriptString = scriptString.concat("<li class=\'menu-tree\'>", "<button class=\'menu-tit\'>" + list[i].progNm + "</button>", "\n");
			stack.push("</li>"+"\n");
			step = list[i].progLvl
			continue;
		}
		
		if(list[i].progLvl > step){
			scriptString = scriptString.concat("<ul class=\'inner-depth\'>\n","<li>", "<button>" + list[i].progNm + "</button>", "\n");
            step = list[i].progLvl;
            stack.push("</ul>"+"\n");
            stack.push("</li>"+"\n");
            continue;
		}
		
		if(step == list[i].progLvl){
			if(stack.length != 0) {
            	scriptString = scriptString.concat(stack.pop()+"\n");
            }
            scriptString = scriptString.concat("<li>", "<button>" + list[i].progNm + "</button>", "\n");
            stack.push("</li>"+"\n");
            continue;
		}
		
		if(list[i].progLvl < step){
			 let size = step - list[i].progLvl + 1;
               step = list[i].progLvl;
               
               for(var j = 0; j < size; j++){ 
                  scriptString = scriptString.concat(stack.pop()+"\n");
               }
               
            scriptString = scriptString.concat("<ul class=\'inner-depth\'>\n","<li>", "<button>" + list[i].progNm + "</button>", "\n");
            step = list[i].progLvl;
            stack.push("</ul>"+"\n");
            stack.push("</li>"+"\n");
            continue;
		}	
		
		
		
	}
	
	
	let size= stack.length
	if(size != 0) {
	     for(var i = 0; i < size; i++){
            scriptString = scriptString.concat(stack.pop());            
         }
    }
    
     console.log(scriptString);
      $("#menu-tree").empty();
      $("#menu-tree").html(scriptString);