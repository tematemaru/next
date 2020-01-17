import * as PIXI from 'pixi.js';
import { Expo, TweenMax } from 'gsap';

export default class Mask extends PIXI.Graphics {
  constructor(element, params) {
    super();
    this.elm = element;
    this.params = params;
    this.rotationAngle = 0;
    // this.elm.mask = this;
  }

  setAngle = (newAngle) => {
    this.rotationAngle += newAngle; // * (180 / Math.PI);
  }

  setSize = (widthNew, heightNew) => {
    this.params.width = widthNew;
    this.params.height = heightNew;
  };

  setPosition = (x, y) => {
    this.params.x = x;
    this.params.y = y;
  };

  calcRotation = (x, y, angle) => {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle)
    const nx = x * cos - y * sin;
    const ny = y * cos + x * sin;
    return { x: nx, y: ny };
  }

  renderMask = () => {
    const { x, y, width, height, anchorX, anchorY } = this.params; // eslint-disable-line
    const nx = x - (width * anchorX);
    const ny = y - (height * anchorY)
    this.clear();
    this.beginFill(0xff0000);
    const v0 = this.calcRotation(
      nx,
      ny,
      this.rotationAngle,
    );
    this.moveTo(
      v0.x,
      v0.y
    );
    const v1 = this.calcRotation(
      nx + width,
      ny,
      this.rotationAngle,
    );
    this.lineTo(
      v1.x,
      v1.y,
    );

    const v2 = this.calcRotation(
      nx + width,
      ny + height,
      this.rotationAngle,
    );

    this.lineTo(
      v2.x,
      v2.y,
    );

    const v3 = this.calcRotation(
      nx,
      ny + height,
      this.rotationAngle,
    );

    this.lineTo(
      v3.x,
      v3.y,
      this.rotationAngle,
    );

    this.lineTo(
      v0.x,
      v0.y,
    );

    this.endFill();
    this.lineStyle(0);
  };

  setSizeMaskWithAnimation = (newWidth, newHeight, duration) => {
    TweenMax.to(
      this.params,
      duration,
      {
        width: newWidth,
        height: newHeight,
        ease: Expo.easeInOut,
        onUpdate: this.animateMask,
      }
    );
  };

  animateMask = () => {
    this.renderMask();
  };

  removeMask = () => {
    this.elm.mask = null;
  }
}
