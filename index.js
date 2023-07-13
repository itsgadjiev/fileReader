// @ts-nocheck
const imageInput = document.querySelector(".imageInput");
const uploadedImagesContainer = document.querySelector(".uploadedImagesWrapper");
const icon = document.querySelector(".fa-folder");

icon.addEventListener("click", () => {
    imageInput.click();
});

imageInput.addEventListener("change", function (e) {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = document.createElement("img");
            image.src = e.target.result;
            uploadedImagesContainer.appendChild(image);
        };

        reader.readAsDataURL(file);
    }
});