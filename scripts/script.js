/********************
Esther Brown
CIS 376 Spring 2020
Dev 07: Javascript Functions
File: scripts.js
Due: 03/17/2020
**********************/

(function() {
  $(document).ready(function() {
    /************ Variables ************/

    var greeting = "[not intialized] ";
    var name = "[not initialized]";
    var message = "[not initialized]";
    // Concatenate the three variables above to create the welcome message
    var welcome = greeting + name + message;

    // Create variables to hold details about the sign
    var sign = "[not initialized]";
    var tiles = sign.length;
    var subTotal = tiles * 5;
    var shipping = 7;
    var grandTotal = subTotal + shipping;

    /*************** Event Handling ****************/
    var payButton = document.getElementById("pay");
    payButton.onclick = function(event) {
      window.alert("User clicked pay button");
      event.preventDefault()
    };

    var resetButton = document.getElementById("reset");
    resetButton.onclick = function(event) {
      initiateVar();
      setfields();
      event.preventDefault()
    };

    /************* Functions Definitions**************/

    function initiateVar() {
      greeting = "Howdy! ";
      name = "Molly";
      message = ", please check your order:";
      sign = "Montague House";
      welcome = greeting + name + message;
      tiles = sign.length;
      subTotal = tiles * 5;
      shipping = 7;
      grandTotal = subTotal + shipping;
    }

    function setfields() {
      setTextContentById("greeting", welcome);
      setTextContentById("userSign", sign);
      setTextContentById("tiles", tiles);
      setPriceById("subTotal", subTotal);
      setPriceById("shipping", shipping);
      setPriceById("grandTotal", grandTotal);
    }

    function setTextContentById(getId, setMsg) {
      // Get the element that has an id of greeting
      var el = document.getElementById(getId);
      // Replace the content of that element with the personalized welcome message
      el.textContent = setMsg;
    }

    function setPriceById(getId, setMsg) {
      // Get the element that has an id of greeting
      var el = document.getElementById(getId);
      // Replace the content of that element with the personalized welcome message
      el.textContent = "$" + setMsg;
    }
    //add button to reset, onclick event
  });
})();
