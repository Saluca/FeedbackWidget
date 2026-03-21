import Rating from "./starRating.jsx";
import { Toaster } from "react-hot-toast";
import "./App.css";

function FeedbackForm({ feedback, setFeedback, loading }) {
  return (
    <div className="feedback-form">
      <Toaster position="top-center" reverseOrder={false} />
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        disabled={loading}
      />
    </div>
  );
}

export default FeedbackForm;
