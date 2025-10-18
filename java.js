$(document).ready(function() {

    // Run only on the contact form
    $('#contactForm').on('submit', function(e) {
      e.preventDefault();

      // Get field values
      let name = $('#username').val().trim();
      let email = $('#email').val().trim();
      let phone = $('#phone').val().trim();
      let query = $('#query').val().trim();

      // Validation
      if (name === "" || email === "" || phone === "" || query === "") {
        alert("Fill all the fields first!");
        return;
      }

      // If all fields filled
      alert("Form Submitted Successfully");

      // Clear fields
      $('#username').val("");
      $('#email').val("");
      $('#phone').val("");
      $('#query').val("");
    });

  });
  