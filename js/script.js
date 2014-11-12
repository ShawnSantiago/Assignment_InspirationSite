Parse.initialize("RhsH5lnqHXKT5ilYTJfsX8KjaxywiH0eBsFxUf5A", "IG7w17tSbiKz7Xrzt17uf48Q2o8G5kzemBqcZMm1");

var LinkObject = Parse.Object.extend("LinkObject");
var LinkInstance = new LinkObject();
	
function addLinkFn() {

	LinkInstance.set("description","news");

	LinkInstance.save({url: document.getElementById('linkField').value }, {
		success: function(object) {
		console.log("worked");
		},
		error: function(error) {
		console.log("error code" + error.code);
		}
	});
	getFromDB();
};	

function getFromDB () {
	var query = new Parse.Query("LinkObject");

	query.equalTo("description", "news");
	query.find({
		success: function(results) {
			console.log(results);
			for (var i = 0; i <results.length; i++) {
				var link = results[i];
				console.log("the url is " + link.get("url"));
			};
		},
		error: function(error) {
			console.log("Not Working");
		}
	});
}

var user = new Parse.User();

function signupFn () {
	user.set("username", document.getElementById('userNameField').value);
	user.set("password", document.getElementById('passwordField').value);
	user.set("email", document.getElementById('emailField').value);
	user.signUp(null, {
		success:function(user) {
			console.log("worked")
		},
		error:function(user, error) {
			if (error.code == 203) {
				alert("email taken")
			};
			console.log("error code" + error.code);	
		}
	});
}

function loginFn () {
	user.set("username", document.getElementById('userNameField').value);
	user.set("password", document.getElementById('passwordField').value);
	user.logIn({
		success:function(user) {
			console.log("worked")
		},
		error:function(user, error) {
			console.log("error code" + error.code);	
		}
	});
}

