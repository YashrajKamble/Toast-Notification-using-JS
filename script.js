let toastBox = document.getElementById('toastBox');

function showToast() {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = 'success';
    toastBox.appendChild(toast);
}