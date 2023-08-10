
  // Track current previewed image
  let currentImageIndex = 0;
  let images = [];

  document.querySelector("#imageUpload").addEventListener("change", function() {
      // Clear out image preview area
      document.querySelector("#imagePreview").innerHTML = '';
      images = [];

      // For each selected file
      for (var i = 0; i < this.files.length; i++) {
          var reader = new FileReader();

          reader.onload = function(e) {
              // Save loaded image data to array
              images.push(e.target.result);

              // Create a new image element
              var img = document.createElement('img');
              img.src = e.target.result;

              // Add the image to the preview area
              document.querySelector("#imagePreview").appendChild(img);
          };

          // Read the image file as a data URL.
          reader.readAsDataURL(this.files[i]);
      }
  });

  document.querySelector("#previewImages").addEventListener("click", function() {
      // If there are no images, don't show the modal
      if (images.length === 0) return;

      // Show the first image in the modal
      currentImageIndex = 0;
      document.querySelector("#previewImage").src = images[currentImageIndex];
      new coreui.Modal(document.getElementById('imageModal')).show();
  });

  document.querySelector("#deleteImage").addEventListener("click", function() {
      // Remove current image from array
      images.splice(currentImageIndex, 1);
      
      // TODO: Update your imagePreview div and/or file input to reflect the deleted image

      // Show the next image or close the modal if no more images
      if (images.length > 0) {
          currentImageIndex = Math.min(currentImageIndex, images.length - 1);
          document.querySelector("#previewImage").src = images[currentImageIndex];
      } else {
          new coreui.Modal(document.getElementById('imageModal')).hide();
      }
  });

  document.querySelector("#prevImage").addEventListener("click", function() {
      // Show the previous image, if there is one
      if (currentImageIndex > 0) {
          currentImageIndex--;
          document.querySelector("#previewImage").src = images[currentImageIndex];
      }
  });

  document.querySelector("#nextImage").addEventListener("click", function() {
      // Show the next image, if there is one
      if (currentImageIndex < images.length - 1) {
          currentImageIndex++;
          document.querySelector("#previewImage").src = images[currentImageIndex];
      }
  });
