import fragmentSrc from './fragment.glsl'
import textVertex from './vertex.glsl';
import { jsImageCover } from './jsImageCover';
import gsap from 'gsap';

export default class SphereSlider extends React.PureComponent {
  componentDidMount() {
    // console.log(img1);
    
    this.mouse = {
      x: 0,
      y: 0,
    };
    this.PIXI = require('pixi.js');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.app = new this.PIXI.Application({
      width: this.width,
      height: this.height,
      transparent: true,
      autoResize: true,
      resizeTo: window,
      resolution: 1,
    });

    this.config = {
      x: this.width / 2,
      y: this.height / 2,
      blend: 0,
      offset: 0,
    };

    this.container = new this.PIXI.Container();
    this.sprite = new this.PIXI.Sprite(this.PIXI.Texture.from('/1.jpg'));
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.x = this.config.x;
    this.sprite.y = this.config.y;
    this.sprite.width = jsImageCover(this.sprite, 400, 550).width;
    this.sprite.height = jsImageCover(this.sprite, 400, 550).height;

    // this.rect = new this.PIXI.Rectangle(0, 0, this.width, this.height);
    this.graphics = new this.PIXI.Graphics();

    // Rectangle
    this.graphics.alpha = 0;
    this.graphics.beginFill(0xDE3249);
    this.graphics.drawRect(0, 0, this.width, this.height);
    this.graphics.endFill();

    this.container.addChild(this.graphics);

    
    this.container.addChild(this.sprite);

    this.custumSmoothScrollFilter = new this.PIXI.Filter(null, fragmentSrc, {
      blend:this.config.blend,
    });

    this.container.filters = [this.custumSmoothScrollFilter];

    this.canvas.appendChild(this.app.view);

    this.app.stage.addChild(this.container);

    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('keydown', this.handleKeyDown);
    this.animate();

    // GUI //
  
    this.dat = require('dat.gui');
    this.gui = new this.dat.GUI();
    this.gui.remember(this.config);
    this.gui.add(this.config, 'blend').min(-1).max(1).step(0.001);;
    this.gui.add(this.config, 'offset').min(-1).max(1).step(0.001);;
    this.gui.add(this.config, 'x').min(-this.width).max(this.width * 2).step(1);
    this.gui.add(this.config, 'y').min(-this.height).max(this.height * 2).step(1);

    // GUI //
  }

  handleAnimateUp = () => {
    gsap.fromTo(this.config,
      {
        offset: 0,
        // blend: 0,
      },
      {
        offset: 1,
        // blend: 1,
        duration: 2,
      }
    );
  }

  handleAnimateDown = () => {
    gsap.fromTo(this.config,
      {
        offset: 0,
        // blend: 0,
      },
      {
        offset: -1,
        // blend: 1,
        duration: 2,
      }
    );
  }

  handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      this.handleAnimateUp();
      console.log('ArrowUp');      
    }
    if (e.key === 'ArrowDown') {
      this.handleAnimateDown();
      console.log('ArrowDown');
    }
    
  }

  handleMouseMove = (e) => {
    // this.rect.containse(clientX, e.clientY);
    this.mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	  this.mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
  }

  animate = () => {
    this.sprite.x = this.config.x;
    this.sprite.y = this.config.y;
    this.custumSmoothScrollFilter.uniforms.blend = this.config.blend;
    this.custumSmoothScrollFilter.uniforms.offset = this.config.offset;
    requestAnimationFrame( this.animate );
  }
  
  render() {
    return (
      <div ref={(node) => { this.canvas = node}} />
    );
  }
}