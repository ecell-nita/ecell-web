import Gallery from 'react-grid-gallery';
import './Testimonials.css'
import { IMAGES } from './TestimonialsData';
const Testimonials = () => {
  return (
    <div className='testimonial-wrapper'>
      <Gallery images={IMAGES} enableImageSelection={false} enableKeyboardInput={true} onClickImage={{}}/>
    </div>
  );
}

export default Testimonials;