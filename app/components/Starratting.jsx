import fullStar from '../assets/fullStar.webp';
import halfStar from '../assets/halfStar.webp';
import emptyStar from '../assets/emptyStar.webp';

export function StarRating({ rating = 5 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const totalStars = 5;

  return (
    <div style={{ display: 'flex', gap: '3px' }}> 
      {Array.from({ length: totalStars }, (_, index) => {
        let icon = emptyStar;

        if (index < fullStars) {
          icon = fullStar;
        } else if (index === fullStars && hasHalfStar) {
          icon = halfStar;
        }

        return <img key={index} src={icon} alt="star" style={{ width: '15px', height: '15px' }} />;
      })}
    </div>
  );
}

