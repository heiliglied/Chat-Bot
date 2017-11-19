'use strict';

require('dotenv').config({ path: 'configuration.env' });
const io = require('socket.io');
const path = require('path');
const http = require('http');
const fs = require('fs');
const url = require('url');

const port = process.env.PORT || 6974;



function call_enter(that) {
    var obj = that;
    var key = event.keyCode || event.which;
    if (key == 13) {
        return_message(event, obj);
    }
}

function return_message(event, obj) {
    if (!event.shiftKey) {
        obj.innerHTML = '';
        event.preventDefault();
        obj.focus();
    }
}
/*
function add_emoji() {
	var selection, range;
	var emoji = '<img src="' + 'emoji_icon.png' + '" width="16px" height="16px">';
	
	if(window.getSelection) {
		//IE9 > and Another
		selection = window.getSelection();
		if(selection.getRangeAt && selection.rangeCount) {
			range = selection.getRangeAt(0);
			//range.deleteContents();
			
			var el = document.createElement("div");
			el.innerHTML = emoji;
			var frag = document.createDocumentFragment(), node, lastNode;

			while ( (node = el.firstChild) ) {
				lastNode = frag.appendChild(node);
			}

			range.insertNode(frag);
			
			if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                selection.removeAllRanges();
                selection.addRange(range);
            }
		}
	}
}
*/

function add_emoji() {
    var selection, range;
    var emoji = document.createElement('img');
    emoji.id = 'emoji';
    emoji.src = 'emoji_icon.png';
    emoji.width = 16;
    emoji.height = 16;

    var emojiie8 = '<img src="' + 'emoji_icon.png' + '" width="16px" height="16px">';

    if (window.getSelection) {
        selection = window.getSelection();
        if (selection.getRangeAt && selection.rangeCount) {
            range = selection.getRangeAt(0);
            range.insertNode(emoji);
            range.setStartAfter(emoji);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    } else {
        var obj = document.getElementById('chatbot_input');
        var text = obj.innerHTML;
        obj.innerHTML = obj.innerHTML + emojiie8;
        obj.focus();
    }
}


var server = http.createServer(function (request, response) {
    //var querystring = url.parse(request.url, true);
    //var queries = querystring.query;
    //console.log(queries.type);
}).on('request', function (request, response) {

    //리퀘스트 이벤트.
    fs.readFile('static/chat_stat.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
        console.log(error);
    });
    
    }).listen(port, function () {
        console.log('listen');
    });

io.listen(server).sockets.on('connection', function (socket) {
    
});