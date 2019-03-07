
function infoNavegador() {
var txt = "";
txt += "<h3>Información Navegador</h3>";
txt += "<p><b> Nombre (motor): </b>"  + window.navigator.appCodeName + "</p>";
txt += "<p><b> Código Navegador: </b>" + window.navigator.appName + "</p>";
txt += "<p><b> Navegador Versión: </b>"  + window.navigator.appVersion + "</p>";
txt += "<p><b> Cookies Activadas: </b>"  + window.navigator.cookiesEnabled + "</p>";
txt += "<p><b> Navegador Lenguaje:  </b>"  + window.navigator.language + "</p>";
txt += "<p><b> Navegador Online: </b>"  + window.navigator.onLine + "</p>";
txt += "<p><b> Plataforma: </b>"  + window.navigator.platform + "</p>";
txt += "<p><b> Usuario-Agente header: </b>"  + window.navigator.userAgent + "</p>";
txt += "<p><b> Java Activado:  </b>"  + window.navigator.javaEnabled + "</p>";
txt += "<p><b> Vendedor:  </b>"  + window.navigator.vendor + "</p>";
txt += "<p><b> Plugins Activos:  </b>"  + window.navigator.plugins.length + "</p>";

document.getElementById("infoNav").innerHTML = txt;
}

