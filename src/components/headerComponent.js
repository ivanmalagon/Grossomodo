var app = angular.module('grossomodoApp');

function HeaderController ($scope) {
  var ctrl = this;
}

app.component('header', {
  templateUrl: '../../views/partials/headerPartial.html',
  controller: HeaderController,
  bindings: {
    albumName: '<',
    selectedSong: '<',
    onPreviousSong: '&',
    onNextSong: '&',
    onShowDiscography: '&'
  }
});