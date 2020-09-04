function validate(){

    var usr=document.getElementById("name").value
    var pw=document.getElementById("password").value
    var usra=document.getElementById("name")

    if(usr===""&&pw===""){

        function focusname() {
            document.getElementById("name").style.border="0.2em solid #3498db"
          }
        document.getElementById("name").addEventListener("focus", focusname);

        function focuspass() {
            document.getElementById("password").style.border="0.2em solid #3498db"
          }
        document.getElementById("password").addEventListener("focus", focuspass);

        document.getElementById("name").style.border="0.2em solid  #CC3333"
        document.getElementById("password").style.border="0.2em solid  #CC3333"
        return false;

    }else if(usr===""&&pw!=""){

        function focus() {
            document.getElementById("name").style.border="0.2em solid #3498db"
          }
        document.getElementById("name").addEventListener("focus", focus);
        document.getElementById("name").style.border="0.2em solid  #CC3333"
        document.getElementById("password").style.border="0.2em solid #3498db"
        return false;

    }else if(pw===""&&usr!=""){

        function focus() {
            document.getElementById("password").style.border="0.2em solid #3498db"
          }
        document.getElementById("password").addEventListener("focus", focus);  
        document.getElementById("name").style.border="0.2em solid #3498db"
        document.getElementById("password").style.border="0.2em solid  #CC3333"
        return false;

    }else return true;

}