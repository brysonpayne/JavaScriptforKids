
function manycats()
{
  var numCats = prompt("How many cats do you want?");
  document.write("<h1 style='color:#ffaaaa'>")
  for (var n = 1; n <= numCats; n++) 
    document.write("  =^.^=   <br>");
}
