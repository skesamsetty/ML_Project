// Create a zip code object from the database containing all car makes and their
// registered vehicle counts per zip code.  For later add to geoJSON properties
d3.json("/testconnect").then(function(testobject) {
  console.log(testobject);
});