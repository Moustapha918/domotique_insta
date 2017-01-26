var urlServer = "http://localhost:3000/";

function getAnswers(){
	$.ajax({
		type : "GET",
		url : urlServer+"answers",
		dataType : 'json',
		success : function(data){
			configCommand(data.answers);
		},
		error :function(argument) {
			// body...
			console.log("error get servet answers");
		}

	});
}


function initButton (){

	$("#voiceButton").click(function(){
		recognizeSpeech();
	})
}