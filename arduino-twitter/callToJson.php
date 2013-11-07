<?php
	session_start();
	require_once("twitteroauth/twitteroauth/twitteroauth.php"); //Path to twitteroauth library
	 
	$twitteruser = "qa_cm_tester";
	$notweets = 30;
	$consumerkey = "5vVTs8POzrwgTZMahXzgdg";
	$consumersecret = "DY25xz32NGlkjBmbKWqUCxeGgjPbfGW4PlBdlUbSD8";
	$accesstoken = "126044410-hB6encZMYUL5ZQNhkDLLIRAeRWka2tfuWhQVtICb";
	$accesstokensecret = "AIe5rWe0DBbdOvhEPG2SqWEMua3XnzWKivrX7Z5M";
	 
	function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
	  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
	  return $connection;
	}
	 
	$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
	 
	$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
	 
	//$data = json_encode($tweets);
	asort($tweets);

	$data = array_shift($tweets);

	echo json_encode( array('id' => $data->id, 'text' => $data->text) );
?>