AFRAME.registerComponent('trigger-click-on', {
  schema: {type: 'string'},

  init: function () {
    var identifier = this.data;
    console.log('initializing click trigger for', identifier, 'with', this.el)
    this.el.addEventListener('click', function (evt) {
      console.log("click on", identifier);
      setTimeout(function() {
        document.querySelector(identifier).click();
      }, 1000)
    });
  }
})


AFRAME.registerComponent('trigger-event-on', {
  schema: {type: 'string'},

  init: function () {
    var identifier = this.data;
    var event_name = this.el.attributes['trigger-event-name'].nodeValue;
    console.log('initializing', event_name, 'trigger for', this.data, 'with', this.el)
    this.el.addEventListener('click', function (evt) {
      console.log("click on", identifier, 'with event', event_name)
      setTimeout(function() {
        document.querySelector(identifier).emit(event_name);
      }, 1000)
    });
  }
})
