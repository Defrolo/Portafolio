"use strict";

$(document).ready(function () {
  const $body = $("body");
  const $cursor = $("#cursor");
  const $a = $(".a");

  $body.on("mousemove", function (event) {
    console.clear();
    const clientX = event.originalEvent.clientX;
    const clientY = event.originalEvent.clientY;
    $cursor.css({
      left: clientX - 40 + "px",
      top: clientY - 40 + "px",
    });
  });

  $a.on({
    mouseover: function () {
      $cursor.addClass("mini");
    },
    mouseout: function () {
      $cursor.removeClass("mini");
    },
  });
});
