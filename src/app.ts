const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddresHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput?.value;
}

form?.addEventListener("submit", searchAddresHandler);
