let row = 50;
let col = 50;
let loc = document.querySelector('.pixel')

function makePixel(){
  
  for(lpa = 0 ; lpa < row ; lpa ++){
    for(lpb = 0 ; lpb < col ; lpb ++){
      let span = document.createElement('span');
      let rnd = Math.random()*1
      span.style.left = `${lpb * 50}px`
      span.style.top = `${lpa * 50}px`
      // 각각의 픽셀의 위치를 설정해주고
      span.style.backgroundPosition = -lpb * 50 +'px ' + -lpa * 50 + 'px , center'
      // -가 붙는 이유는 현재 배경을 기준으로 좌측 / 아래로 움직여야 하기때문에
      // 위에서 설정한 픽셀 위치에 맞게 배경을 이동시켜주기

      span.style.animationDelay = rnd +'s'
      loc.appendChild(span);
      
    }
  }
}
 
makePixel()
