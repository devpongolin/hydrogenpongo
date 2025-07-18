
// Combine image and label pairs into unified structure
const getPairedData = (HydrogenGallerySliderData) => {
  return HydrogenGallerySliderData.map((imgPair, index) => ({
    top: {
      src: imgPair?.node?.fields?.find(field => field.key === 'hydrogen_gallery_slider_top_image')?.reference?.image?.url,
      label: imgPair?.node?.fields?.find(field => field.key === 'hydrogen_gallery_slider_top_text')?.value || ''
    },
    bottom: {
      src: imgPair?.node?.fields?.find(field => field.key === 'hydrogen_gallery_slider_bottom_image')?.reference?.image?.url,
      label: imgPair?.node?.fields?.find(field => field.key === 'hydrogen_gallery_slider_bottom_text')?.value || ''
    },
    marginClass: index % 2 === 0 ? 'margin-bottom' : 'margin-top'
  }));
};

const ImageMarqueeSlider = ({HydrogenGallerySliderData}) => {
  const pairs = getPairedData(HydrogenGallerySliderData);
  const repeatedPairs = [...pairs, ...pairs, ...pairs]; // for looping

  return (
    <div className="marquee-wrapper">
      <span className="text-center w-full block md:pb-[27px] pb-[20px] text-[27px] md:text-[35px] font-medium lexend">Gallery</span>
      <div className="marquee-track">
        {repeatedPairs.map(({ top, bottom, marginClass }, index) => (
          <div key={index} className={`image-pair ${marginClass}`}>
            {/* Top image block */}
            {top.src && top.label && (
              <div className="image-block">
                <img src={top.src} alt={`img-${index}-top`} />
                <span className="image-label lato">{top.label}</span>
              </div>
            )}

            {/* Bottom image block */}
            {bottom.src && bottom.label && (
              <div className="image-block">
                <img src={bottom.src} alt={`img-${index}-bottom`} />
                <span className="image-label lato">{bottom.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarqueeSlider;
