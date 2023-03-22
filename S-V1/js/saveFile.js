
function saveTextAsFile() {
    var textToWrite = document.getElementById('text').innerHTML;
    var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
    var fileName = document.getElementById('filename').value;
    var fileType = document.getElementById('filetype').value;
    var fileNameToSaveAs = fileName+fileType; //filename.extension


    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        console.log(downloadLink.href + "text");

    } else {
      // Firefox requires the link to be added to the DOM before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
  
    downloadLink.click();

    function destroyClickedElement(event) {
    // remove the link from the DOM
    document.body.removeChild(event.target);
 }
  }
