const btnMore = document.querySelector('.proposal-more');
const hiddenText = document.querySelector('.proposal-mobile-text');
const btnWrapper = document.querySelector('.proposal-mobile-btn');
const textItems = hiddenText.querySelectorAll('p');

function getProposalHeight(item) {
  const arr = []
  item.forEach((e) => arr.push(e.clientHeight));
  return arr.reduce((acc, number) => acc + number, 0);
}

function setProposalHeight(group, item) {
  group.style.maxHeight = getFormHeight(item) + 'px';
}

btnMore.addEventListener('click', () => {
  hiddenText.style.display = 'block';
  setProposalHeight(hiddenText, textItems);
  btnWrapper.style.display = 'none';
})

window.addEventListener('resize', () => {
  if (!hiddenText.classList.contains('none')) {
    setProposalHeight(hiddenText, textItems);
  }
})
