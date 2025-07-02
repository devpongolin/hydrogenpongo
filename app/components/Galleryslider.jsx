import img1 from '../assets/waggle community.webp';
import img2 from '../assets/waggle community(1).webp';
import img3 from '../assets/waggle community(2).webp';
import img4 from '../assets/waggle community(3).webp';
import img5 from '../assets/waggle community(4).webp';
import img6 from '../assets/waggle community(5).webp';
import img7 from '../assets/waggle community(6).webp';
import img8 from '../assets/waggle community(7).webp';
import img9 from '../assets/waggle community(8).webp';
import img10 from '../assets/waggle community(9).webp';
import img11 from '../assets/waggle community(10).webp';
import img12 from '../assets/waggle community(11).webp';
import img13 from '../assets/waggle community(12).webp';
import img14 from '../assets/waggle community(13).webp';

const images = [
  img1, img2, img3, img4,
  img5, img6, img7, img8,
  img9, img10, img11, img12,
  img13, img14,
];

const labels = [
  'User A', 'User B', 'User C', 'User D',
  'User E', 'User F', 'User G', 'User H',
  'User I', 'User J', 'User K', 'User L',
  'User M', 'User N',
];

// Convert image list into array of objects: { pair: [img1, img2], marginClass: '...' }
const getStyledImagePairs = (imgs, lbls) => {
  const styledPairs = [];
  for (let i = 0; i < imgs.length; i += 2) {
    const pair = [
      { src: imgs[i], label: lbls[i] },
      { src: imgs[i + 1], label: lbls[i + 1] }
    ];
    const marginClass = styledPairs.length % 2 === 0 ? 'margin-bottom' : 'margin-top';
    styledPairs.push({ pair, marginClass });
  }
  return styledPairs;
};

const ImageMarqueeSlider = () => {
  const originalPairs = getStyledImagePairs(images, labels);

  // Repeat with correct margin and label preserved
  const repeatedPairs = [...originalPairs, ...originalPairs];

  return (
    <div className="marquee-wrapper">
        <span className="text-center w-full block pb-[27px]">Gallery</span>
      <div className="marquee-track">
        {repeatedPairs.map(({ pair, marginClass }, index) => (
          <div key={index} className={`image-pair ${marginClass}`}>
            {pair.map((imgObj, idx) => (
              <div key={idx} className="image-block">
                <img src={imgObj.src} alt={`img-${index}-${idx}`} />
                <span className="image-label lato">{imgObj.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarqueeSlider;
