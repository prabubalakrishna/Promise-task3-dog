function loadXMLDoc() {
    let statusCode = document.getElementById("statusCode").value;
    let url = "https://http.dog/.jpg"+statusCode;
     window.open(url);
  }