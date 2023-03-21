function getAlert() {
    alert("Clicked!!!");
}
var btn = document.getElementById('btn');
btn.onclick = getAlert;
btn.click()

/* Should be work  */
document.onclick = getAlert;
document.clicked()