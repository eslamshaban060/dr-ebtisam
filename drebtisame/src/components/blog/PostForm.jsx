import React from "react";
import { X, ImageIcon } from "lucide-react";

export default function PostForm({
  formData,
  setFormData,
  imagePreview,
  setImagePreview,
  handleSubmit,
  resetForm,
  editingPost,
  lang,
}) {
  const isAr = lang === "ar";

  const t = {
    ar: {
      addPost: "إضافة مقال جديد",
      editPost: "تعديل المقال",
      imageUpload: "صورة المقال",
      clickUpload: "انقر لرفع الصورة",
      imageFormat: "PNG, JPG حتى 5MB",
      titleAr: "العنوان بالعربية",
      titleEn: "العنوان بالإنجليزية",
      excerptAr: "المقتطف بالعربية",
      excerptEn: "المقتطف بالإنجليزية",
      category: "التصنيف",
      readTime: "وقت القراءة (دقائق)",
      featured: "مقال مميز؟",
      yesFeatured: "نعم، مقال مميز",
      dateAr: "التاريخ بالعربية",
      dateEn: "التاريخ بالإنجليزية",
      dateArPlaceholder: "مثال: ١٥ ديسمبر ٢٠٢٤",
      dateEnPlaceholder: "e.g., Dec 15, 2024",
      saveChanges: "حفظ التعديلات",
      addPostBtn: "إضافة المقال",
      cancel: "إلغاء",
    },
    en: {
      addPost: "Add New Post",
      editPost: "Edit Post",
      imageUpload: "Post Image",
      clickUpload: "Click to upload image",
      imageFormat: "PNG, JPG up to 5MB",
      titleAr: "Title in Arabic",
      titleEn: "Title in English",
      excerptAr: "Excerpt in Arabic",
      excerptEn: "Excerpt in English",
      category: "Category",
      readTime: "Read Time (minutes)",
      featured: "Featured Post?",
      yesFeatured: "Yes, Featured",
      dateAr: "Date in Arabic",
      dateEn: "Date in English",
      dateArPlaceholder: "e.g., ١٥ ديسمبر ٢٠٢٤",
      dateEnPlaceholder: "e.g., Dec 15, 2024",
      saveChanges: "Save Changes",
      addPostBtn: "Add Post",
      cancel: "Cancel",
    },
  };

  const categories = [
    { id: "hearing", nameAr: "السمع", nameEn: "Hearing" },
    { id: "ear", nameAr: "الأذن", nameEn: "Ear" },
    { id: "tips", nameAr: "نصائح", nameEn: "Tips" },
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {editingPost ? t[lang].editPost : t[lang].addPost}
      </h2>
      <div className="space-y-6">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t[lang].imageUpload}
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-cyan-500 transition-colors">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  onClick={() => {
                    setImagePreview("");
                    setFormData({ ...formData, image: "" });
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center cursor-pointer">
                <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                <span className="text-gray-600 mb-2">
                  {t[lang].clickUpload}
                </span>
                <span className="text-sm text-gray-400">
                  {t[lang].imageFormat}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        {/* Titles */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t[lang].titleAr}
            </label>
            <input
              type="text"
              value={formData.titleAr}
              onChange={(e) =>
                setFormData({ ...formData, titleAr: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none"
              required
              dir="rtl"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t[lang].titleEn}
            </label>
            <input
              type="text"
              value={formData.titleEn}
              onChange={(e) =>
                setFormData({ ...formData, titleEn: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none"
              required
              dir="ltr"
            />
          </div>
        </div>

        {/* Excerpts */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t[lang].excerptAr}
            </label>
            <textarea
              value={formData.excerptAr}
              onChange={(e) =>
                setFormData({ ...formData, excerptAr: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none h-32"
              required
              dir="rtl"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t[lang].excerptEn}
            </label>
            <textarea
              value={formData.excerptEn}
              onChange={(e) =>
                setFormData({ ...formData, excerptEn: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none h-32"
              required
              dir="ltr"
            />
          </div>
        </div>

        {/* Category, Read Time, Featured */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t[lang].category}
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {isAr ? cat.nameAr : cat.nameEn}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t[lang].readTime}
            </label>
            <input
              type="number"
              value={formData.readTime}
              onChange={(e) =>
                setFormData({ ...formData, readTime: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none"
              min="1"
              max="60"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t[lang].featured}
            </label>
            <label className="flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData({ ...formData, featured: e.target.checked })
                }
                className="w-5 h-5 text-cyan-600"
              />
              <span className="text-gray-700">{t[lang].yesFeatured}</span>
            </label>
          </div>
        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t[lang].dateAr}
            </label>
            <input
              type="text"
              value={formData.dateAr}
              onChange={(e) =>
                setFormData({ ...formData, dateAr: e.target.value })
              }
              placeholder={t[lang].dateArPlaceholder}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none"
              required
              dir="rtl"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t[lang].dateEn}
            </label>
            <input
              type="text"
              value={formData.dateEn}
              onChange={(e) =>
                setFormData({ ...formData, dateEn: e.target.value })
              }
              placeholder={t[lang].dateEnPlaceholder}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none"
              required
              dir="ltr"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-xl font-bold hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg"
          >
            {editingPost ? t[lang].saveChanges : t[lang].addPostBtn}
          </button>
          <button
            onClick={resetForm}
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50"
          >
            {t[lang].cancel}
          </button>
        </div>
      </div>
    </div>
  );
}
