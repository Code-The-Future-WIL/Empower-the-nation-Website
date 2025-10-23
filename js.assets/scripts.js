// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ JS connected and running");

  // ===== REQUEST PAGE (Fee Calculation & Consultation Submission) =====

  // Get elements only if they exist on the current page
  const calcBtn = document.getElementById("calc-btn");
  const totalFeesInput = document.getElementById("total-fees");
  const requestBtn = document.getElementById("request-btn");

  const subtotalDisplay = document.getElementById("subtotal-display");
  const discountDisplay = document.getElementById("discount-display");
  const afterDiscountDisplay = document.getElementById("after-discount-display");
  const vatDisplay = document.getElementById("vat-display");
  const finalTotalDisplay = document.getElementById("final-total-display");

  // Course price list
  const coursePrices = {
    "first-aid": 1500,
    "sewing": 1500,
    "landscaping": 1500,
    "life-skills": 1500,
    "child-minding": 750,
    "cooking": 750,
    "garden-maintenance": 750,
  };

  // ===== Function: Calculate Fees =====
  function calculateFees() {
    const selectedCourses = document.querySelectorAll('input[name="course"]:checked');

    if (selectedCourses.length === 0) {
      alert("⚠️ Please select at least one course.");
      return;
    }

    // Calculate subtotal
    let subtotal = 0;
    selectedCourses.forEach(course => {
      subtotal += coursePrices[course.value];
    });

    // Determine discount rate
    let discountRate = 0;
    if (selectedCourses.length === 2) {
      discountRate = 0.05; // 5%
    } else if (selectedCourses.length === 3) {
      discountRate = 0.10; // 10%
    } else if (selectedCourses.length > 3) {
      discountRate = 0.15; // 15%
    }

    // Apply discount and VAT
    const discountAmount = subtotal * discountRate;
    const afterDiscount = subtotal - discountAmount;
    const vatAmount = afterDiscount * 0.15;
    const finalTotal = afterDiscount + vatAmount;

    // Update display
    totalFeesInput.value = formatCurrency(finalTotal);
    subtotalDisplay.textContent = formatCurrency(subtotal);
    discountDisplay.textContent = "- " + formatCurrency(discountAmount);
    afterDiscountDisplay.textContent = formatCurrency(afterDiscount);
    vatDisplay.textContent = formatCurrency(vatAmount);
    finalTotalDisplay.textContent = formatCurrency(finalTotal);
  }

  // ===== Helper Function: Format Currency =====
  function formatCurrency(amount) {
    return "R" + amount.toFixed(2);
  }

  // ===== Function: Submit Consultation =====
  function submitConsultation() {
    const fullName = document.getElementById("full-name")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const selectedCourses = document.querySelectorAll('input[name="course"]:checked');

    // Validate inputs
    if (!fullName || !phone || !email) {
      alert("⚠️ Please fill in all your details (Full Name, Phone, Email).");
      return;
    }

    if (selectedCourses.length === 0) {
      alert("⚠️ Please select at least one course before submitting.");
      return;
    }

    // Success message
    alert(`✅ Thank you, ${fullName}!\nYour consultation request has been successfully submitted.\nWe’ll contact you soon at ${email} or ${phone}.`);

    // Reset form and totals
    document.getElementById("consult-form").reset();
    totalFeesInput.value = "";
    subtotalDisplay.textContent = "R0.00";
    discountDisplay.textContent = "-R0.00";
    afterDiscountDisplay.textContent = "R0.00";
    vatDisplay.textContent = "R0.00";
    finalTotalDisplay.textContent = "R0.00";
  }

  // ===== Event Listeners (Request Page Only) =====
  if (calcBtn) calcBtn.addEventListener("click", calculateFees);
  if (requestBtn) requestBtn.addEventListener("click", submitConsultation);

  // ===== CONTACT PAGE (Map Dropdown) =====

  const dropdown = document.getElementById("address-dropdown");
  const mapDisplay = document.getElementById("map-display");

  if (dropdown && mapDisplay) {
    console.log("🗺️ Contact page map script active");

    const mapUrls = [
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.123456789012!2d28.0473053!3d-26.2041028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s463%20Main%20St%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.123456789012!2d27.8274954!3d-26.3205703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a5fcd021a34f%3A0xdfa70b2bc402fe81!2s33%20Rose%20Avenue%2C%20Lenasia%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.123456789012!2d28.0473053!3d-26.2041028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950a58432f96ab%3A0xf82ce26908d67f01!2s24%20Market%20Road%2C%20Newlands%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
    ];

    dropdown.addEventListener("change", function () {
      const selectedIndex = parseInt(this.value);
      if (!isNaN(selectedIndex)) {
        mapDisplay.src = mapUrls[selectedIndex];
        console.log("📍 Map updated to:", mapUrls[selectedIndex]);
      }
    });
  }
});
