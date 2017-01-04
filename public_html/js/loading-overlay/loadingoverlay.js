/***************************************************************************************************
 LoadingOverlay - A flexible loading overlay jQuery plugin
 Author          : Gaspare Sganga
 Version         : 1.5.2
 License         : MIT
 Documentation   : http://gasparesganga.com/labs/jquery-loading-overlay/
 ****************************************************************************************************/
(function ($, undefined) {
  // Default Settings
  var _defaults = {
    color: "rgba(255, 255, 255, 0.8)",
    custom: "",
    fade: true,
    fontawesome: "",
    image: "data:image/gif;base64,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",
    imagePosition: "center center",
    maxSize: "100px",
    minSize: "20px",
    resizeInterval: 50,
    size: "50%",
    zIndex: 9999
  };

  $.LoadingOverlaySetup = function (settings) {
    $.extend(true, _defaults, settings);
  };

  $.LoadingOverlay = function (action, options) {
    switch (action.toLowerCase()) {
      case "show":
        var settings = $.extend(true, {}, _defaults, options);
        _Show("body", settings);
        break;

      case "hide":
        _Hide("body", options);
        break;
    }
  };

  $.fn.LoadingOverlay = function (action, options) {
    switch (action.toLowerCase()) {
      case "show":
        var settings = $.extend(true, {}, _defaults, options);
        return this.each(function () {
          _Show(this, settings);
        });

      case "hide":
        return this.each(function () {
          _Hide(this, options);
        });
    }
  };


  function _Show(container, settings) {
    container = $(container);
    var wholePage = container.is("body");
    var count = container.data("LoadingOverlayCount");
    if (count === undefined)
      count = 0;
    if (count == 0) {
      var overlay = $("<div>", {
        class: "loadingoverlay",
        css: {
          "background-color": settings.color,
          "display": "flex",
          "flex-direction": "column",
          "align-items": "center",
          "justify-content": "center"
        }
      });
      if (settings.zIndex !== undefined)
        overlay.css("z-index", settings.zIndex);
      if (settings.image)
        overlay.css({
          "background-image": "url(" + settings.image + ")",
          "background-position": settings.imagePosition,
          "background-repeat": "no-repeat"
        });
      if (settings.fontawesome)
        $("<div>", {
          class: "loadingoverlay_fontawesome " + settings.fontawesome
        }).appendTo(overlay);
      if (settings.custom)
        $(settings.custom).appendTo(overlay);
      if (wholePage) {
        overlay.css({
          "position": "fixed",
          "top": 0,
          "left": 0,
          "width": "100%",
          "height": "100%"
        });
      } else {
        overlay.css("position", (container.css("position") == "fixed") ? "fixed" : "absolute");
      }
      _Resize(container, overlay, settings, wholePage);
      if (settings.resizeInterval > 0) {
        var resizeIntervalId = setInterval(function () {
          _Resize(container, overlay, settings, wholePage);
        }, settings.resizeInterval);
        container.data("LoadingOverlayResizeIntervalId", resizeIntervalId);
      }
      if (!settings.fade) {
        settings.fade = [0, 0];
      } else if (settings.fade === true) {
        settings.fade = [400, 200];
      } else if (typeof settings.fade == "string" || typeof settings.fade == "number") {
        settings.fade = [settings.fade, settings.fade];
      }
      container.data({
        "LoadingOverlay": overlay,
        "LoadingOverlayFadeOutDuration": settings.fade[1]
      });
      overlay
              .hide()
              .appendTo("body")
              .fadeIn(settings.fade[0]);
    }
    count++;
    container.data("LoadingOverlayCount", count);
  }

  function _Hide(container, force) {
    container = $(container);
    var count = container.data("LoadingOverlayCount");
    if (count === undefined)
      return;
    count--;
    if (force || count <= 0) {
      var resizeIntervalId = container.data("LoadingOverlayResizeIntervalId");
      if (resizeIntervalId)
        clearInterval(resizeIntervalId);
      container.data("LoadingOverlay").fadeOut(container.data("LoadingOverlayFadeOutDuration"), function () {
        $(this).remove()
      });
      container.removeData(["LoadingOverlay", "LoadingOverlayCount", "LoadingOverlayFadeOutDuration", "LoadingOverlayResizeIntervalId"]);
    } else {
      container.data("LoadingOverlayCount", count);
    }
  }

  function _Resize(container, overlay, settings, wholePage) {
    if (!wholePage) {
      var x = (container.css("position") == "fixed") ? container.position() : container.offset();
      overlay.css({
        top: x.top + parseInt(container.css("border-top-width"), 10),
        left: x.left + parseInt(container.css("border-left-width"), 10),
        width: container.innerWidth(),
        height: container.innerHeight()
      });
    }
    var c = wholePage ? $(window) : container;
    var size = "auto";
    if (settings.size && settings.size != "auto") {
      size = Math.min(c.innerWidth(), c.innerHeight()) * parseFloat(settings.size) / 100;
      if (settings.maxSize && size > parseInt(settings.maxSize, 10))
        size = parseInt(settings.maxSize, 10) + "px";
      if (settings.minSize && size < parseInt(settings.minSize, 10))
        size = parseInt(settings.minSize, 10) + "px";
    }
    overlay.css("background-size", size);
    overlay.children(".loadingoverlay_fontawesome").css("font-size", size);
  }

}(jQuery));