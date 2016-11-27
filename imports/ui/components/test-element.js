import '@polymer/paper-button/paper-button.html';

class testElement extends Polymer.Class( // eslint-disable-line new-cap
  {
    is: 'test-element',
    behaviors: [mwcMixin],
    properties: {
      status: {
        type: Object,
      },
      counter: {
        type: Number,
        value: 0,
      },
    },
  }
) {
  getMeteorData() {
    this.set('status', Meteor.status().status);
  }
  increment() {
    this.counter += 1;
  }
}

document.registerElement(testElement.prototype.is, testElement);
