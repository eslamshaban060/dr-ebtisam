/* eslint-disable */
(function (jsPDFAPI) {
  var font = `
AAEAAAALAIAAAwAwT1MvMg8SBJkAAAC8AAAAYGNtYXAWG3EXAAABHAAAAGRnYXNwAAAAEAAAAXgAAAAIZ2x5Zg...
`; // ⬅️ هنا الكود الطويل اللي بيطلع من fontconverter

  jsPDFAPI.addFileToVFS("Sacramento.ttf", font);
  jsPDFAPI.addFont("Sacramento.ttf", "Sacramento", "normal");
})(jsPDF.API);
