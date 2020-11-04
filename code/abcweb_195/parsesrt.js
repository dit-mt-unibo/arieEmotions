/* https://stackoverflow.com/questions/33145762/parse-a-srt-file-with-jquery-javascript/33147421 */
var PF_SRT = function() {
  var pattern = /(\d+)\n([\d:,]+)\s+-{2}\>\s+([\d:,]+)\n([\s\S]*?(?=\n{2}|$))/gm;
  var _regExp;

  var init = function() {
    _regExp = new RegExp(pattern);
  };
  function convertToMilliseconds(text) {
	  var a = text.split(":");	// +a[2].replace(',','.')
	  seconds = parseInt(a[0]) * 3600 + parseInt(a[1]*60) + parseFloat(a[2].replace(',','.'));
	  return seconds*1000;
  }
  var parse = function(f) {
    if (typeof(f) != "string")
      throw "Sorry, Parser accept string only.";

    var result = [];
    if (f == null)
      return _subtitles;

    f = f.replace(/\r\n|\r|\n/g, '\n')

    while ((matches = pattern.exec(f)) != null) {
      result.push(toLineObj(matches));
    }
    return result;
  }
  var toLineObj = function(group) {
    return {
      line: group[1],
      startTime: convertToMilliseconds(group[2]),
      endTime: convertToMilliseconds(group[3]),
      text: group[4]
    };
  }
  init();
  return {
    parse: parse
  }
}();


$(function() {
	
  $("#doParse").on('click', function() {
    try {
    	var text = $("#source").val();
      var result = PF_SRT.parse(text);
      var wrapper = $("#result tbody");
      wrapper.html('');
      for (var line in result) {
        var obj = result[line];
        wrapper.append("<tr><td>" + obj.line + "</td><td>" + obj.startTime + "</td><td>" + obj.endTime + "</td><td>" + obj.text + "</td></tr>");
      }
	  parser = new Parser(result);
    } catch (e) {
      alert(e);
    }
  });
  
function Parser(result) {
	  this.t0 = 0;
	  this.lines = result;
	  this.curLine = 0;
}

Parser.prototype.runclock = function(){
    this.t0 = new Date().getTime();
	this.curLine = 0;
	this.timer(this);
}

Parser.prototype.CheckLyrics = function(t) {
	if(this.curLine < 0)
	{
		firstTime = this.lines[0].startTime;
		if(t > firstTime)
		{
			this.curLine = 0;
			$('#lyrics').html(this.lines[this.curLine].text);
		}
	}
	else {
		curEndTime = this.lines[this.curLine].endTime;
		if(t > curEndTime)
		{
			if(this.curLine == (this.lines.length-1))
			{
				$('#lyrics').html("");
				return;
			}
			else
			{
				this.curLine++;
				$('#lyrics').html(this.lines[this.curLine].text);
			}
		}
	}
	return this;
}

Parser.prototype.timer = function(){
	t1 = new Date().getTime();
	t = t1 - this.t0;
    this.CheckLyrics(t);
    setTimeout(this.timer.bind(this), 100);
}

var parser = new Parser([]);

$("#runClock").on('click', function() {
	alert("sono qui!");
	if(parser)
		parser.runclock();
});
 
});

