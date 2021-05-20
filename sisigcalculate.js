function OrderNow ()
{
    if(validate() == false)
    {
        return;
    }
    if(validateRadio() == false)
    {
        alert("You have to select a dish");
        return;
       
    }   

    alert("You are finished ordering.");
    checkForm();
   
   return;
}
function validate()
{
    var fields = [document.getElementById('firstname'),document.getElementById('Contact'),document.getElementById('Address')];
    var err=0;

    for (i=0;i<fields.length;i++)
    {
        if(fields[i].value == "")
        {
            fields[i].style.backgroundolor = "red";
            err++;
        }
    
    }

if(err=== 0)
{
    return true;
}
else
{
    alert ("Please fill Out All Of The Fields");
    return false;
}
}

function validateRadio()
{
   if(document.SisigForm.sisigtype[0].checked)
   {
       return true;

   }
   if(document.SisigForm.sisigtype[1].checked)
   {
       return true;
       
   }
   return false;
}
function checkForm()
{
   var el= document.SisigForm.elements.length;
   var txt= "";

   for(i=0; i<el;i++)
   {
       var type = SisigForm.elements[i].type;

       if(type=="Radio" && SisigForm.elements[i].checked)
       {txt=txt +SisigForm.elements[i].value+"<br>";
   }
   if(type=="text" && SisigForm.elements[i].value)
   {
    txt=txt +SisigForm.elements[i].value+"<br>";
   }
   if (type == "select-one")
   {
       var e = document.getElementById("sel");
       var strUser = e.options[e.selectedIndex].text;
       txt = txt +"Amount: " + e.options[e.selectedIndex].text+"<br>";
   }
}
document.getElementById("OrderNow").innerHTML = txt;

}


