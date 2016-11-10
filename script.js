function crea_tabella()
{
	            document.write('<table>');	
            for (i=1; i<=3; i++) {	
				document.write('<tr>') 	
				for (j=1; j<=4; j++) {	
					document.write('<td>');	
					document.write('a<sub><small>' + i + ',' + j + '</small></sub>');	
					document.write('</td>');	
				}	
				document.write('</tr>');	
            }	
            document.write('</table>');	
            document.close();
}
