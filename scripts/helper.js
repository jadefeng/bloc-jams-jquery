class Helper {
	playPauseAndUpdate(song) {
		console.log(song);
		player.playPause(song)
     	$('#time-control .total-time').text( player.prettyTime(song.duration) );

	}
}

const helper = new Helper();
