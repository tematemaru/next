import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl';

import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

// import TRYGalien from './TRYGalien.woff2';

export default class Sphere extends React.PureComponent {
  constructor() {
    super();
    this.time = 0;
    this.mouse = {
      x: 0,
      y: 0,
    }
  }
  componentDidMount() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.renderer = new THREE.WebGLRenderer();

    this.renderer.setClearColor('hsl(100, 10%, 10%)', 1);


    this.camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 );
    this.camera.position.set(2, -1.5, -1);

    this.camera.lookAt(new THREE.Vector3());

    this.scene = new THREE.Scene();

    this.camera.position.z = 5;
    this.renderer.setSize(this.width, this.height);
    this.canvas.appendChild(this.renderer.domElement);
    
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.25
    this.controls.enableZoom = true

    this.particles = new THREE.OctahedronGeometry(1, 5);
    this.particles.vertices = this.particles.vertices.map(v => {
        v.x += (Math.random() - 0.5) * 0.05;
        v.y += (Math.random() - 0.5) * 0.05;
        v.z += (Math.random() - 0.5) * 0.05;
        return v;
    });

    this.shaderPoint = THREE.ShaderLib.points;
    this.uniforms = {
        ...this.shaderPoint.uniforms,
        iTime: { value: 0 },
        pSize: { value: 10 },
    };

    this.pMaterial = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        transparent: true,
        depthWrite: false,

        blending: THREE.AdditiveBlending,

        fragmentShader,
        vertexShader,
    });
    

    this.particleSystem = new THREE.Points(this.particles, this.pMaterial);
    this.particleSystem.sortParticles = true;
    
    this.scene.add(this.particleSystem);

    window.addEventListener('mousemove', this.handleMouseMove);
    this.animate();
  }

  handleMouseMove = (e) => {
    this.mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	  this.mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
  }

  animate = () => {
    this.renderer.render( this.scene, this.camera );
    this.pMaterial.uniforms.iTime.value = this.time * 0.175;
    this.time++;
    requestAnimationFrame( this.animate );
  }
  
  render() {
    return (
      <div ref={(node) => { this.canvas = node}} />
    );
  }
}