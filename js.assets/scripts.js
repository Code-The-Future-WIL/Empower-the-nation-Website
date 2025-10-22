// Wait until the DOM is fully loaded before running the script
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



