window.onload=main;


function Search_dic(word,everything) {
   let request = new XMLHttpRequest();
   let fileName = `/request.php?q=${word}&all=${everything}`;
   
   request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
         if(request.status === 200){
            if (everything){
               xml_result(request.responseXML); 
            }else{
               update_word_results(request.responseText);
            }
         }else{
            window.alert("There was an error finding that parameter");
         }
         
      }
   }
   
   request.open("GET", fileName, true);
    request.send();
   
}

function update_word_results(response){
    document.getElementById("results").innerHTML = response;
}

function xml_result(response){
    let definition = response.documentElement.children;
    let result = "<ol>";
    
    for(var i = 0; i < definition.length; i++){
        result+=`<li><h3>${definition[i].attributes[0].value.toUpperCase()}</h3><p>${definitions[i].innerHTML.trim()}</p><p> - ${definitions[i].attributes[1].value}</p></li>`;
    }
    
    result+= "</ol>"
    
    update_word_results(results)
}

function main(){

   document.getElementById("submission").addEventListener("click",function(){
      // window.alert(" A statement of the exact meaning of a word, especially in a dictionary.");
   });
   
}