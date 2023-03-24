function setEditorFocus() {
      document.querySelector('.editor').focus();
  };

function changeSize(){
    var mySize = document.getElementById("fontSize").value;
    document.execCommand('fontSize', false, mySize);
  }

function changeFont(){
    var myFont = document.getElementById("input-font").value;
    document.execCommand('fontName', false, myFont);
  }

  function chooseColor(){
    var myColor = document.getElementById("myColor").value;
    console.log(myColor);
    document.execCommand('foreColor', false, myColor);
  }