const speedSlider = document.getElementById('speed');
const speedValue = document.getElementById('speed-value');
const startButton = document.getElementById('start-button');
const daughterImage = document.getElementById('daughter-image');
const fatherImage = document.getElementById('father-image');
const daughterAge = document.getElementById('daughter-age');
const fatherAge = document.getElementById('father-age');

let simulationStarted = false;

speedSlider.addEventListener('input', updateSimulation);
startButton.addEventListener('click', startSimulation);

function updateSimulation() {
  const speed = speedSlider.value;
  speedValue.textContent = speed;

  if (simulationStarted) {
    // 우주선 속도에 따라 딸과 아빠의 나이 및 모습 변화 계산 로직 구현
    // 예시로 속도에 따른 나이 변화만 구현하였습니다.
    const daughterAgeValue = 5 + Math.floor(speed / 20);
    const fatherAgeValue = 30 + Math.floor(speed / 10);

    daughterAge.textContent = daughterAgeValue;
    fatherAge.textContent = fatherAgeValue;

    // 나이에 따른 모습 변화 구현
    updateCharacterImage(daughterImage, daughterAgeValue, 'daughter');
    updateCharacterImage(fatherImage, fatherAgeValue, 'father');
  }
}

function startSimulation() {
  simulationStarted = true;
  // 우주선 발사 애니메이션 효과 추가
  // ...
}

function updateCharacterImage(imgElement, age, character) {
  let imgSrc = '';

  if (age < 20) {
    imgSrc = `/images/${character}-young.jpg`;
  } else if (age < 40) {
    imgSrc = `/images/${character}-middle.jpg`;
  } else if (age < 60) {
    imgSrc = `/images/${character}-old.jpg`;
  } else {
    imgSrc = `/images/${character}-dead.jpg`;
  }

  imgElement.src = imgSrc;
}