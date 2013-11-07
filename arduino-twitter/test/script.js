/*
 * Change to 
*/
$.getJSON('/twitter-proxy.php?url='+encodeURIComponent('statuses/user_timeline.json?screen_name=qa_cm_tester&count=2'), function(d){
	console.log('some');
// Some magic here
});