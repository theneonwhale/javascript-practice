/*
 * Chaining в методах объекта как jquery
 */

const element = {
  class: '',
  hovered: false,
  changeClass(cls) {
    this.class = cls;

    return this;
  },
  toggleHovered() {
    this.hovered = !this.hovered;

    return this;
  },
};

element.toggleHovered().changeClass('open').toggleHovered();
console.log(element);
