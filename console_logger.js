/*
	-------------------------------------------------------------------------------
	console_logger.js
	
	The MIT License (MIT)
	Copyright (c) 2014 Sam Caldwell.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.	
	-------------------------------------------------------------------------------
 */
module.exports=function(){

	var fs=require('fs');
		
	root.console.persistence={
		state:false,
		logFileName:'',
		errorFileName:'',
		sourceName:'notSet',
		logWriteCount:0,
		errorWriteCount:0
	}
	
	Object.defineProperty(root.console.persistence,'logWrites',{get:function(){return this.logWriteCount;}});
	Object.defineProperty(root.console.persistence,'errorWrites',{get:function(){return this.errorWriteCount;}});

	
	Object.defineProperty(root.console.persistence,'isActive',{
		get:function(){return this.state;},
		set:function(i){
			switch(typeof(i)){
				case 'boolean':this.state=i;break;
				case 'number':this.state=(i)?true:false;break;
				default: throw("unexpected input in console.persistence.isActive.  Use Boolean");break;
			}
		}
	});
	
	Object.defineProperty(root.console.persistence,'logFile',{
		get:function(){return this.logFileName;},
		set:function(fname){this.logFileName=fname;}
	});
	
	Object.defineProperty(root.console.persistence,'errorFile',{
		get:function(){return this.errorFileName;},
		set:function(fname){this.logFileName=fname;}
	});
	
	Object.defineProperty(root.console.persistence,'source',{
		get:function(){return this.sourceName;},
		set:function(sName){this.sourceName=sName;}
	});
	
	root.console.persistence.log=function(messageString){			
		if(
			console.persistence.isActive && 
			typeof(console.persistence.logFileName) && 
			console.persistence.logFileName.length>0
		){
			var m="["+(new Date).toUTCString()+"]"
				 +"("+console.persistence.sourceName+")"
				 +messageString+"\n";
			fs.appendFile(console.persistence.logFileName,m,{encoding:'utf8',flags:'a'});
			console.persistence.logWriteCount++;
		}
	}
	root.console.persistence.error=function(messageString){		
		if(
			console.persistence.isActive && 
			typeof(console.persistence.errorFileName) && 
			console.persistence.errorFileName.length>0
		){
			var m="["+(new Date).toUTCString()+"]"
				 +"("+console.persistence.sourceName+")"
				 +messageString+"\n";
			fs.appendFile(console.persistence.logFileName,m,{encoding:'utf8',flags:'a'});
			console.persistence.errorWriteCount++;
		}	
	}
	/*
		Overload the console.{log|error}() methods.
	 */
	root.console.io={
		stdout:console.log,
		stderr:console.error,
	}
	root.console.log=function(messageString){
		root.console.io.stdout(messageString);
		root.console.persistence.log(messageString);
	}
	
	root.console.error=function(messageString){
		root.console.io.stderr(messageString);
		root.console.persistence.error(messageString);
	}
}
