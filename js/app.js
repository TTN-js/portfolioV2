// jQuery check
console.log($);

// navbar sticky 
var nb = $(".navbar");

$(window).scroll(function(){
  if($(this).scrollTop() >= window.innerHeight - 10){
    nb.removeClass("navbar");
    nb.addClass("main-nav-scrolled");
  } else {
    nb.removeClass("main-nav-scrolled");
    nb.addClass("navbar");
  }
});

// scrolling
$( 'button' ).click(function(){
    $("html, body").animate({scrollTop:$('#about').offset().top - 120}, 700);
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
          $("html, body").animate({ scrollTop: 0 }, 700);
          $("#h").blur();
          break;
        case "#about":
          $("html, body").animate({scrollTop:$('#about').offset().top - 65}, 700); 
          $("#a").blur();           
          break;
        case "#portfolio":
          $("html, body").animate({scrollTop:$('#portfolio').offset().top - 65}, 700); 
          $("#p").blur();
          break;
        case "#resume":
          $("html, body").animate({scrollTop:$('#resume').offset().top - 65}, 700);
          $("#r").blur();
          break;
        case "#contact":
          $("html, body").animate({scrollTop:$('#contact').offset().top - 65}, 700);
          $("#c").blur();
          break;
        default:
          $("html, body").animate({ scrollTop: 0 }, 700);
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
  $("html, body").animate({ scrollTop: 0 }, 700);
});
// scroll to top in refresh
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

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
var myGitRepoURl = "https://api.github.com/users/ttn-js/repos?sort=updated",
    promiseThomas = $.getJSON(myGitRepoURl),
    github = document.querySelector("#github");

var showRepo = function(jsonRepo) {

    var newHTMLString = "",
        dataArray = jsonRepo; 

    var repoHeader =  '<div id="gh_label" style="text-align:center;"><i class="fa fa-github-alt fa-2x"></i><h4 style="display: inline; padding:0.5em;">GitHub Repositories</h4></div>'
        repoHeader += '<a href="https://github.com/TTN-js" target="_blank">'
        repoHeader += '<span class="divider" style="margin-top:10px; margin-bottom:0px;"></span>'

    github.innerHTML = repoHeader;

    var repoContainer = '<div id="gh_list" style="height: 70vh; overflow: scroll;"></div>';

    github.innerHTML += repoContainer;

    var gh_list = document.querySelector("#gh_list");

    console.log(dataArray);
    for (var i =  0; i < dataArray.length; i++){
      var singleRepo = dataArray[i];
      // console.log(singleRepo);
      newHTMLString += dataObjToHTML(singleRepo);
    }
    gh_list.innerHTML += newHTMLString;
}

var dataObjToHTML = function(singleRepo){

  var repoHTML  = '<section id="repo_list">' 
      repoHTML += '<ul class="repoBox" style="padding:7px; margin-top:5px; margin-bottom:5px; background-color:rgba(0,0,0,0.2); border-radius:5px;">' 
      repoHTML += '<a href="'+singleRepo.clone_url+'" target="_blank">'
      repoHTML += '<p class="repoName" style="font-size:15px; margin-bottom:7px;">' + singleRepo.name +'</p>'
      repoHTML += '</a>'
      repoHTML += '<p class="description" style="margin-bottom:0px; font-size:12px">' + singleRepo.description +'</p>'
      repoHTML += '</ul>'
      repoHTML += '</section>'

  return repoHTML
}

promiseThomas.then(showRepo) 


