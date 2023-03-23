export function ScrollSlider(e, time, amount, start) {
  let eAmt = amount / 100;
  let curTime = 0;
  let srcollCounter = 0;
  const y = window.scrollY;
  while (curTime <= time) {
    window.setTimeout(Shs, curTime, e, srcollCounter, eAmt, start, y);
    curTime += time / 100;
    srcollCounter++;
  }

  window.scrollTo(0, y);
}

function Shs(e, sc, eAmt, start, y) {
  e.scrollLeft = eAmt * sc + start;
}
