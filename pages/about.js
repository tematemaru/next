import Header from '../components/Header';
import gl from '../glsl/fragment.glsl';

export default function About() {
  console.log(gl);
  
  return (
    <div>
      <Header />
      <p>This is the about page</p>
    </div>
  );
}