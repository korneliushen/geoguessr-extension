console.log("hei");

async function getH1() {
  let linkArray = [];
  const inputField = document.querySelector("input");
  let link = inputField.value;
  if (inputField.value.includes("https://www.geoguessr.com/join/")) {
    console.log(link);
    console.log(linkArray);
    linkArray.push(link);
    console.log(linkArray);
    if (!linkArray.includes(link)) {
      await fetch("http://localhost:3000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ link }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else {
      console.log("Party already started");
    }
  } else {
    console.log("No input field detected, or party already started");
  }
}

getH1();
