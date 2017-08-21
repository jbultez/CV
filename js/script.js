// this script is used to type on the header bg
$('#moving-text').typeIt({
     speed: 150,
     breakLines: false,
     autoStart: false})
     .tiType('Développeur ROR.')
     .tiPause(500)
     .tiDelete(4)
     .tiType('Ruby On Rails. ')
     .tiPause(1000);
