function ac() {
   document.getElementById("box").value="";
   }
  function show(input) {
    document.getElementById("box").value+=input;
	}
	function display() {
	 var s=eval(document.getElementById("box").value);
	   document.getElementById("box").value=s;
	   }