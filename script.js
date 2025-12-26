function recommend() {
  const flavor = document.getElementById("flavor").value;
  const diet = document.getElementById("diet").value;

  let result = "";

  if (flavor === "spicy" && diet === "veg") {
    result = "Try aloo tikki or spicy chaat from a busy street corner.";
  } else if (flavor === "sweet") {
    result = "Gajar ka halwa or kulfi would be perfect right now.";
  } else if (flavor === "chatpata") {
    result = "Papdi chaat or golgappa is a great choice.";
  } else if (flavor === "salty" && diet === "nonveg") {
    result = "Try chicken momos or seekh kebabs.";
  } else {
    result = "Explore a popular local street stall nearby.";
  }

  document.getElementById("result").innerText = result;
}
