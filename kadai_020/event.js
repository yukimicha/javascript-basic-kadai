const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',() => {
    const childList = document.createElement('li');
    text.textContent = 'ボタンをクリックしました';
});