function checkSpeechRecognition(){
	if(artyom.speechSupported){
		$(".speachSyntheseSupport").removeClass("btn-danger").addClass("btn-success");
		$(".speachSyntheseSupport").html("Synthese vocal OK");
	}else{
		$(".speachSyntheseSupport").removeClass("btn-success").addClass("btn-danger");
		$(".speachSyntheseSupport").html("Synthese vocal KO");
	}

	if(artyom.recognizingSupported ){
		$(".speachRecogniseSupport").removeClass("btn-danger").addClass("btn-success");
		$(".speachRecogniseSupport").html("Reconnaissance vocal OK");
	}else{
		$(".speachRecogniseSupport").removeClass("btn-success").addClass("btn-danger");
		$(".speachRecogniseSupport").html("Reconnaissance vocal KO");
	}
}

function configCommand(answers){
	var tabIndexes = new Array();
	var commandsId = new Array();

	for(i in answers ){
		tabIndexes.push(answers[i].sentence);
		commandsId.push(answers[i].commandId);
	}


	var commands = {
		indexes : tabIndexes,
		action : function(i){
			callbackCommand(commandsId[i],null);
		}
	}
	artyom.addCommands(commands);

}

function callbackCommand(commandId, param){
	var commandUrl = "http://localhost:3000/response/"+commandId;

	$.ajax({
		type : 'POST',
		url : commandUrl,
		dataType : 'json',
		data: {data: param},
		success: function(data){
			console.log("response: "+data.response);
			artyom.say(data.response);
		},
		error : function(){
			console.log("error post servere command");
			$("#disconnectbutton").click();
		}

	})
}



function recognizeSpeech(){
	artyom.fatality(); // use it to stop any of

	setTimeout(function(){
		artyom.initialize({
			lang: "fr-FR", //A lot of languages are supported
			continuous : false,
			listen : true,
			debug : false,
			speed : 1.5
		});
	},250);	
}



artyom.redirectRecognizedTextOutput(
	function(recognized,isFinal){
	if(isFinal){
		console.log("listen : " + recognized);
	}
}
);