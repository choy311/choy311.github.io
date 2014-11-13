var feed = new Instafeed({
        get: 'location',
        locationId: 215622513,
        clientId: '3d587bd896904d17bc4c4465429604b7',
        accessToken: '643076550.3d587bd.d54ebec2cbce45dfaf73b8ea7c4e29e9',
        resolution: 'low_resolution',
        limit: 20,
        sortBy: 'most-recent',
  		template: '<a href="{{link}}" target="_blank"><img src="http://{{image}}" /><div class="likes">&hearts; {{likes}} </div></a>'

	});
	feed.run();