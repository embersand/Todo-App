const buttonAdd = document.querySelector('.btn');
const list = document.querySelector('.main__list');
let number = 0;
for (key in { ...localStorage }) {
  if (+key > number) {
    number = +key;
  }
}

if (number) {
  list.style.display = 'block';
  const items = { ...JSON.parse(JSON.stringify(localStorage)) };
  for (item in items) {
    const newItem = document.createElement('li');
    newItem.className = 'main__list-item';
    newItem.id = `${item}`;
    newItem.innerHTML =
      `<input class="main__text text" ${items[item] === 'null' ? `placeholder="New task"` : `value="${items[item]}"`}>
      <button class="main__list-button delete">
        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
        </svg>
      </button>`;
    setInterval(() => {
      newItem.classList.add('_active');
    }, 10);
    list.appendChild(newItem);
  }
  const inputs = list.querySelectorAll('.main__text');
  inputs.forEach((item) => {
    item.addEventListener('input', (event) => {
      localStorage.setItem(item.parentElement.id, event.target.value);
    });
  });
  const btnsDelete = list.querySelectorAll('.delete');
  btnsDelete.forEach((item) => {
    item.addEventListener('click', () => {
      item.closest('li').remove();
      localStorage.removeItem(item.parentElement.id);
      number++;
    });
  });
} else {
  list.style.display = 'none';
}

buttonAdd.addEventListener('click', () => {
  if (list.style.display === 'none') {
    list.style.display = 'block';
  }
  number++;
  addItem(number, null);
});

const addItem = (id, text) => {
  const newItem = document.createElement('li');
  newItem.className = 'main__list-item';
  newItem.id = `${id}`;
  newItem.innerHTML =
    `<input class="main__text text" ${!text ? `placeholder = "New task"` : `value = "${text}"`}>
     <button class="main__list-button delete">
       <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path
           d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
       </svg>
     </button>`;
  setInterval(() => {
    newItem.classList.add('_active');
  }, 0);
  localStorage.setItem(id, text);
  const input = newItem.querySelector('.main__text');
  input.addEventListener('input', (event) => {
    localStorage.setItem(id, event.target.value);
  });

  const btnDelete = newItem.querySelector('.delete');
  btnDelete.addEventListener('click', () => {
    newItem.remove();
    localStorage.removeItem(id);
  });
  list.appendChild(newItem);
};

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slides = document.querySelector('.main__slides');
let count = 0;
Array.from(slides.children)[count].classList.toggle('_active');

left.addEventListener('click', () => {
  prevSlide();
});

right.addEventListener('click', () => {
  nextSlide();
});

let startX = 0;
let currentX = 0;
let isDown = false;

Array.from(slides.children).forEach((item, index) => {
  item.addEventListener('mousedown', (event) => {
    event.preventDefault();
    startX = event.clientX;
    isDown = true;
  });

  item.addEventListener('mouseup', (event) => {
    event.preventDefault();
    isDown = false;
  });

  item.addEventListener('mouseleave', (event) => {
    event.preventDefault();
    isDown = false;
  });

  item.addEventListener('mousemove', (event) => {
    if (!isDown) {
      return;
    }

    event.preventDefault();
    currentX = event.clientX;
    if (currentX - startX < -50) {
      prevSlide();
    } else if (currentX - startX > 50) {
      nextSlide();
    }
  });
});

const prevSlide = () => {
  Array.from(slides.children)[count].classList.toggle('_active');
  count--;
  if (count < 0) {
    count = Array.from(slides.children).length - 1;
  }
  Array.from(slides.children)[count].classList.toggle('_active');
};

const nextSlide = () => {
  Array.from(slides.children)[count].classList.toggle('_active');
  count++;
  if (count >= Array.from(slides.children).length) {
    count = 0;
  }
  Array.from(slides.children)[count].classList.toggle('_active');
};
