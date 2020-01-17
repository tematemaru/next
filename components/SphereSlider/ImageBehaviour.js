import { Expo, TweenMax } from 'gsap';
import * as PIXI from "pixi.js";

// import dsmap from 'images/ds_map.png';

export default class ImageBehaviour {
  constructor(sprite, container) {
    this.sprite = sprite;
    this.container = container;
    if (container.filtersTemp) {
      this.addFilter(container.filtersTemp);
    }
    // this.displacementSprite = new PIXI.Sprite.from(dsmap); // eslint-disable-line
    // this.displacementSprite.width = this.sprite.width;
    // this.displacementSprite.height = this.sprite.height;
    // this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite);
    // this.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    // this.displacementSprite.anchor.set(0.5);
    // this.displacementFilter.rotation = Math.PI / 8;
    // this.defaultMatrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
  }

  addFilter = (filters) => {
    if (filters.length === 0) return;
    this.container.filters = [];
    filters.forEach(item => {
      if (item === 'desaturate') {
        const colorMatrix = new PIXI.filters.ColorMatrixFilter();
        this.container.filters.push(colorMatrix);
        colorMatrix.desaturate();
      }
    });
  };

  addCustumFilter = (filter) => {

    this.sprite.filters = [filter];
  }

  hideFilter = (filterName, duration) => {
    if (this.container.filtersTemp.length === 0 || !this.container.filters) return;
    TweenMax.to(this.container.filters[0].matrix, duration, this.defaultMatrix);};

  removeFilter = () => {
    this.container.filters = [];
  };

  hide = (duration, callback) => {
    TweenMax.to(
      this.sprite,
      duration,
      {
        alpha: 0,
        ease: Expo.easeInOut,
        onComplete: callback,
      },
    );
  };

  show = (duration, callback) => {
    TweenMax.to(
      this.sprite,
      duration,
      {
        alpha: 1,
        ease: Expo.easeInOut,
        onComplete: callback,
      },
    );
  };

  showWithDisplacement = (duration, callback) => {
    this.sprite.filters = [this.displacementFilter];
    TweenMax.to(
      this.displacementFilter.scale,
      duration,
      {
        x: 1,
        y: 1,
        ease: Expo.easeInOut,
      });
    TweenMax.to(
      this.sprite,
      duration * 0.9,
      {
        alpha: 1,
        ease: Expo.easeInOut,
        onComplete: () => {
          if (callback) {
            callback();
          }
          this.container.removeChild(this.displacementSprite);
          this.container.filters = null;
        },
      },
    );
  };

  hideWithDisplacement = (duration, callback, isFrom = false) => {
    this.sprite.filters = [this.displacementFilter];
    if (isFrom) {
      this.displacementFilter.scale.x = 1;
      this.displacementFilter.scale.y = 1;
    }
    TweenMax.to(
      this.displacementFilter.scale,
      duration,
      {
        x: -5000,
        y: -5000,
        ease: Expo.easeInOut,
        onComplete: () => {
          if (callback) {
            callback();
          }
          this.container.filters = null;
        },
      });
    TweenMax.to(
      this.sprite,
      duration,
      {
        alpha: 0,
        ease: Expo.easeInOut,
        delay: duration * 0.1,
      },
    );
  };
}
