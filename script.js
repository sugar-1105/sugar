
document.querySelectorAll('.sns-btn').forEach(btn => {
  btn.addEventListener('click', event => {
    event.preventDefault();
    const url = btn.getAttribute('href');
    const siteName = btn.textContent;

    // すでに出てたら消す
    const existingAlert = document.querySelector('.alert-box');
    if (existingAlert) existingAlert.remove();

    // ウィンドウ作成
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.innerHTML = `
      <h3>外部サイトに移動します</h3>
      <p>「${siteName}」へジャンプします。<br>本当にいいですか？</p>
      <div class="alert-buttons">
        <button class="alert-btn ok">OK</button>
        <button class="alert-btn cancel">キャンセル</button>
      </div>
    `;
    document.body.appendChild(alertBox);

    // 表示アニメ
    setTimeout(() => alertBox.classList.add('show'), 10);

    // ボタン動作
    alertBox.querySelector('.ok').addEventListener('click', () => {
      window.open(url, '_blank');
      alertBox.remove();
    });
    alertBox.querySelector('.cancel').addEventListener('click', () => {
      alertBox.remove();
    });
  });
});
