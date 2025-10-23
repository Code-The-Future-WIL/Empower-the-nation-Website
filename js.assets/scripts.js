document.addEventListener("DOMContentLoaded", function () {
  // Log to console to confirm JS connection
  console.log("✅ JS is connected and running");

  // Get the calculate button element by its ID
  const calcBtn = document.getElementById("calc-btn");
  // Get the input field where total fees will be displayed
  const totalFeesInput = document.getElementById("total-fees");

  // Object holding course prices mapped by their values (keys)
  const coursePrices = {
    "first-aid": 1500,
    "sewing": 1500,
    "landscaping": 1500,
    "life-skills": 1500,
    "child-minding": 750,
    "cooking": 750,
    "garden-maintenance": 750
  };

  // Add click event listener to the calculate button
  calcBtn.addEventListener("click", function () {
    // Initialize total fees to zero
    let total = 0;

    // Select all checked checkboxes with name="course"
    const selectedCourses = document.querySelectorAll('input[name="course"]:checked');

    // Loop through each selected course and add its price to total
    selectedCourses.forEach((course) => {
      total += coursePrices[course.value];
    });

    // Update the total fees input field with the calculated amount formatted as currency
    totalFeesInput.value = "R" + total.toFixed(2);

    // Log the calculated total to the console for debugging
    console.log("💰 Total calculated:", total);
  });
});
 document.addEventListener('DOMContentLoaded', function() {
            const dropdown = document.getElementById('address-dropdown');
            const mapDisplay = document.getElementById('map-display');
            
            // Map URLs for each address 
            const mapUrls = [
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.123456789012!2d28.0473053!3d-26.2041028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s463%20Main%20St%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza",
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.123456789012!2d27.8274954!3d-26.3205703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a5fcd021a34f%3A0xdfa70b2bc402fe81!2s33%20Rose%20Avenue%2C%20Lenasia%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza",
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.123456789012!2d28.0473053!3d-26.2041028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950a58432f96ab%3A0xf82ce26908d67f01!2s24%20Market%20Road%2C%20Newlands%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
            ];
            
            // Add event listener to dropdown
            dropdown.addEventListener('change', function() {
                const selectedIndex = this.value;
                if (selectedIndex !== "") {
                    mapDisplay.src = mapUrls[selectedIndex];
                }
            });
        });