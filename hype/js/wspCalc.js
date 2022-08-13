const [...inputss] = document.querySelectorAll(".custom-hybrid"),
  in_0 = inputss[0],
  in_1 = inputss[1],
  custom_hybrid_fee = document.querySelector("#custom-hybrid-price");

inputss.forEach((input) => {
  input.addEventListener("keyup", calcFee);
});

let dLow = 8;
let sLow = 6;

// function to reset to default lowest value
function dLow_Reset() {
  if (in_0.value < dLow) {
    document.getElementById("d_hrs").value = dLow;
    calcFee();
  }
}
function sLow_Reset() {
  if (in_1.value < sLow) {
    document.getElementById("s_hrs").value = sLow;
    calcFee();
  }
}

// calculation function
function calcFee() {
  var d_hrs = in_0.value;
  var s_hrs = in_1.value;
  // define the rates
  if (d_hrs > 24) {
    d_rate = 360;
  } else if (d_hrs > 12) {
    d_rate = 380;
  } else {
    d_rate = 420;
  }
  if (s_hrs > sLow) {
    s_rate = 220;
  } else {
    s_rate = 240;
  }
  if (s_hrs >= sLow && d_hrs >= 12) {
    s_rate_off = 0.5;
  } else {
    s_rate_off = 1;
  }
  // take action to reset with delay
  setTimeout(dLow_Reset, 3000);
  setTimeout(sLow_Reset, 3000);
  // let's do the maths
  var d_fee = d_hrs * d_rate;
  var s_fee = s_hrs * s_rate * s_rate_off;
  custom_hybrid_fee.textContent = ((d_fee + s_fee) / 10).toFixed(0) * 10;
}
