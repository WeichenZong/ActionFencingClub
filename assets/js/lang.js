var lang = {
    "en-US": {
      title: "Action Fencing Club",
      
    },
    "fr-CA": {
      title: "Action Club d'Escrim",
      // other translations...
    },
    "zh-CN":{
      title: "ACE 击剑俱乐部",
    }
  };
  
  window.onload = function() {
    // Get browser language, default to 'en-US' if it's not one of the supported languages
    var userLang = navigator.language || navigator.userLanguage; 
    userLang = lang[userLang] ? userLang : 'en-US';
    document.getElementsByClassName('language-selector')[0].value = userLang;
    console.log(userLang);
    // Translate page
    document.querySelectorAll("[data-translate]").forEach(function(element) {
      var key = element.getAttribute("data-translate");
      element.textContent = lang[userLang][key];
    });
  };
  document.getElementsByClassName('language-selector')[0].addEventListener('change', function() {
    localStorage.setItem('language', this.value);
    console.log(this.value);
    console.log("language changed");
    window.location.reload();
  });
  