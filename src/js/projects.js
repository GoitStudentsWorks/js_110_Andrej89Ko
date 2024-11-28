import image1 from '../img/imgProjects/imgForProjects/10project2x.png';
import image2 from '../img/imgProjects/imgForProjects/11project2x.png';
import image3 from '../img/imgProjects/imgForProjects/12project2x.png';
import image4 from '../img/imgProjects/imgForProjects/9project2x.png';
import image5 from '../img/imgProjects/imgForProjects/8project2x.png';
import image6 from '../img/imgProjects/imgForProjects/7project2x.png';
import image7 from '../img/imgProjects/imgForProjects/6project2x.png';
import image8 from '../img/imgProjects/imgForProjects/5project2x.png';
import image9 from '../img/imgProjects/imgForProjects/2project2x.png';
import image10 from '../img/imgProjects/imgForProjects/1project2x.png';
import svgArrows from '../img/arrow.svg';

const load = document.querySelector('.wrapContent');
const Nomore = document.querySelector('.projectBtnLoad');

const collectionImg = [
  {
    src: image1,
    name: 'power pulse webservice',
  },
  {
    src: image2,
    name: 'wallet webservice',
  },
  {
    src: image3,
    name: 'English excellence webservice',
  },
  {
    src: image4,
    name: 'green harvest online store',
  },
  {
    src: image5,
    name: 'vyshyvanka vibes Landing Page',
  },
  {
    src: image6,
    name: 'mimino website',
  },
  {
    src: image7,
    name: 'chego jewelry website',
  },
  {
    src: image8,
    name: 'fruitbox online store',
  },
  {
    src: image9,
    name: 'energy flow webservice',
  },
  {
    src: image10,
    name: 'starlight studio landing page',
  },
];

let countI = 0;
const carcassImage = photo => {
  return `
    <li class="wrapContentItem">
      <img src="${photo.src}" heigth="500" width="1000" alt="${photo.name}">
      <p class="projectTextTech">react, java script, node js, git</p>
        <div class="wrapBtnText" data-theme="light">
                        <p class="projectTextTitle">${photo.name}</p>
                        <a target="_blank" rel="nofollow" href="https://www.w3schools.com/js/default.asp"
                            class="projectBtnVisit">visit<svg class="arrSvg" height="24" width="24">
                                <use href="${svgArrows}#icon-iconarrow"></use>
                            </svg></a>
                    </div>
    </li>`;
};

const openBox = img => {
  let maxItems = 10;
  let itemsPerClick = 2;
  if (countI < maxItems) {
    load.innerHTML += collectionImg
      .slice(countI, countI + itemsPerClick)
      .map(imageId => carcassImage(imageId))
      .join('');
    countI += itemsPerClick;
    if (countI >= maxItems) Nomore.style.display = 'none';
  }
};
Nomore.addEventListener('click', openBox);
