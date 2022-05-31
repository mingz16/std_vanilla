//------------------------------ backToTop button
const backToTop = document.getElementById("backToTop");

const checkScroll = () => {
  let pageYOffset = window.pageYOffset;

  if (pageYOffset !== 0) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
};

const moveBackToTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

window.addEventListener("scroll", checkScroll);
backToTop.addEventListener("click", moveBackToTop);

//------------------------------ card slider
function transformPrev(event) {
  const slidePrev = event.target;
  const slideNext = slidePrev.nextElementSibling;

  //ul 태그 선택
  const classList = slidePrev.parentElement.parentElement.nextElementSibling;
  let activeLi = classList.getAttribute("data-position");
  const liList = classList.getElementsByTagName("li");
}

const slidePrevList = document.getElementsByClassName("slide-prev");

for (let i = 0; i < slidePrevList.length; i++) {
  // ul 태그 선택
  let classList = slidePrevList[i].parentElement.parentElement.nextElementSibling;
  // li 태그 선택
  let liList = classList.getElementsByTagName("li");

  //카드가 ul 태그 너비보다 넘치면 왼쪽 버튼 활성화, 오른쪽은 현재 맨 첫카드 위치이므로 비활성화
  if (classList.clientWidth < liList.length * 260) {
    slidePrevList[i].classList.add("slide-prev-hover");
    slidePrevList[i].addEventListener("click", transformPrev);
  } else {
    //태그 삭제시 부모 요소에서 removeChild를 통해 삭제해야함
    //먼저 부모요소를 찾아서 부모 요소의 자식요쇼로 있는 prev와 next 삭제
    const arrowContainer = slidePrevList[i].parentElement;
    arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
    arrowContainer.removeChild(slidePrevList[i]);
  }
}
