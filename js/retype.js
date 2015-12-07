// Big thanks to http://musicforprogramming.net/ for the script!

var container = document.getElementById('changeText');


function updateText(txt)
{
	container.innerHTML = txt;
}

var things = ['cool', 'fantastic', 'awesome', 'amazing', 'radical', 'nice', 'gnarly', 'class'];
var t = -1;
var thing = '';
var message = '';
var mode = 'delete';
var delay = 0;

function tick()
{
	if(container.innerHTML.length == 0)
	{
		t++;
		if(t > things.length-1) {t = 0;}
		thing = things[t];
		message = '';
		mode = 'write';
	}

	switch(mode)
	{
		case 'write' :
			message += thing.slice(0, 1);
			thing = thing.substr(1);

			updateText(message);

			if(thing.length == 0)
			{
				mode = 'delete';
				delay = 3000;
			} else {
				delay = 32 + Math.round(Math.random() * 100);
			}
			break;

		case 'delete' :
			message = message.slice(0, -1);
			updateText(message);

			if(message.length == 0)
			{
				mode = 'write';
				delay = 500;
			} else {
				delay = 32 + Math.round(Math.random() * 128);
			}
			break;
	}

	window.setTimeout(tick, delay);
}

tick();
