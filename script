function run(){
		var old1 = document.getElementById('old').value;
		var chars = old1.split("");
		var newString1 = "https://laverne.primo.exlibrisgroup.com/discovery/search?query=any,contains,";
		var newString2 = "*&tab=All&search_scope=MyInst_and_CI&vid=01UOLV_INST:01UOLV&lang=en&offset=0";
		var newerString1 = "http://laverne.idm.oclc.org/login?url=";

    		var newest = "";
    		var counter = 0;
    		var decider = false;
		var value;
		var length1 = chars.length;
		var older = "";
		var warning = "'leopac.ulv.edu'";
		var temp = 0;
		var charCounter = 0;
		var decision = "false";
		var zeroCounter = 0;


		for(var b = 0; b < length1; b++){
        		counter += 1;
        		if(chars[b] == '0' && chars[b+1] == '-'){
				zeroCounter++;
				if(zeroCounter == 1){
					decision = "true";
            				for(var f = 0; f < 2; f++){
                				chars.splice(b,1);
            				}
				}
        		} //finds the 0- and removes it
		} //end for loop 1, determines if there Is a 0-



		if(decision == "true"){
			for(var a = 0; a < chars.length; a++){

				if(chars[a] == '-'){
                			chars[a] = '.';
       				}//finds any - and replaces it with .

				if(chars[a] == '.' && chars[a+1] == 'l' && chars[a+2] == 'e' && chars[a+3] == 'o' && chars[a+4] == 'p' && chars[a+5] == 'a' && chars[a+6] == 'c' && chars[a+7] == '.' && chars[a+8] == 'u' && chars[a+9] == 'l' && chars[a+10] == 'v' && chars[a+11] == '.' && chars[a+12] == 'e' && chars[a+13] == 'd' && chars[a+14] == 'u'){
            
            				for(var d = 0; d < 15; d++){
                				chars.splice(a,1);  
            				}

					for(var x = 0; x < chars.length; x++){
                				older += chars[x];
            				}
				
					newest = newerString1 + older;
					alert("New Url: " + newest);
	  				decider = true;
      
        			}//finds the leopac.ulv.edu and removes it. Then generates new url. Preserves any -'s that come after the leopac.ulv.edu part of the URL
	
			}//end for loop 2

		}else if(decision == "false"){
			for(var c = 0; c < chars.length; c++){
				counter += 1;
				charCounter++;

				if(chars[c] == '/' && chars[c+1] == 'r' && chars[c+2] == 'e' && chars[c+3] == 'c' && chars[c+4] == 'o' && chars[c+5] == 'r' && chars[c+6] == 'd' && chars[c+7] == '='){
		
            
            				for(var e = 0; e < (charCounter + 7); e++){
                				chars.splice(temp,1);  
            				}

	

					for(var y = 0; y < (chars.length -3); y++){
                				older += chars[y];
            				}
				
					newest = newString1 + older + newString2;
					alert("New Url: " + newest);
	  				decider = true;
      
        }
			}//end for loop
		}//end if else


/*user error handling to see if user enters a valid 'old' url that needs regenerating */
	if((counter != 0 && decider == false) || old1 == "" ){
      alert("Sorry. Please enter an eligible URL that needs to be updated (old URL must include " + warning +")");
  }
} //end function
