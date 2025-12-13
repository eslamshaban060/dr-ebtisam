import { Star, Send, User, MessageSquare, Loader2 } from "lucide-react";

export default function ReviewForm({
  lang,
  formData,
  setFormData,
  hoveredRating,
  setHoveredRating,
  errors,
  setErrors,
  handleSubmit,
  loading,
}) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleRating = (rating) => {
    setFormData({ ...formData, rating });
    if (errors.rating) setErrors({ ...errors, rating: "" });
  };

  return (
    <div className="max-w-3xl mx-auto relative z-10">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
        <div className="space-y-6">
          {/* الاسم */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
              <User className="w-5 h-5 text-teal-500" />
              <span>{lang === "ar" ? "الاسم الكامل" : "Full Name"}</span>
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-5 py-4 bg-gray-50 rounded-xl border-2 ${
                errors.name
                  ? "border-red-500"
                  : "border-transparent focus:border-teal-500"
              }`}
            />
          </div>

          {/* البريد */}
          <div>
            <label className="text-gray-700 font-semibold mb-3 block">
              {lang === "ar" ? "البريد الإلكتروني" : "Email"}
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-5 py-4 bg-gray-50 rounded-xl border-2 ${
                errors.email
                  ? "border-red-500"
                  : "border-transparent focus:border-teal-500"
              }`}
            />
          </div>

          {/* التقييم */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
              <Star className="w-5 h-5 text-teal-500" />
              <span>{lang === "ar" ? "التقييم" : "Rating"}</span>
            </label>
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  disabled={loading}
                  onClick={() => handleRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= (hoveredRating || formData.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* الرأي */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
              <MessageSquare className="w-5 h-5 text-teal-500" />
              <span>{lang === "ar" ? "رأيك" : "Your Review"}</span>
            </label>
            <textarea
              name="review"
              rows="6"
              value={formData.review}
              onChange={handleChange}
              className={`w-full px-5 py-4 bg-gray-50 rounded-xl border-2 ${
                errors.review
                  ? "border-red-500"
                  : "border-transparent focus:border-teal-500"
              }`}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 text-lg disabled:opacity-70"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                <span>{lang === "ar" ? "إرسال الرأي" : "Submit Review"}</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
