const target = document.querySelector(".boutonn");

function handleClick() {

    const targetElement = document.querySelector(".titre");
    
  document.querySelector(".titre").innerText = "ecole du code";


  setTimeout(() => {
    console.log("Delayed for 3 second.");
    document.querySelector(".titre").innerText = "Transformez Votre Vision Digitale";
  }, "3000");




  setTimeout(() => {
    console.log("Delayed for 3 seconds.");

    // The text you want to update
    const newText = "Transformez Votre Vision Digitale";

    // Clear the existing text
    targetElement.innerHTML = "";

    // Loop through each character of the text
    newText.split("").forEach(char => {
      // Create a span for each character
      const span = document.createElement("span");
      span.textContent = char;
      
      // Append the span to the target element
      targetElement.appendChild(span);
    });
  }, 3000); // Delay of 3 seconds
}

  



  





target.addEventListener("click", handleClick);
