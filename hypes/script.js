
var init = function() {
    //display default images
    feed1.run(); 

    //display content based on combobox
    $('#submit').on('click', function(e){
        e.preventDefault();
        loadItems();
    });
};


$( document ).ready(function(){
  init();
});

var loadItems = function() {
  var places = $('.locKorea').val();
  console.log(places);

  $('#instafeed').empty();

    if (places == "Shinsadong"){
        // window.location.reload();
        feed2.run();
    } else if (places == "Hongdae"){
        feed3.run();
    } else if (places == "Kyungbokgung"){
        feed4.run();
    } else if (places == "Dongdaemun"){
        feed5.run();
    } else {
        feed1.run();  
    }  
};


//Insadong
var feed1 = new Instafeed({
    get: 'location',
    locationId: 256296819,
    clientId: '3d587bd896904d17bc4c4465429604b7',
    accessToken: '643076550.3d587bd.d54ebec2cbce45dfaf73b8ea7c4e29e9',
    resolution: 'low_resolution',
    limit: 20,
    sortBy: 'most-recent',
    template: '<a href="{{link}}" target="_blank"><img src="http://{{image}}" /><div class="likes">&hearts; {{likes}} </div></a>'

});

//Gangnam
var feed2 = new Instafeed({
    get: 'location',
    locationId: 87315,
    clientId: '3d587bd896904d17bc4c4465429604b7',
    accessToken: '643076550.3d587bd.d54ebec2cbce45dfaf73b8ea7c4e29e9',
    resolution: 'low_resolution',
    limit: 20,
    sortBy: 'most-recent',
    template: '<a href="{{link}}" target="_blank"><img src="http://{{image}}" /><div class="likes">&hearts; {{likes}} </div></a>'

});

//Hongdae
var feed3 = new Instafeed({
    get: 'location',
    locationId: 264597940,
    clientId: '3d587bd896904d17bc4c4465429604b7',
    accessToken: '643076550.3d587bd.d54ebec2cbce45dfaf73b8ea7c4e29e9',
    resolution: 'low_resolution',
    limit: 20,
    sortBy: 'most-recent',
    template: '<a href="{{link}}" target="_blank"><img src="http://{{image}}" /><div class="likes">&hearts; {{likes}} </div></a>'

});

//Kyungbokgung
var feed4 = new Instafeed({
    get: 'location',
    locationId: 61958447,
    clientId: '3d587bd896904d17bc4c4465429604b7',
    accessToken: '643076550.3d587bd.d54ebec2cbce45dfaf73b8ea7c4e29e9',
    resolution: 'low_resolution',
    limit: 20,
    sortBy: 'most-recent',
    template: '<a href="{{link}}" target="_blank"><img src="http://{{image}}" /><div class="likes">&hearts; {{likes}} </div></a>'

});

//Dongdaemun
var feed5 = new Instafeed({
    get: 'location',
    locationId: 352390536,
    clientId: '3d587bd896904d17bc4c4465429604b7',
    accessToken: '643076550.3d587bd.d54ebec2cbce45dfaf73b8ea7c4e29e9',
    resolution: 'low_resolution',
    limit: 20,
    sortBy: 'most-recent',
    template: '<a href="{{link}}" target="_blank"><img src="http://{{image}}" /><div class="likes">&hearts; {{likes}} </div></a>'

});


