const element = document.getElementById('fullscreen');

element.addEventListener('click', function() {
  // 現在のフルスクリーンモードの状態をチェック
  if (document.fullscreenElement) {
    // もし既にフルスクリーンモードであれば、解除する
    document.exitFullscreen();
  } else {
    // そうでなければ、ディスプレイに対して全画面表示にする
    document.documentElement.requestFullscreen();
  }
});

const container = document.querySelector('.container');
const menu = document.getElementById('menu');

container.addEventListener('click', function(event) {
  // クリックされた座標のY軸位置を取得
  const y = event.clientY;
  // クリックされた位置が上半分であればメニューを表示
  if (y < window.innerHeight / 2) {
    menu.classList.toggle('active');
  }
});

