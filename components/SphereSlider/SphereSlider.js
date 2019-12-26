import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

export default class SphereSlider extends React.PureComponent {
  componentDidMount() {
    this.texture = new THREE.Texture(this.prepareTextTexture());
    console.log(this.texture);
    // this.texture.magFilter = THREE.NearestFilter;
    // this.texture.minFilter = THREE.NearestFilter;
    // this.texture.minFilter = THREE.LinearMipMapLinearFilter;
    this.texture.minFilter = THREE.LinearFilter;
    // this.texture.anisotropy  = 1;
    
    this.texture.needsUpdate = true;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  
    // this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // this.cube = new THREE.Mesh( this.geometry, this.material );
    // this.scene.add(this.cube);

    this.camera.position.z = 5;

    this.canvas.appendChild( this.renderer.domElement );


    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.25
    this.controls.enableZoom = true

    this.geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight)
    this.material = new THREE.MeshBasicMaterial({
      // color: 0xffff00,
      side: THREE.DoubleSide,
      map: this.texture,
    });
    this.plane = new THREE.Mesh( this.geometry, this.material );
    this.scene.add(this.plane);
    this.animate();
  }

  prepareTextTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    const ctx = canvas.getContext('2d');
    ctx.font = '170px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff'
    ctx.fillText('ODDA', canvas.width / 2, canvas.height / 2);
    return canvas;
  }

  animate = () => {
    requestAnimationFrame( this.animate );
    // this.cube.rotation.x += 0.01;
		// this.cube.rotation.y += 0.01;
    this.renderer.render( this.scene, this.camera );
  }
  
  render() {
    return (
      <div ref={(node) => { this.canvas = node}} />
    );
  }
}