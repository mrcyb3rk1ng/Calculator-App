const result = document.querySelector(".result");
const clearBtn = document.querySelector(".clearBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const equalBtn = document.querySelector(".equalBtn");

clearBtn.onclick = () => {
   result.value = "";
};

deleteBtn.onclick = () => {
   let currentValue = result.value;
   let newValue = currentValue.slice(0, currentValue.length - 1);
   result.value = newValue;
};

equalBtn.onclick = () => {
   
   if (result.value.includes("π")) {
      let piIndex = result.value.indexOf("π");
      result.value = result.value.slice(0, piIndex) + Math.PI + result.value.slice(piIndex + 1);
   } if (result.value.includes("^")) {
      let expIndex = result.value.indexOf("^");
      result.value = result.value.slice(0, expIndex) + "**" + result.value.slice(expIndex + 1);
   } if (result.value.includes("×")) {
      let multiIndex = result.value.indexOf("×");
      result.value = result.value.slice(0, multiIndex) + "*" + result.value.slice(multiIndex + 1);
   } if (result.value.includes("÷")) {
      let devideIndex = result.value.indexOf("÷");
      result.value = result.value.slice(0, devideIndex) + "/" + result.value.slice(devideIndex + 1);
   } if (result.value.includes("√")) {
      let withoutRootSign = result.value.slice(1, result.value.length);
      let root = Math.sqrt(withoutRootSign);
      result.value = root;
   } 
   
   result.value = eval(result.value);
   
};

let calculator = (value) => {
   result.value += value;
};