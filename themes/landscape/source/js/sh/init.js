$("pre code").each(function(index,element){
    var zlass = $(element).attr("class");
    $(element).parent().attr("class","brush: " +zlass);
    $(element).parent().html($(element).html());
	SyntaxHighlighter.highlight();
});