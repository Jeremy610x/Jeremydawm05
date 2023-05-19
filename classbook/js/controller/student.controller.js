$( document ).ready(function() {
	console.log( "Student controller loaded." );
	
	for (i = 0; i < students.length; i++) { 
		$("#content").append('<div class="student">' + students[i] + '</div>');
	}
});
