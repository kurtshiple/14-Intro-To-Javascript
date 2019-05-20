// Assign the data from `data.js` to a descriptive variable
var aliens = data;

// Select the submit button
var submit = d3.select("#filter-btn");

var tbody = d3.select("tbody");


submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault()
  
    // Select the input element and get the raw HTML node
    var input = d3.select("#datetime")
  
    // Get the value property of the input element
    var datetime = input.property("value")

    // Use the form input to filter the data by datetime
    
    var filteredaliens = aliens.filter(function(event){
        return event.datetime === datetime
    })
    
    // Add new row for each object that comes from the filtered array
    // and fill in individual cells within each row with values 
    // corresponding to each key.

    console.log(filteredaliens)
    filteredaliens.forEach(function(event) {
        var row = tbody.append("tr");

        Object.entries(event).forEach(function([key, value]){
            console.log(key, value);

            var cell = tbody.append("td");
            cell.text(value);
        });
      }); 
});



