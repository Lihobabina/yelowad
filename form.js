let inpts = document.querySelectorAll('fieldset details ul li label input');
let summary = document.querySelector('fieldset details summary');

function updateSummary() {
    let selectedItems = [];
    inpts.forEach((inp) => {
        if (inp.checked) {
            selectedItems.push(inp.value.substring(0, 18));
            inp.closest('li').classList.add('active');
        } else {
            inp.closest('li').classList.remove('active');
        }
    });
    summary.textContent = (selectedItems.length ? selectedItems.join('... , ') : 'Area');
}

inpts.forEach((inp) => {
    inp.addEventListener('change', updateSummary);
});

// Initial call to set the summary correctly at the beginning
updateSummary();

// 
const fileImage = document.querySelector('.input-preview__src');
const filePreview = document.querySelector('.input-preview');

fileImage.onchange = function () {
    const reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        filePreview.style.backgroundImage  = "url("+e.target.result+")";
        filePreview.classList.add("has-image");
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
};