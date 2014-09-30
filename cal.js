function save_f(){
		var sc=document.getElementById("sc");
			e=document.getElementById("saveC").value;
		
			localStorage.setItem(sc.innerHTML,e);
		
	}
	
	function open_f(){
	     var sc=document.getElementById("sc");
			//e=document.getElementById("t"+i).value;
			
			e=localStorage.getItem(sc.innerHTML);
			document.getElementById("saveC").value=e;
		
	}