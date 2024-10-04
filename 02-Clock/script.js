//   const secondHand = document.querySelector('.second-hand');
//   const minsHand = document.querySelector('.min-hand');
//   const hourHand = document.querySelector('.hour-hand');

//   function setDate() {
//     const now = new Date();

//     const seconds = now.getSeconds();
//     const secondsDegrees = ((seconds / 60) * 360) + 90;
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//     const mins = now.getMinutes();
//     const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
//     minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//     const hour = now.getHours();
//     const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
//     hourHand.style.transform = `rotate(${hourDegrees}deg)`;
//   }

//   setInterval(setDate, 1000);

//   setDate();

setInterval(setClock, 1000); // Update the clock every second

function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculating degrees for each hand
  const secondDegree = ((seconds / 60) * 360) + 90; // 90 offset to start at 12 o'clock
  const minuteDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // Smooth transition of minutes
  const hourDegree = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30) + 90; // Smooth transition of hours

  // Apply the rotation to each hand
  document.querySelector('.second-hand').style.transform = `rotate(${secondDegree}deg)`;
  document.querySelector('.min-hand').style.transform = `rotate(${minuteDegree}deg)`;
  document.querySelector('.hour-hand').style.transform = `rotate(${hourDegree}deg)`;
}

setClock(); // Call the function immediately to set the initial position

