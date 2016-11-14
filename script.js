
//Rende visibile i due campi per inserire i dati
function Aggiungi()
{
	document.getElementById("text_1").style.visibility="visible";	
	document.getElementById("text_2").style.visibility="visible";
	document.getElementById("name_col").style.visibility="visible";
	document.getElementById("val_col").style.visibility="visible";
	document.getElementById("Invia").style.visibility="visible";
}
//invia i dati e li fa vedere in tabella
function Invia()
{
	if(document.getElementById("name_col").value!="" && document.getElementById("val_col").value!=""){
		var tr1=document.getElementById("tabella_riga1");
		var tr2=document.getElementById("tabella_riga2");
		var td1=document.createElement("td");
		var td2=document.createElement("td");
	
		td1.append(document.getElementById("name_col").value);
		tr1.appendChild(td1);	
		td2.append(document.getElementById("val_col").value);
		tr2.appendChild(td2);
	}else
	{
		window.alert("Devi inserire tutti i campi!!!");
	}
	//setto tutto di default
	document.getElementById("text_1").style.visibility="hidden";	
	document.getElementById("text_2").style.visibility="hidden";
	document.getElementById("name_col").style.visibility="hidden";
	document.getElementById("name_col").value="";
	document.getElementById("val_col").style.visibility="hidden";
	document.getElementById("val_col").value="";
	document.getElementById("Invia").style.visibility="hidden";
}
