//
// The predefined transitions.
// toLeft, toRight, toUp, toDown
// fade, crossFade, explode, flyTo
// scrollThen, scale, wait
//


export default function() {

  // index <=> about
  this.transition(
    this.fromRoute('index'),
    this.toRoute('about'),
    this.use('scale')
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('index'),
    this.use('toDown')
  );

  // index <=> contact_us
  this.transition(
    this.fromRoute('index'),
    this.toRoute('contact_us'),
    this.use('fade', {duration: 400})
  );
  this.transition(
    this.fromRoute('contact_us'),
    this.toRoute('index'),
    this.use('toLeft')
  );

  // index <=> fundamentals
  this.transition(
    this.fromRoute('index'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('index'),
    this.use('toLeft', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('srings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('about'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('contact_us'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('contact_us'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );

  // index <=> strings
  this.transition(
    this.fromRoute('index'),
    this.toRoute('strings'),
    this.use('crossFade', {duration: 4000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('index'),
    this.use('crossFade', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('srings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('about'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('contact_us'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('contact_us'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );


  // index <=> dimensions
  this.transition(
    this.fromRoute('index'),
    this.toRoute('dimensions'),
    this.use('toLeft', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('index'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('about'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('contact_us'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('contact_us'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );

  // index <=> dualities
  this.transition(
    this.fromRoute('index'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('index'),
    this.use('toLeft', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('about'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('contact_us'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('contact_us'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );

  // index <=> branes
  this.transition(
    this.fromRoute('index'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('index'),
    this.use('toLeft', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('about'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('contact_us'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('contact_us'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );

  // index <=> superstrings
  this.transition(
    this.fromRoute('index'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('index'),
    this.use('toLeft', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('about'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('contact_us'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('contact_us'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );

  // index <=> unifications
  this.transition(
    this.fromRoute('index'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('index'),
    this.use('toLeft', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('about'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('contact_us'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('contact_us'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );

  // index <=> matrices
  this.transition(
    this.fromRoute('index'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('index'),
    this.use('toLeft', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('about'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('contact_us'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('contact_us'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );

  // index <=> correspondences
  this.transition(
    this.fromRoute('index'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('index'),
    this.use('toLeft', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('about'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('contact_us'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('contact_us'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );

  // index <=> phenomenologies
  this.transition(
    this.fromRoute('index'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('index'),
    this.use('toLeft', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('about'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('contact_us'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('contact_us'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );

  // index <=> gravities
  this.transition(
    this.fromRoute('index'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('index'),
    this.use('toLeft', {duration: 3000})
  );
  this.transition(
    this.fromRoute('fundamentals'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('fundamentals'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('dimensions'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dimensions'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('dualities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('dualities'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('branes'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('branes'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('superstrings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('superstrings'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('unifications'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('unifications'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('matrices'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('matrices'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('correspondences'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('correspondences'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('phenomenologies'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('phenomenologies'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('strings'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('strings'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('about'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('gravities'),
    this.toRoute('contact_us'),
    this.use('toRight', {duration: 3000})
  );
  this.transition(
    this.fromRoute('contact_us'),
    this.toRoute('gravities'),
    this.use('toRight', {duration: 3000})
  );
}
