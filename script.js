const menu = document.querySelectorAll("input");
const orderButton = document.querySelector("button");

const foodContainer = document.querySelector(".food-container");

const imageBasePath = "./assets/";

const orderSound = document.querySelector("#ordered");

orderButton.addEventListener("click", (e) => {
    // play audio
  orderSound.currenTime = 0;
  orderSound.play();
//   it will check which order is selected and display those order.
  checkOrder();
});

const orders = [];

function checkOrder() {
  // loop through menu and checking if any item is selected or not
  menu.forEach(async (item) => {
    if (item.checked) {
      // create and resolved a promise that fetch and show data
      const myPromise = new Promise((resolve, reject) => {
        const randomTimer = Math.floor(Math.random() * 4000);
        setTimeout(() => {
          resolve({
            message: "Successfull",
            item: `${item.value}`,
            orderId: randomTimer,
          });
          reject("Sorry, We can not take your order at the moment");
        }, randomTimer);
      });
      // resolving the promise
      const result = await myPromise;
      // orders.push(result);

      // create and append order into div from resolved promises
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item-div");
      const image = document.createElement("img");
      const orderId = document.createElement("p");
      orderId.classList.add("order-id");

      image.src = imageBasePath + result.item + ".jpg";
      // console.log(image);
      orderId.innerText = "Your Order Id : " + result.orderId;

      const feedback = document.createElement("form");
      const textArea = document.createElement("textarea");
      textArea.placeholder =  "Enter your feedback here!"
      feedback.append(textArea)

      const detailDiv = document.createElement("div");
      detailDiv.append(orderId, feedback)
      detailDiv.classList.add("detail-div")

      itemDiv.append(image, detailDiv);
      foodContainer.append(itemDiv);
    }
  });
  // displayItems(orders);
}

// function displayItems(arr) {

// }

/* logic:

when someone click on the order first it will check if it have any 
checkbox by looping through the menu
and if any one is checked then it will go to the checkorder function
and in that function we have one promise and will be checked if promise is resolved or not 
if resolved then we will get results and append those to our display with div and we done. */ 