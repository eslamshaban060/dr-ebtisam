"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/supabase";
import Header from "./Header";
import Stats from "./Stats";
import PostForm from "./PostForm";
import PostsList from "./PostsList";
import Toast from "./Toast";

export default function BlogAdminPanel({ lang = "ar" }) {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    titleAr: "",
    titleEn: "",
    excerptAr: "",
    excerptEn: "",
    image: "",
    category: "hearing",
    dateAr: "",
    dateEn: "",
    readTime: "5",
    featured: false,
  });
  const [imagePreview, setImagePreview] = useState("");

  const categories = [
    { id: "hearing", nameAr: "السمع", nameEn: "Hearing" },
    { id: "ear", nameAr: "الأذن", nameEn: "Ear" },
    { id: "tips", nameAr: "نصائح", nameEn: "Tips" },
  ];

  const isAr = lang === "ar";

  useEffect(() => {
    fetchPostsFromSupabase();
  }, []);

  const showToastMessage = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

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

  const handleSubmit = async () => {
    try {
      const newPost = {
        titleAr: formData.titleAr,
        titleEn: formData.titleEn,
        excerptAr: formData.excerptAr,
        excerptEn: formData.excerptEn,
        image: formData.image,
        category: formData.category,
        dateAr: formData.dateAr,
        dateEn: formData.dateEn,
        readTime: formData.readTime,
        featured: formData.featured,
        createdAt: new Date().toISOString(),
      };

      if (editingPost) {
        const { error } = await supabase
          .from("blog")
          .update(newPost)
          .eq("id", editingPost.id);
        if (error) throw error;
        showToastMessage("تم تحديث المقال بنجاح!", "success");
      } else {
        const { data, error } = await supabase.from("blog").insert([newPost]);
        if (error) throw error;
        showToastMessage("تم إضافة المقال بنجاح!", "success");
      }

      resetForm();
      fetchPostsFromSupabase();
    } catch (error) {
      console.error(error);
      showToastMessage("حدث خطأ، حاول مرة أخرى", "error");
    }
  };

  const fetchPostsFromSupabase = async () => {
    const { data, error } = await supabase.from("blog").select("*");
    if (error) {
      console.error(error);
    } else {
      setPosts(data);
    }
  };

  const resetForm = () => {
    setFormData({
      titleAr: "",
      titleEn: "",
      excerptAr: "",
      excerptEn: "",
      image: "",
      category: "hearing",
      dateAr: "",
      dateEn: "",
      readTime: "5",
      featured: false,
    });
    setImagePreview("");
    setShowForm(false);
    setEditingPost(null);
  };

  const handleEdit = (post) => {
    if (!post) {
      setShowForm(true);
      return;
    }
    setEditingPost(post);
    setFormData(post);
    setImagePreview(post.image);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm("هل أنت متأكد من حذف هذا المقال؟")) {
      const { error } = await supabase.from("blog").delete().eq("id", id);
      if (error) {
        console.error(error);
        showToastMessage("حدث خطأ، حاول مرة أخرى", "error");
      } else {
        showToastMessage("تم حذف المقال بنجاح!", "success");
        fetchPostsFromSupabase();
      }
    }
  };

  return (
    <div
      className="h-[75dvh] overflow-y-auto bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Toast Notification */}
      <Toast toast={toast} lang={lang} />

      <div className="max-w-7xl mx-auto">
        {/* Header & Stats */}
        <Header lang={lang} showForm={showForm} setShowForm={setShowForm} />
        <Stats posts={posts} lang={lang} />

        {/* Form */}
        {showForm && (
          <PostForm
            lang={lang}
            formData={formData}
            setFormData={setFormData}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
            handleImageUpload={handleImageUpload}
            handleSubmit={handleSubmit}
            resetForm={resetForm}
            editingPost={editingPost}
            categories={categories}
          />
        )}

        {/* Posts List */}
        <PostsList
          posts={posts}
          lang={lang}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          categories={categories}
        />
      </div>

      <style>{`
        @keyframes slide-in {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
      `}</style>
    </div>
  );
}
