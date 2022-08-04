alert("Hello");
// クリック時間の制御
let clickTime = 0
 
loveMe.addEventListener('dbclick', (e) => {
  if(clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if((new Date().getTime() - clickTime) < 800) {
 
    } else {
      clickTime = new Date().getTime()
    }
  }
})
 

// ハートの作成
const createHeart = (e) => {
  // https://fontawesome.com/
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')
 
  // クリックした位置を取得
  const x = e.clientX
  const y = e.clientY
 
  // ページからみて画像の位置を取得
  const leftOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop
 
  // ハートを出す位置を制御
  // 画像の位置とクリック位置から計算
  const xInside = x - leftOffset
  const yInside = y - topOffset
 
  // ハートの位置を指定
  // スタイルの.loveMe .fa-heart {}にてposition: absolute;を
  // 指定しているため、位置を制御できる
  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`
 
  // 子要素として追加
  loveMe.appendChild(heart)
}
