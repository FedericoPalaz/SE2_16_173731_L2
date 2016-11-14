
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
		
		var count=trovato(document.getElementById("name_col").value);
		if(count!=-1)
		{
			var vettore = document.getElementById("tabella_riga2").getElementsByTagName("td");
			vettore[count].innerHTML=	parseInt(vettore[count].innerHTML)+parseInt(document.getElementById("val_col").value);	
		}
		else		
		{
			var tr1=document.getElementById("tabella_riga1");
			var tr2=document.getElementById("tabella_riga2");
			var td1=document.createElement("td");
			var td2=document.createElement("td");
	
			td1.append(document.getElementById("name_col").value);
			tr1.appendChild(td1);	
			td2.append(parseInt(document.getElementById("val_col").value));
			tr2.appendChild(td2);
		}
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

//Ordina la tabella in base al numero di item
function Ordina()
{
	var vettore_intest=document.getElementById("tabella_riga1").getElementsByTagName("td");
	var vettore = document.getElementById("tabella_riga2").getElementsByTagName("td");
	var minimo;
	
	for (var i=0;i<vettore.length-1;i++)
	{
		minimo=i;
		for(var j=i+1;j<vettore.length;j++)
		{
			if(parseInt(vettore[j].innerHTML)<parseInt(vettore[minimo].innerHTML))
			{
				minimo=j;
			}
		}
		if(i!=minimo)
		{
			var tmp=vettore[i].innerHTML;
			vettore[i].innerHTML=vettore[minimo].innerHTML;
			vettore[minimo].innerHTML=tmp;

			var tmp1=vettore_intest[i].innerHTML;
			vettore_intest[i].innerHTML=vettore_intest[minimo].innerHTML;
			vettore_intest[minimo].innerHTML=tmp1;
		}	
	}
}

//Cerca un elemento
function trovato(item)
{
	var vettore_intest=document.getElementById("tabella_riga1").getElementsByTagName("td");
	var t=-1;	
	for(var i=0;i<vettore_intest.length;i++)
	{
		if(vettore_intest[i].innerHTML==item)
		{
			t=i;
					
		}
	}
	return t;
}

