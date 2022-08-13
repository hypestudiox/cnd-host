const [...inputss] = document.querySelectorAll(".custom-hybrid"),
  in_0 = inputss[0],
  in_1 = inputss[1],
  custom_hybrid_fee = document.querySelector("#custom-hybrid-price");

inputss.forEach((input) => {
  input.addEventListener("keyup", calcFee);
});

function calcFee() {
  var d_hrs = in_0.value;
  var s_hrs = in_1.value;
  if (d_hrs > 24) {
    d_rate = 360;
  } else if (d_hrs > 12) {
    d_rate = 380;
  } else {
    d_rate = 420;
  }
  if (s_hrs > 6) {
    s_rate = 220;
  } else {
    s_rate = 240;
  }
  if (s_hrs >= 6 && d_hrs >= 12) {
    s_rate_off = 0.5;
  } else {
    s_rate_off = 1;
  }
  var d_fee = d_hrs * d_rate;
  var s_fee = s_hrs * s_rate * s_rate_off;
  custom_hybrid_fee.textContent = ((d_fee + s_fee) / 10).toFixed(0) * 10;
}
