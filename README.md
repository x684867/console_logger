console_logger (c) 2014 Sam Caldwell 
====================================

	
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

	OBJECTIVE: 
		To extend the Node.JS console object with file-write capabilities which will
		allow existing code to be retrofit with logging capabilities on stdout and
		stderr with little to no code re-write.
		
	HOW TO INSTALL:
		In your code, before you call console.log() or console.error(), add the following
		line:
				require('console_logger.js')();
		
		This will load the console_logger, while the second pair of parenthesis () will
		invoke the console_logger module to overload console.log.
		
	HOW TO USE:
		Turn on the persistent logger:
	
			console.persistence.isActive=true;

		Turn off the persistent logger:
		
			console.persistence.isActive=false;
			
		Define the log file:
		
			console.persistence.logFile='myLogFile.log';
			console.persistence.errorFile='myErrorFile.log';
			
		If you want to separate one source from another, you can:
		
			console.persistence.source='myLogSourceIdentifier';
	
	WHAT NEEDS TO HAPPEN:
	
		(1) I would like to integrate this further into console so that I can create
		    new instances of the overloaded console object, with each being created for
		    a unique source.
		    
		(2) I would also like to just require() the file rather than require())().
		
		