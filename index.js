let cars = [
  { title: '1', color: '#6F98A8' },
  { title: '2', color: '#2B8EAD' },
  { title: '3', color: '#2F454E' },
  { title: '4', color: '#2B8EAD' },
  { title: '5', color: '#2F454E' },
  { title: '6', color: '#BFBFBF' },
  { title: '7', color: '#BFBFBF' },
  { title: '8', color: '#6F98A8' },
  { title: '9', color: '#2F454E' }
];
Array.prototype.shuffle = function() {
  var i = this.length;
  while (i) {
    var j = Math.floor(Math.random() * i);
    var t = this[--i];
    this[i] = this[j];
    this[j] = t;
  }
  return this;
};

function onClickSuffle() {
  cars.shuffle();
  renderer();
}

function onClickSort() {
  cars.sort(function(a, b) {
    return a.title - b.title;
  });
  renderer();
}
function renderer() {
  text = '';
  if (window.innerWidth > 375) {
    for (let i = 0; i < cars.length; i++) {
      text +=
        '<div class="content cl-sm-12 mr-sm-2 content-sm" style=color:#FFFFFF;background:' +
        cars[i].color +
        '>' +
        cars[i].title +
        '</div>';
    }
  } else {
    setLayoutInSmallResolution();
  }
  document.getElementById('container-list').innerHTML = text;
}

// Change values when window is resized
window.onresize = function() {
  renderer();
};

function setLayoutInSmallResolution() {
  for (let i = 0; i < cars.length; i++) {
    text +=
      '<div class="content cl-sm-12 mr-sm-2 content-sm">' +
      cars[i].title +
      '<div class="slice-layout" style=background-color:' +
      cars[i].color +
      '></div>' +
      '</div>';
  }
  document.getElementById('container-list').innerHTML = text;
}

renderer();
