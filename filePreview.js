
  // Track current previewed file
  let currentFileIndex = 0;
  let files = [];

  document.querySelector("#fileUpload").addEventListener("change", function() {
      // Clear out file preview area
      document.querySelector("#filePreview").innerHTML = '';
      files = [];

      // For each selected file
      for (var i = 0; i < this.files.length; i++) {
          var reader = new FileReader();

          reader.onload = function(e) {
              // Save loaded file data to array
              files.push(e.target.result);

              // Create a new file element
              var img = document.createElement('img');
              img.src = e.target.result;

              // Add the file to the preview area
              document.querySelector("#filePreview").appendChild(img);
          };

          // Read the file file as a data URL.
          reader.readAsDataURL(this.files[i]);
      }
  });

  document.querySelector("#previewFiles").addEventListener("click", function() {
      // If there are no files, don't show the modal
      if (files.length === 0) return;

      // Show the first file in the modal
      currentFileIndex = 0;
      document.querySelector("#previewFile").src = files[currentFileIndex];
      new coreui.Modal(document.getElementById('fileModal')).show();
  });

  document.querySelector("#deleteFile").addEventListener("click", function() {
      // Remove current file from array
      files.splice(currentFileIndex, 1);
      
      // TODO: Update your filePreview div and/or file input to reflect the deleted file

      // Show the next file or close the modal if no more files
      if (files.length > 0) {
          currentFileIndex = Math.min(currentFileIndex, files.length - 1);
          document.querySelector("#previewFile").src = files[currentFileIndex];
      } else {
          new coreui.Modal(document.getElementById('fileModal')).hide();
      }
  });

  document.querySelector("#prevFile").addEventListener("click", function() {
      // Show the previous file, if there is one
      if (currentFileIndex > 0) {
          currentFileIndex--;
          document.querySelector("#previewFile").src = files[currentFileIndex];
      }
  });

  document.querySelector("#nextFile").addEventListener("click", function() {
      // Show the next file, if there is one
      if (currentFileIndex < files.length - 1) {
          currentFileIndex++;
          document.querySelector("#previewFile").src = files[currentFileIndex];
      }
  });
