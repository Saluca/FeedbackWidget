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
        toast.error("Please select a rating before submitting.");
      errorToast();
      return;
    }
    e.preventDefault();
    if (!feedback.trim()) {
      const errorToast = () =>
        toast.error("Please enter your feedback before submitting.");
      errorToast();
      return;
    }
    setLoading(true);
    await mockApiCall(feedback, setLoading);
    setLoading(false);
    setFeedback("");
    const successToast = () =>
      toast.success("Feedback submitted successfully!");
    successToast();
  }
  return (
    <div className="app">
      <FeedbackForm
        feedback={feedback}
        setFeedback={setFeedback}
        loading={loading}
        setLoading={setLoading}
      />
      <Rating rating={rating} setRating={setRating} />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}
export default App;
