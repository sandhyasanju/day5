  var data = [
    {
      "ID" : "1" ,
      "Name" : "Sandhya" ,
      "Age" : "20" ,
      "Salary" : "2000"
    },
    {
      "ID" : "2" ,
      "Name" : "Srija" ,
      "Age" : "20" ,
      "Salary" : "20000"
    },
    {
      "ID" : "3" ,
      "Name" : "Mrudula" ,
      "Age" : "21" ,
      "Salary" : "3200"
    },
    {
      "ID" : "4" ,
      "Name" : "Priyanka" ,
      "Age" : "22" ,
      "Salary" : "32000"
    },
    {
      "ID" : "5" ,
      "Name" : "Namratha" ,
      "Age" : "23" ,
      "Salary" : "2222"
    }
];
function create()
{
  var table = "<table id='table1'>" ;
  table += "<th id='th1'>" + "ID" + "<p onclick='increase(0)'>" +  "&#x025B4" + "</p>" + "<p onclick = 'decrease(0)'>" + "&#x025BE" + "</p>" + "</th>";
  table += "<th id='th2'>" + "Name" + "<p onclick='increase(1)'>" +  "&#x025B4" + "</p>" + "<p onclick = 'decrease(1)'>" + "&#x025BE" + "</p>" + "</th>";
  table += "<th id='th3'>" + "Age" + "<p onclick='increase(2)'>" +  "&#x025B4" + "</p>" + "<p onclick = 'decrease(2)'>" + "&#x025BE" + "</p>" + "</th>";
  table += "<th id='th4'>" + "Salary" + "<p onclick='increase(3)'>" +  "&#x025B4" + "</p>" + "<p onclick = 'decrease(3)'>" + "&#x025BE" + "</p>" + "</th>";
  table += "</th>";
  table += "<tbody>";
  for( var i = 0 ; i < data.length ; i++ )
  {
    table += "<tr>";
    table += "<td>" + data[i].ID + "</td>";
    table += "<td>" + data[i].Name + "</td>";
    table += "<td>" + data[i].Age + "</td>";
    table += "<td>" + data[i].Salary + "</td>";
    table += "</tr>";
    table += "</tbody>";
  }
  table += "</table>";
  var element = document.getElementById("div");
  element.innerHTML = table;
}

function increase(colid)
{
var table = document.getElementById("table1");
var row1 , row2 , temp , i , j ;
for ( i = 1 ; i < table.rows.length ; i++ )
{
for ( j = 1 ; j < table.rows.length - 1 ; j ++ )
{
row1 = table.rows[j].cells[colid].innerHTML;
row2 = table.rows[j+1].cells[colid].innerHTML;
if ( row1 < row2 )
{
temp = table.rows[j].innerHTML ;
table.rows[j].innerHTML = table.rows[j+1].innerHTML ;
table.rows[j+1].innerHTML = temp ;
}
}
}
}

function  decrease(colid)
{
var table = document.getElementById("table1");
var row1 , row2 , temp , i, j ;
for ( i = 1 ; i < table.rows.length ; i++ )
{
for ( j = 1 ; j < table.rows.length - 1 ; j++ )
{
row1 = table.rows[j].cells[colid].innerHTML;
row2 = table.rows[j+1].cells[colid].innerHTML;
if ( row1 > row2 )
{
temp = table.rows[j].innerHTML;
table.rows[j].innerHTML = table.rows[j+1].innerHTML;
table.rows[j+1].innerHTML = temp ;
}
}
}
}
