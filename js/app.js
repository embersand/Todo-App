const buttonAdd = document.querySelector('.btn');
const list = document.querySelector('.main__list');
const storage = { ...localStorage };
const tasks = [];
const task = {
    text: ''
}
let number = 0;

for (item in storage) {
    const text = item.text;
    task.text = text;
    tasks.push(task);
    const newItem = document.createElement('li');
    newItem.innerHTML = `
        <li class="main__list-item">
            <p class="main__text text">${text}</p>
            <div class="main__list-buttons edit">
              <button class="main__list-button">
                <svg width="800px" height="800px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-59.000000, -400.000000)" fill="#000000">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                          d="M3,260 L24,260 L24,258.010742 L3,258.010742 L3,260 Z M13.3341,254.032226 L9.3,254.032226 L9.3,249.950269 L19.63095,240 L24,244.115775 L13.3341,254.032226 Z"
                          id="edit_fill-[#1480]">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <button class="main__list-button delete">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
                </svg>
              </button>
            </div>
        </li>
    `
    list.append(newItem);
    localStorage.setItem(number.toString(), text);
    number++;
}


buttonAdd.addEventListener('click', () => {
    number++;
    const newItem = document.createElement('li');
    newItem.innerHTML = `
    <li class="main__list-item">
        <p class="main__text text">dfgdfg</p>
        <div class="main__list-buttons edit">
          <button class="main__list-button">
            <svg width="800px" height="800px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-59.000000, -400.000000)" fill="#000000">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M3,260 L24,260 L24,258.010742 L3,258.010742 L3,260 Z M13.3341,254.032226 L9.3,254.032226 L9.3,249.950269 L19.63095,240 L24,244.115775 L13.3341,254.032226 Z"
                      id="edit_fill-[#1480]">
                    </path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <button class="main__list-button delete">
            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
            </svg>
          </button>
        </div>
    </li>
    `
    list.append(newItem);
    localStorage.setItem(number.toString(), task);
});