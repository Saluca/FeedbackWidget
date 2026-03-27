import { Toaster } from "react-hot-toast";
import "./App.css";

function FeedbackForm({ feedback, setFeedback, loading }) {
  return (
    <div className="feedback-form">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 1000 }}
      />
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        disabled={loading}
        placeholder="Please enter your feedback here..."
      />
    </div>
  );
}

export default FeedbackForm;
