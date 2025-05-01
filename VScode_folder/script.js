
var modal = document.getElementById('pop_up');
    
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

function openModal(myImgSrc){
  document.getElementById("myImg").src = myImgSrc;
  modal.style.display = "block";
}

function changeMainImage(newSrc){
  document.getElementById("myImg").src = newSrc;
  closeModal();
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

function previewImage(event) {
var reader = new FileReader();
reader.onload = function() {
var output = document.getElementById('imagePreview');
output.innerHTML = '<img src="' + reader.result + '" class="gallery" style="max-width: 150px; max-height: 150px; margin: 5px;" onclick="changeMainImage(\'' + reader.result + '\')">';
}
reader.readAsDataURL(event.target.files[0]);
}
