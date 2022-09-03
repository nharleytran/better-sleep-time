const colors = [
  "white",
  "red",
  "white",
  "red",
  "white",
  "red",
  "white",
  "red",
]
function createWakeUpTimeElement(time,cycle){
  let elm = document.createElement("div");
  elm.innerText = time;
  elm.style.color = colors[cycle];
  return elm;
}

// function handleOnClick() {
//     let output = document.querySelector(".output");
//     output.style.display = "block";
  
//     let hours = document.getElementById("hours");
//     hours.innerHTML = "";
  
//     let now = new Date();
//     // allow 14 minutes to fall sleep!
//     now.setMinutes(now.getMinutes() + 14);
//     now.setHours(hh);
//     now.setMinutes(mm);
  
//     // calculate sleep cycles!
//     for (let i = 1; i <= 6; i++) {
//       now.setMinutes(now.getMinutes() + 90);
//       let elm = document.createElement("div");
//       elm.innerText = 
//         now.toLocaleTimeString("en-US", { timeStyle: "short" } + "<br />");
//       elm.style.color = colors[i];
//       hours.appendChild(elm);
//     } 
//   }

function handleOnClick() {
  let output = document.querySelector(".output");
  output.style.display = "block";

  let hours = document.getElementById("hours");
  hours.innerHTML = "";

  let hh = document.getElementById("hh").value;
  let mm = document.getElementById("mm").value;
  let ampm = document.getElementById("ampm").value;
  hh = ampm === "PM" ? Number.parseInt(hh) + 12 : hh;
  let now = new Date();
  now.setHours(hh);
  now.setMinutes(mm);

  // calculate sleep cycles!
  for (let i = 1; i <= 6; i++) {
    now.setMinutes(now.getMinutes() + 90);
    const elm = createWakeUpTimeElement(
      now.toLocaleTimeString("en-US", { timeStyle: "short" }),
      i
    )
    hours.appendChild(elm);
  } 
}