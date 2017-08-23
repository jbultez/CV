// this script is used to type on the header bg
$('#moving-text').typeIt({
     speed: 210,
     breakLines: false,
     autoStart: false,
     loop: true})
     .tiType('Développeur ROR.')
     .tiPause(2000)
     .tiDelete(4)
     .tiType('Ruby On Rails. ')
     .tiPause(3000);
