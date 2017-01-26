function Services(){
	this.allPlugins = [];
}

const fs = require('fs');

Services.prototype.initAllPlugins = function(){
	var pluginsFolder = './plugins';
	this.allPlugins = [];
fs.readdir(pluginsFolder, (err, files) =>{
	files.forEach(file =>{
	console.log("load plugin ..."+ file);
	var tmpPlugin = require(pluginsFolder + "/"+file+"/"+file+".js");
	
	this.allPlugins.push(tmpPlugin);
	});
	});
	}
	
	Services.prototype.getAnswers = function(){
		var allAnswers = new Array();
		for(i in this.allPlugins){
			for(j in this.allPlugins[i].getAnswers()){
				allAnswers.push(this.allPlugins[i].getAnswers()[j]);
				console.log(this.allPlugins[i].getAnswers()[j]);
			}
		}
		return allAnswers;
	}
	
	Services.prototype.getResponse = function(id, data){
		for(i in this.allPlugins){
			var response = this.allPlugins[i].getResponse(id,data);
			if(response) break;
		}
		return response;
	}
	module.exports = new Services;