let jsonData = null;
async function getData() {

  try {
    const response = await fetch("script/data.json");
    if (!response.ok) {
      throw new Error(`Response status : ${response.status}`);
    }
    const json = await response.json();
    const image = json.winners[0].images;
    console.log(json);
  } catch (e) {
    console.log(e.message);
  }
}


document.addEventListener("DOMContentLoaded", getData);