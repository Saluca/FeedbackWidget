import { IconStar, IconStarFilled } from "@tabler/icons-react";
function Rating({ rating, setRating }) {
  return (
    <div className="rating-container">
      {[...Array(5)].map((_, i) => {
        const star = i + 1;
        return (
          <span className="star-wrapper" key={star}>
            <button
              className="star-button"
              type="button"
              onClick={() => setRating(star)}
              style={{ color: star <= rating ? "#ffc107" : "#0d0f14" }}
            >
              {star <= rating ? (
                <IconStarFilled size={24} />
              ) : (
                <IconStar size={24} />
              )}
            </button>
          </span>
        );
      })}
    </div>
  );
}

export default Rating;
