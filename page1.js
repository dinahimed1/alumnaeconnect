//naming our database
firebaseDB("usersdata");

firebaseGet(function(allUsers){
     console.log(" all users = ", allUsers);
});

function addData(user){
    //get data from firebase
    //first time we use this function, turns into array if theres nothing
    firebaseGet(function(allUsers){
        allUsers = allUsers || [];
        console.log("users before = ", allUsers);
        //add new data to array 
         allUsers.push(user);
         //push data back to firebase
         console.log("users after = ", allUsers)
        firebaseSet(allUsers);
    })
}







//takes in the inputs of the form
//stores values of the inouts into the variables

$(document).ready(function(){
    $("#btn").click(function(){
        var name = $("#name").val();
        var url = $("#url").val();
        var bio = $("#bio").val();
        var contact = $("#contact").val();
        var school = $("#school").val();
        var major = $("#major").val();
        
        //an object of users info from the form
        var user = {
        	name: name,
        	url: url,
        	bio: bio,
        	contact: contact,
        	school: school,
        	major: major
        };

    console.log(user);
    addData(user);

    });
    
    
});




