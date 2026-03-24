import Rating from "./starRating.jsx";
import FeedbackForm from "./feedbackForm.jsx";
import { useState } from "react";
import toast from "react-hot-toast";
import "./App.css";

function mockApiCall() {
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

function App() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    if (rating === 0) {
      const errorToast = () =>
        toast.error("Please select a rating before submitting.", {
          duration: 1000,
        });
      errorToast();
      return;
    }
    e.preventDefault();
    if (!feedback.trim()) {
      const errorToast = () =>
        toast.error("Please enter your feedback before submitting.", {
          duration: 1000,
        });
      errorToast();
      return;
    }
    setLoading(true);
    await mockApiCall(feedback, setLoading);
    setLoading(false);
    setFeedback("");
    const successToast = () =>
      toast.success("Feedback submitted successfully!", { duration: 1000 });
    successToast();
  }
  return (
    <div className="app">
      <Rating rating={rating} setRating={setRating} />
      <FeedbackForm
        feedback={feedback}
        setFeedback={setFeedback}
        loading={loading}
        setLoading={setLoading}
      />
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}
export default App;
