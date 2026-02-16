
      document.addEventListener("click", function() {
          var el = document.documentElement;
          var rfs = el.requestFullscreen
              || el.webkitRequestFullscreen
              || el.mozRequestFullScreen
              || el.msRequestFullscreen;
          if (typeof rfs === "function") {
              rfs.call(el);
          } else {
              console.warn("Fullscreen API is not supported.");
          }
      });
