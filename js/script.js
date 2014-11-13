Parse.initialize("YniKUECGSIBgB1p1kQ7jg15zf9TwKYD48V5vl85b", "fFTWHT9CONgd100sJBOYCE7xVcrHEzJ3OHaZmUK1");
// Parse.initialize("LCkrHcQs1MnJzqoVQmZLsyJNOIe2kRNWi4kokTQV", "PyISC5vsA9dSMgK5EfLAZsfD8WjPzvem4yjQxUbu");

// var LinkObject = Parse.Object.extend("LinkObject");
// var LinkInstance = new LinkObject();
	
// function addLinkFn() {

// 	LinkInstance.set("description","news");

// 	LinkInstance.save({url: document.getElementById('linkField').value }, {
// 		success: function(object) {
// 		console.log("worked");
// 		},
// 		error: function(error) {
// 		console.log("error code" + error.code);
// 		}
// 	});
// 	getFromDB();
// };	

// function getFromDB () {
// 	var query = new Parse.Query("LinkObject");

// 	query.equalTo("description", "news");
// 	query.find({
// 		success: function(results) {
// 			console.log(results);
// 			for (var i = 0; i <results.length; i++) {
// 				var link = results[i];
// 				console.log("the url is " + link.get("url"));
// 			};
// 		},
// 		error: function(error) {
// 			console.log("Not Working");
// 		}
// 	});
// }
$(window).load(function() {
var query = new Parse.Query("StarRating");
query.equalTo("rating", "news");
	query.find({
		success: function(results) {
			console.log(results);
			for (var i = 0; i <results.length; i++) {
				var link = results[i];
				console.log("the url is " + link.get("url"));
			};
		},
		error: function(error) {
			console.log("No Ratings made");
		}
	});
}
 alert("window is loaded");
});

var user = new Parse.User();

function signupFn () {
	user.set("username", document.getElementById('userNameField').value);
	user.set("password", document.getElementById('passwordField').value);
	// user.set("email", document.getElementById('emailField').value);
	user.signUp(null, {
		success:function(user) {
			console.log("worked");
			document.getElementById("one").style.display = 'block';
			document.getElementById("two").style.display = 'none';
		},
		error:function(user, error) {
			if (error.code == 202) {
				alert("User already exists. Log In or create new account.")
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
			document.getElementById("one").style.display = 'block';
			document.getElementById("two").style.display = 'none';
		},
		error:function(user, error) {
			console.log("error code" + error.code);	
			if (error.code == 101) {
				alert("User account doesn't exist. Create new account first.")
			};
		}
	});
}
var StarRating = Parse.Object.extend("StarRatingDB");
var StarRatingNumber = new StarRating();
function starClicked(event) {
	console.log(event.currentTarget.name);
	// StarRatingNumber.save ({"rating": event.currentTarget.id, "value": event.currentTarget.value, "id": event.currentTarget.name },{
	// 	success: function(object) {
	// 	console.log("worked");
	// 	},
	// 	error: function(error) {
	// 	console.log("error code" + error.code);
	// 	}
	// });
};	

