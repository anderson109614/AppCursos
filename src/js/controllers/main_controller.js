angular.module('AppCursos.controllers.Main', [])


  .controller('MainController', function ($scope, $http) {
    ///
    desblo();
    ///
    $http.get('http://localhost/ServicioPrueba/servicio.php').
        then(function(response) {
            $scope.cursos = response.data;
    });

    $scope.Ui.turnOn('modalemployers');

    $scope.redireccionarFa = function () {
      openBrowser('https://www.facebook.com/DirecciondeEducacionUTA/?fref=ts');
    };
    $scope.redireccionarTw = function () {
      openBrowser('https://twitter.com/deadv_uta');
    };
    $scope.redireccionarYou= function () {
      openBrowser('https://www.youtube.com/channel/UCFqeEryqQGQCN_luvz6ipQg');
    };
    $scope.redireccionarWat= function () {
     openBrowser('https://wa.me/+593998918159');
     //cordova.plugins.Whatsapp.send("1112223333");
    };
    $scope.redireccionarMap= function () {
      openBrowser('https://goo.gl/maps/bPjE6dmSSHHhTmEw9');
      //cordova.plugins.Whatsapp.send("1112223333");
     };
     
     
  });
  var t;
  var po=0;
  function timeout() {
    t = setTimeout(function() {
      document.getElementById("aumenta").style.width=(po+2)+"%";
      po=po+2;
      if(po<100){
        timeout();
      }
      
    }, 50);
   
   // console.log(po);
  }

function desblo(){
  var b= document.getElementById("bloquea");
  //b.style.display="none";
  var w= screen.width;
  var h=screen.height;
  b.style.height=h+"px";
  b.style.width=w+"px";
  var b2= document.getElementById("bloquea2");
  //b2.style.display="none";
  //setTimeout("des()",1000);
  setTimeout("des()", 2000);
  timeout();
  //b.style.display="none";
    //b2.style.display="none";
  
}
  function des(){
    
    var b= document.getElementById("bloquea");
    var b2= document.getElementById("bloquea2");
    
    //b.style.display="none";
    b.style.height="0px"
    b2.style.display="none";
    
  }

function openBrowser(url) {
  if (!url) {
    return;
  }

  // turn my url into a scheme/intent url
  getAvailabilityScheme(url, function (url) {
    window.open(url, '_system');
  });
}

function getAvailabilityScheme(url, callback) {
  var schemeOrPackage;
  var schemeUrl;

  // check for appavaialbility plugin
  if (!window.appAvailability) {
    callback(url);
  }

  // facebook
  if (url.indexOf('facebook.com/') !== -1) {
    schemeOrPackage = isAndroid ? 'com.facebook.katana' : 'fb://'
    schemeUrl = 'fb://profile/' + url.split('facebook.com/')[1];
  }

  // twitter
  if (url.indexOf('twitter.com/') !== -1) {
    schemeOrPackage = isAndroid ? null : 'twitter://'
    schemeUrl = 'twitter://user?screen_name=' + url.split('twitter.com/')[1];
  }

  if (schemeOrPackage && schemeUrl) {
    window.appAvailability.check(schemeOrPackage, function () {
      callback(schemeUrl);
    }, function () {
      callback(url);
    });
  } else {
    callback(url);
  }
}

(function() {
  $(document).ready(function() {
    var walkthrough;
    walkthrough = {
      index: 0,
      nextScreen: function() {
        if (this.index < this.indexMax()) {
          this.index++;
          return this.updateScreen();
        }
      },
      prevScreen: function() {
        if (this.index > 0) {
          this.index--;
          return this.updateScreen();
        }
      },
      updateScreen: function() {
        this.reset();
        this.goTo(this.index);
        return this.setBtns();
      },
      setBtns: function() {
        var $lastBtn, $nextBtn, $prevBtn;
        $nextBtn = $('.next-screen');
        $prevBtn = $('.prev-screen');
        $lastBtn = $('.finish');
        if (walkthrough.index === walkthrough.indexMax()) {
          $nextBtn.prop('disabled', true);
          $prevBtn.prop('disabled', false);
          return $lastBtn.addClass('active').prop('disabled', false);
        } else if (walkthrough.index === 0) {
          $nextBtn.prop('disabled', false);
          $prevBtn.prop('disabled', true);
          return $lastBtn.removeClass('active').prop('disabled', true);
        } else {
          $nextBtn.prop('disabled', false);
          $prevBtn.prop('disabled', false);
          return $lastBtn.removeClass('active').prop('disabled', true);
        }
      },
      goTo: function(index) {
        $('.screen').eq(index).addClass('active');
        return $('.dot').eq(index).addClass('active');
      },
      reset: function() {
        return $('.screen, .dot').removeClass('active');
      },
      indexMax: function() {
        return $('.screen').length - 1;
      },
      closeModal: function() {
        $('.walkthrough, .shade').removeClass('reveal');
        return setTimeout(((function(_this) {
          return function() {
            $('.walkthrough, .shade').removeClass('show');
            _this.index = 0;
            return _this.updateScreen();
          };
        })(this)), 200);
      },
      openModal: function() {
        $('.walkthrough, .shade').addClass('show');
        setTimeout(((function(_this) {
          return function() {
            return $('.walkthrough, .shade').addClass('reveal');
          };
        })(this)), 200);
        return this.updateScreen();
      }
    };
    $('.next-screen').click(function() {
      return walkthrough.nextScreen();
    });
    $('.prev-screen').click(function() {
      return walkthrough.prevScreen();
    });
    $('.close').click(function() {
      return walkthrough.closeModal();
    });
    $('.open-walkthrough').click(function() {
      return walkthrough.openModal();
    });
    walkthrough.openModal();
    return $(document).keydown(function(e) {
      switch (e.which) {
        case 37:
          walkthrough.prevScreen();
          break;
        case 38:
          walkthrough.openModal();
          break;
        case 39:
          walkthrough.nextScreen();
          break;
        case 40:
          walkthrough.closeModal();
          break;
        default:
          return;
      }
      e.preventDefault();
    });
  });

}).call(this);