function updateDateTime() {
  const now = new Date();


  document.getElementById("year").textContent = now.getFullYear();

 
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  const formattedDateTime = now.toLocaleString('en-US', options);

 
  document.getElementById("datetime").textContent = `Current Date & Time: ${formattedDateTime}`;
}


updateDateTime();


setInterval(updateDateTime, 1000);






document.getElementById("contactForm").addEventListener("submit", function (e) {
  const mobileInput = document.getElementById("mobile");
  const mobileError = document.getElementById("mobileError");
  const mobileValue = mobileInput.value.trim();

  if (mobileValue.length > 11) {
    mobileError.textContent = "Mobile number must not exceed 11 digits.";
    e.preventDefault(); 
  } else {
    mobileError.textContent = "";
  }
});


