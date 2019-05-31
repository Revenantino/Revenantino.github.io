
var qrLastSupper = document.createElement ("img");
qrLastSupper.src = "ginger.png";
document.body.appendchild(qrLastSupper);
function AssignValues() {
  localStorage.setItem("text1", document.form1.text1.value);
}
function Value1() {
  alert("Value  is " + localStorage.getItem("text1"));
}
function Delete1() {
  localStorage.removeItem("text1")
  alert("Value  is removed");
}
function get_ajax(data_type) {
  data_url = document.forms["ajax_form"]["data_url"].value;
  if (data_url == "") {
      alert("data_url must be filled out");
      return false;
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          if (data_type == 'text') {
              document.getElementById('aj_cont').innerHTML = this.responseText;
          } else if (data_type == 'status') {
              document.getElementById('aj_cont').innerHTML = this.statusText;
          } else if (data_type == 'headers') {
              document.getElementById('aj_cont').innerHTML = this.getAllResponseHeaders();
          }

      }
  };
  xhttp.open("GET", data_url, true);
  xhttp.send();
  return xhttp.responseText;
}

$(document).ready(function() {
    $("#hide").click(function() {
        $("#toggle").hide();
    });
    $("#show").click(function() {
        $("#toggle").show();
    });
});

$(document).ready(function() {
    $("#fadeIn").click(function() {
        $("#toggle1").fadeIn("slow");
    });
    $("#fadeOut").click(function() {
        $("#toggle1").fadeOut("slow");
    });
});

$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function() {
    $("#animate").click(function() {
        var animation = $("#animate1");
        animation.animate({ height: '50vh', opacity: '0.4' }, "slow");
        animation.animate({ width: '75vh', opacity: '0.8' }, "slow");
        animation.animate({ height: '35vh', opacity: '0.4' }, "slow");
        animation.animate({ width: '50vh', opacity: '0.8' }, "slow");
    });
});

$(document).ready(function() {
    $("#start").click(function() {
        $("#stop1").slideDown(4000);
    });
    $("#stop").click(function() {
        $("#stop1").stop();
    });
});

$(document).ready(function() {
    $("#callback").click(function() {
        $("#callback1").hide("slow", function() {
            alert("The image is now hidden");
        });
    });
});

$(document).ready(function() {
    $("#chain").click(function() {
        $("#chain1").slideUp(2000).slideDown(2000);
    });
});
