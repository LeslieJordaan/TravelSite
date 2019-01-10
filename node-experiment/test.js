var fs = require("fs");
var https = require("https");

fs.writeFile(__dirname + "/index.html","<h1>Html is great</h1>",function(error){
	
	if (error) {
		return console.log(error);
	} else {
		return console.log("File created successfully!");
	}	
});


var photoUrl = "https://github.com/LearnWebCode/welcome-to-git/blob/master/images/dog.jpg";

https.get(photoUrl,function(response){
	response.pipe(fs.createWriteStream(__dirname + "/dog.jpg"));
	
})



