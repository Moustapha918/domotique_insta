function Plugin(){};

Plugin.prototype.getAnswers= function(){

return[];
}

Plugin.prototype.getResponse = function (commandId, data){
	return null;
};

module.exports = Plugin;
