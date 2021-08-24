editor.document.designMode = "on";
        var f = function( camp){
            if (camp != '0'){
                editor.document.execCommand(camp , false, null);
            }else{
                editor.document.execCommand('selectAll' , false, null);
                editor.document.execCommand('removeFormat' , false, null);
                editor.document.execCommand('delete' , false, null);
            }            
        }
        function sele ( x ){
    editor.document.execCommand('fontSize', false, x);
   
    
}
function setEvent() {
                    document.getElementById('whatever').contentWindow.document.onkeypress = new Function ('ListenForKeyPress(event)');
                    }
            
            function ListenForKeyPress(e)
            {
                 
            }
            
            function focs( event, value){
                if(event.keyCode == 13){
                    var vl = value;
                    size(vl);
                }
            }
