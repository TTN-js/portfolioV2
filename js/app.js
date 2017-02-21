// jQuery check
console.log($);

// navbar sticky 
var nb = $(".navbar");

$(window).scroll(function(){
  if($(this).scrollTop() > window.innerHeight - 1){
    nb.removeClass("navbar");
    nb.addClass("main-nav-scrolled");
  } else {
    nb.removeClass("main-nav-scrolled");
    nb.addClass("navbar");
  }
});

// nav highlight
$(window).scroll(function(){
  $("#h").blur();
  $("#a").blur();
  $("#p").blur();
  $("#r").blur();
  $("#c").blur();
});

// scrolling
$( 'button' ).click(function(){
	window.scroll({ top: window.innerHeight, left: 0, behavior: 'smooth' });
});

$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);

    if ($id.length === 0) {
        return;
    }

    e.preventDefault();
    var pos = $id.position().top;

    switch(id) {
        case "#home":
           	window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            break;
        case "#about":
            window.scroll({ top: window.innerHeight + pos - 80, left: 0, behavior: 'smooth' });         		
            break;
        case "#portfolio":
            window.scroll({ top: window.innerHeight + pos - 80, left: 0, behavior: 'smooth' });
            break;
        case "#resume":
            window.scroll({ top: window.innerHeight + pos - 80, left: 0, behavior: 'smooth' });
            break;
        case "#contact":
            window.scroll({ top: window.innerHeight + pos - 80, left: 0, behavior: 'smooth' });
            break;
        default:
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    } 
});

var about = new Waypoint({
  element: document.getElementById('about'),
  handler: function(direction) {
  	if(direction === "down"){
  		$("#a").addClass('selected');
  		$("#h").removeClass('selected');
  		$("#p").removeClass('selected');
  		$("#r").removeClass('selected');
  		$("#c").removeClass('selected');
  	}else{
  		$("#h").addClass('selected');
  		$("#a").removeClass('selected');
  		$("#p").removeClass('selected');
  		$("#r").removeClass('selected');
  		$("#c").removeClass('selected');
  	}
  },
  offset: 150
});

var portfolio = new Waypoint({
  element: document.getElementById('portfolio'),
  handler: function(direction) {
  	if(direction === "down"){
  		$("#p").addClass('selected');
  		$("#h").removeClass('selected');
  		$("#a").removeClass('selected');
  		$("#r").removeClass('selected');
  		$("#c").removeClass('selected');
  	}else{
  		$("#a").addClass('selected');
  		$("#h").removeClass('selected');
  		$("#p").removeClass('selected');
  		$("#r").removeClass('selected');
  		$("#c").removeClass('selected');
  	}
  },
  offset: 150
});

var resume = new Waypoint({
  element: document.getElementById('resume'),
  handler: function(direction) {
  	if(direction === "down"){
  		$("#r").addClass('selected');
  		$("#h").removeClass('selected');
  		$("#p").removeClass('selected');
  		$("#a").removeClass('selected');
  		$("#c").removeClass('selected');
  	}else{
  		$("#p").addClass('selected');
  		$("#h").removeClass('selected');
  		$("#a").removeClass('selected');
  		$("#r").removeClass('selected');
  		$("#c").removeClass('selected');
  	}
  },
  offset: 150
});

var contact = new Waypoint({
  element: document.getElementById('contact'),
  handler: function(direction) {
  	if(direction === "down"){
  		$("#c").addClass('selected');
  		$("#h").removeClass('selected');
  		$("#p").removeClass('selected');
  		$("#r").removeClass('selected');
  		$("#a").removeClass('selected');
  	}else{
  		$("#r").addClass('selected');
  		$("#h").removeClass('selected');
  		$("#p").removeClass('selected');
  		$("#a").removeClass('selected');
  		$("#c").removeClass('selected');
  	}
  },
  offset: 150
});

// scroll to the top
$( '.back-to-top' ).click(function(){
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});
// scroll to top in refresh
// $(window).on('beforeunload', function() {
//     $(window).scrollTop(0);
// });

// type it out
var inputBox = document.querySelector("#mytypingText"),
	myString = "web developer & design enthusiast",
	myArray = myString.split(""),
	loopTimer;

var frameLoop = function() {
    if (myArray.length > 0) {
        inputBox.innerHTML += myArray.shift()
    } else {
        clearTimeout(loopTimer)
    }
    var loopTimer = setTimeout("frameLoop()", 90)
}

$( document ).ready(function(){
	frameLoop();
});


//github 
//my repo
var myGitRepoURl = "https://api.github.com/users/ttn-js/repos",
    promiseThomas = $.getJSON(myGitRepoURl),
    github = document.querySelector("#github");

var repoHeader =  '<div id="gh_label"><i class="fa fa-github-alt"></i><h5 style="display: inline;">GitHub Repositories</h5></div>'
    repoHeader += '<a href="https://github.com/TTN-js" target="_blank">'
    repoHeader += '<div><img src="images/headshot.png" alt="headshot" style="height:25px; display:inline; border-radius:50%;"><h5>TTN-js</h><div><i class="fa fa-code-fork"></i></div></div></a>'
    repoHeader += '<span class="divider"></span>'

github.innerHTML = repoHeader;

var repoContainer = '<div id="gh_list" style="height: 60vh; overflow: scroll;"></div>';

github.innerHTML += repoContainer;

var gh_list = document.querySelector("#gh_list");

var showRepo = function(jsonRepo) {

    var newHTMLString = "",
        dataArray = jsonRepo; 

    // console.log(dataArray);
    for (var i =  0; i < dataArray.length; i++){
      var singleRepo = dataArray[i];
      // console.log(singleRepo);
      newHTMLString += dataObjToHTML(singleRepo);
    }
    gh_list.innerHTML += newHTMLString;
}

var dataObjToHTML = function(singleRepo){

  var repoHTML  = '<section id="repo_list">' 
      repoHTML += '<ul class = "repoBox">' 
      repoHTML += '<p class="repoName">' + singleRepo.name +'</p>'
      // repoHTML += '<p class="stargazers">' + singleRepo.stargazers_count +'</p>' 
      // repoHTML += '<p class="language">' + singleRepo.language +'</p>'  
      repoHTML += '<p class="description">' + singleRepo.description +'</p>'
      repoHTML += '</ul>'
      repoHTML += '</section>'

  return repoHTML
}

promiseThomas.then(showRepo) 


