const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const userSelect = document.getElementById('user__select');
const userInput = document.querySelector('.user_text');
const sendBtn = document.querySelector('.send_btn');
const reviews = document.querySelector('.reviews');
const divError = document.querySelector('.error_msg');


initialData.forEach(element => {
  const productName = document.createElement('h3');
  productName.textContent = element.product;
  reviews.appendChild(productName);

  const userSelectProd = document.createElement('option');
  userSelectProd.textContent = element.product;
  userSelect.appendChild(userSelectProd);


  element.reviews.forEach(review => {
    const defaultReview = document.createElement('p');
    defaultReview.textContent = review.text;
    reviews.appendChild(defaultReview);
  });
});

sendBtn.addEventListener('click', function () {

  try {
    if (userInput.value.trim().length < 50 || userInput.value.trim().length > 500) {
      throw new Error('отзыв должен быть от 50 до 500 символов')
    }
    const userChoice = document.createElement('h3');
    userChoice.textContent = userSelect.value;
    const reviewElem = document.createElement('p');
    reviewElem.textContent = userInput.value;
    reviews.appendChild(userChoice);
    reviews.appendChild(reviewElem);
    divError.textContent = '';
    userInput.value = '';
  } catch (error) {
    divError.textContent = error.message;
  }
});