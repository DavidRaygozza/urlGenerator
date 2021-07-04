/* Time Complexity: O(N), Space Complexity: O(N) */
function run(){
		var oldLink = document.getElementById('old').value;
		var chars = oldLink.split("");
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

		var b = 0;
		while(b < length1 && decision != "true"){
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
			b++;
		} //end for loop 1, determines if there Is a 0-



		if(decision == "true"){
			var a = 0;
			while(a <= length1-15){

				if(chars[a] == '-'){
                			chars[a] = '.';
       				}//finds any - and replaces it with .

				if(chars[a] == '.' && chars[a+1] == 'l' && chars[a+2] == 'e' && chars[a+3] == 'o' && chars[a+4] == 'p' && chars[a+5] == 'a' && chars[a+6] == 'c' && chars[a+7] == '.' && chars[a+8] == 'u' && chars[a+9] == 'l' && chars[a+10] == 'v' && chars[a+11] == '.' && chars[a+12] == 'e' && chars[a+13] == 'd' && chars[a+14] == 'u'){
                                        a = a + 15;
					/* After the conditions above are met, grabs any characters after that and stores into a string that will be used for final url */
                                        while(a <= length1){
			                   older += chars[a];
				           a++;
					}
					/*Creates proper url based on the cases above*/
					newest = newerString1 + older;
					alert("New Url: " + newest);
	  				decider = true;
      
        			}//finds the leopac.ulv.edu and removes it. Then generates new url. Preserves any -'s that come after the leopac.ulv.edu part of the URL
	                a++;
			}//end while loop
                        
		}else if(decision == "false"){
			var c = 0;
			while(c < length1-7){
				counter++;
				if(chars[c] == '/' && chars[c+1] == 'r' && chars[c+2] == 'e' && chars[c+3] == 'c' && chars[c+4] == 'o' && chars[c+5] == 'r' && chars[c+6] == 'd' && chars[c+7] == '='){
					c = c + 8;
					/* After the conditions above are met, grabs any characters after that and stores into a string that will be used for final url */
					while(c < length1-3){
					   older += chars[c];
					   c++;
					}
                   			/*Creates proper url based on the cases above*/
					newest = newString1 + older + newString2;
					alert("New Url: " + newest);
					decider = true;
                                }
			c++;
			}//end while loop
		}//end if else


  /*user error handling to see if user enters a valid 'old' url that needs regenerating */
  if((counter != 0 && decider == false) || oldLink == "" ){
      alert("Sorry. Please enter an eligible URL that needs to be updated (old URL must include " + warning +")");
  }
} //end function
