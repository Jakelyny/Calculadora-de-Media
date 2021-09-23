function Calcular() {

    var primeiraNota = parseInt(document.getElementById("primeiraNota").value);
    var segundaNota = parseInt(document.getElementById("segundaNota").value);
    
    var media = (primeiraNota + segundaNota) / 2;
    var notaFinal = media.toFixed(1);
    
    if (notaFinal >= 6) {
      document.getElementById("resultado").innerHTML = "PARABÉNS, você passou com a média " + notaFinal + " &#129395;";
    } else {
      document.getElementById("resultado").innerHTML = "OPS, parece que você não passou com a média " + notaFinal + " &#128560;";
    }
  }