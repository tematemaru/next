import { Expo, TweenMax } from 'gsap';
import * as PIXI from 'pixi.js';
import { jsImageCover } from './jsImageCover';
// import ImageBehaviour from './ImageBehaviour';
import Mask from './Mask';

export default class PixiImage extends PIXI.Container {
  constructor(texture, opt) {
    super();
    this.opt = opt;
    this.textureTemp = texture;
    this.sprite = PIXI.Sprite.from(this.textureTemp);
    this.sprite.anchor.set(this.opt.anchorX, this.opt.anchorY);
    this.sprite.x = this.opt.x;
    this.sprite.y = this.opt.y;
    const { width, height } = jsImageCover(this.sprite, this.opt.width, this.opt.height);
    this.sprite.width = width;
    this.sprite.height = height;
    this.filtersTemp = this.opt.filters || [];
    this.angleT = 0;
    this.mask = new Mask(this.sprite, {
      x: this.opt.x,
      y: this.opt.y,
      width: this.opt.width,
      height: this.opt.height,
      anchorX: this.opt.anchorX,
      anchorY: this.opt.anchorY,
    });
    this.mask.renderMask();
    this.addChild(this.mask);
    // this.imageBehaviour = new ImageBehaviour(this.sprite, this);
    this.addChild(this.sprite);
  }

  addRotate = (angle) => {
    this.angleT += angle;
  };

  getWidth = () => {
    return this.mask.width;
  }

  getheight = () => {
    return this.mask.height;
  }

  setSize = (widthNew, heightNew) => {
    const { width, height } = jsImageCover(this.sprite, widthNew, heightNew);
    this.sprite.width = width;
    this.sprite.height = height;
    this.mask.setSize(widthNew, heightNew);
    this.opt.width = widthNew;
    this.opt.height = heightNew;
    this.mask.renderMask();
  };

  setSizeWithAnimation = (widthNew, heightNew, duration) => {
    const { width, height } = jsImageCover(this.sprite, widthNew, heightNew);

    TweenMax.to(
      this.sprite,
      duration,
      {
        width,
        height,
        ease: Expo.easeInOut,
      }
    );
  };

  setPosition = (x, y) => {
    this.sprite.x = x;
    this.sprite.y = y;
    this.opt.x = x;
    this.opt.y = y;
    this.mask.setPosition(x, y);
    this.mask.renderMask();
  };

  setNewTexture = (url) => {
    this.textureTemp = url;
    this.sprite = PIXI.Sprite.from(this.textureTemp);
    this.sprite.anchor.set(this.opt.anchorX, this.opt.anchorY);
    this.sprite.x = this.opt.x;
    this.sprite.y = this.opt.y;
    const { width, height } = jsImageCover(this.sprite, this.opt.width, this.opt.height);
    
    this.sprite.width = width;
    this.sprite.height = height;
    // this.imageBehaviour = new ImageBehaviour(this.sprite, this);
    this.removeChildAt(1);
    this.addChild(this.sprite);
  }

  setSizeMaskWithAnimation = (newWidth, newHeight, duration) => {
    this.mask.setSizeMaskWithAnimation(newWidth, newHeight, duration);
    this.setSizeWithAnimation(newWidth, newHeight, duration);
  };

  hide = (duration) => {
    // this.imageBehaviour.hide(duration);
  };

  hideWithDisplacement = (duration, callback, isFrom) => {
    // this.imageBehaviour.hideWithDisplacement(duration, callback, isFrom);
  };

  hideFilter = (filterName, duration) => {
    // this.imageBehaviour.hideFilter(filterName, duration);
  };

  removeMask = () => {
    this.mask.removeMask();
  }
}
