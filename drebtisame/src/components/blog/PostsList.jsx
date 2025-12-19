// // import React from "react";
// // import { Plus, Calendar, Clock, ImageIcon } from "lucide-react";

// // export default function PostsList({
// //   posts,
// //   lang,
// //   handleEdit,
// //   handleDelete,
// //   categories,
// // }) {
// //   const isAr = lang === "ar";

// //   const t = {
// //     ar: {
// //       publishedPosts: "المقالات المنشورة",
// //       noPosts: "لا توجد مقالات بعد",
// //       startAdding: "ابدأ بإضافة أول مقال طبي",
// //       newPost: "مقال جديد",
// //       edit: "تعديل",
// //       delete: "حذف",
// //       featuredBadge: "مميز",
// //       minutes: "دقائق",
// //     },
// //     en: {
// //       publishedPosts: "Published Posts",
// //       noPosts: "No posts yet",
// //       startAdding: "Start by adding your first medical post",
// //       newPost: "New Post",
// //       edit: "Edit",
// //       delete: "Delete",
// //       featuredBadge: "Featured",
// //       minutes: "min",
// //     },
// //   };

// //   if (posts.length === 0) {
// //     return (
// //       <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
// //         <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //           <ImageIcon className="w-10 h-10 text-gray-400" />
// //         </div>
// //         <h3 className="text-xl font-bold text-gray-700 mb-2">
// //           {t[lang].noPosts}
// //         </h3>
// //         <p className="text-gray-500 mb-6">{t[lang].startAdding}</p>
// //         <button
// //           onClick={() => handleEdit(null)}
// //           className="bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 inline-flex items-center gap-2"
// //         >
// //           <Plus className="w-5 h-5" />
// //           {t[lang].newPost}
// //         </button>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="space-y-4">
// //       <h2 className="text-2xl font-bold text-gray-800 mb-4">
// //         {t[lang].publishedPosts} ({posts.length})
// //       </h2>
// //       {posts.map((post) => (
// //         <div
// //           key={post.id}
// //           className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6"
// //         >
// //           <div className="flex gap-6">
// //             {/* Image */}
// //             <div className="w-48 h-32 flex-shrink-0">
// //               <img
// //                 src={
// //                   post.image ||
// //                   "https://via.placeholder.com/300x200?text=No+Image"
// //                 }
// //                 alt={isAr ? post.titleAr : post.titleEn}
// //                 className="w-full h-full object-cover rounded-xl"
// //               />
// //             </div>

// //             {/* Content */}
// //             <div className="flex-1">
// //               <div className="flex items-start justify-between mb-3">
// //                 <div>
// //                   <h3 className="text-xl font-bold text-gray-800 mb-1">
// //                     {isAr ? post.titleAr : post.titleEn}
// //                   </h3>
// //                   <p className="text-gray-500 text-sm">
// //                     {isAr ? post.titleEn : post.titleAr}
// //                   </p>
// //                 </div>
// //                 {post.featured && (
// //                   <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
// //                     {t[lang].featuredBadge}
// //                   </span>
// //                 )}
// //               </div>

// //               <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
// //                 <span className="flex items-center gap-1">
// //                   <Calendar className="w-4 h-4" />
// //                   {isAr ? post.dateAr : post.dateEn}
// //                 </span>
// //                 <span className="flex items-center gap-1">
// //                   <Clock className="w-4 h-4" />
// //                   {post.readTime} {t[lang].minutes}
// //                 </span>
// //                 <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
// //                   {
// //                     categories.find((c) => c.id === post.category)?.[
// //                       isAr ? "nameAr" : "nameEn"
// //                     ]
// //                   }
// //                 </span>
// //               </div>

// //               <p className="text-gray-600 text-sm mb-4 line-clamp-2">
// //                 {isAr ? post.excerptAr : post.excerptEn}
// //               </p>

// //               <div className="flex gap-3">
// //                 <button
// //                   onClick={() => handleEdit(post)}
// //                   className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
// //                 >
// //                   {t[lang].edit}
// //                 </button>
// //                 <button
// //                   onClick={() => handleDelete(post.id)}
// //                   className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
// //                 >
// //                   {t[lang].delete}
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
// import React from "react";
// import { Plus, Calendar, Clock, Image } from "lucide-react";

// export default function PostsList({
//   posts = [],
//   lang = "en",
//   handleEdit = () => {},
//   handleDelete = () => {},
//   categories = [],
// }) {
//   const isAr = lang === "ar";

//   const t = {
//     ar: {
//       publishedPosts: "المقالات المنشورة",
//       noPosts: "لا توجد مقالات بعد",
//       startAdding: "ابدأ بإضافة أول مقال طبي",
//       newPost: "مقال جديد",
//       edit: "تعديل",
//       delete: "حذف",
//       featuredBadge: "مميز",
//       minutes: "دقائق",
//     },
//     en: {
//       publishedPosts: "Published Posts",
//       noPosts: "No posts yet",
//       startAdding: "Start by adding your first medical post",
//       newPost: "New Post",
//       edit: "Edit",
//       delete: "Delete",
//       featuredBadge: "Featured",
//       minutes: "min",
//     },
//   };

//   if (posts.length === 0) {
//     return (
//       <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl shadow-xl p-16 text-center border-2 border-cyan-100">
//         <div className="w-24 h-24 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
//           <Image className="w-12 h-12 text-cyan-600" />
//         </div>
//         <h3 className="text-2xl font-bold text-gray-800 mb-3">
//           {t[lang].noPosts}
//         </h3>
//         <p className="text-gray-600 mb-8 text-lg">{t[lang].startAdding}</p>
//         <button
//           onClick={() => handleEdit(null)}
//           className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-4 rounded-2xl font-bold hover:from-cyan-700 hover:to-cyan-800 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//         >
//           <Plus className="w-6 h-6" />
//           {t[lang].newPost}
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
//           {t[lang].publishedPosts} ({posts.length})
//         </h2>
//       </div>
//       {posts.map((post) => (
//         <div
//           key={post.id}
//           className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-1"
//         >
//           <div className="flex gap-6">
//             {/* Image */}
//             <div className="w-56 h-36 flex-shrink-0 relative group">
//               <img
//                 src={
//                   post.image ||
//                   "https://via.placeholder.com/300x200?text=No+Image"
//                 }
//                 alt={isAr ? post.titleAr : post.titleEn}
//                 className="w-full h-full object-cover rounded-2xl shadow-md group-hover:shadow-xl transition-shadow"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
//             </div>

//             {/* Content */}
//             <div className="flex-1 flex flex-col justify-between">
//               <div>
//                 <div className="flex items-start justify-between mb-3">
//                   <div className="flex-1">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight hover:text-cyan-600 transition-colors">
//                       {isAr ? post.titleAr : post.titleEn}
//                     </h3>
//                     <p className="text-gray-400 text-sm font-medium">
//                       {isAr ? post.titleEn : post.titleAr}
//                     </p>
//                   </div>
//                   {post.featured && (
//                     <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md flex-shrink-0 ml-3">
//                       ⭐ {t[lang].featuredBadge}
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex items-center gap-5 text-sm mb-4">
//                   <span className="flex items-center gap-2 text-gray-500 font-medium">
//                     <Calendar className="w-4 h-4 text-cyan-600" />
//                     {isAr ? post.dateAr : post.dateEn}
//                   </span>
//                   <span className="flex items-center gap-2 text-gray-500 font-medium">
//                     <Clock className="w-4 h-4 text-cyan-600" />
//                     {post.readTime} {t[lang].minutes}
//                   </span>
//                   <span className="bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-xs font-bold border border-cyan-200">
//                     {
//                       categories.find((c) => c.id === post.category)?.[
//                         isAr ? "nameAr" : "nameEn"
//                       ]
//                     }
//                   </span>
//                 </div>

//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
//                   {isAr ? post.excerptAr : post.excerptEn}
//                 </p>
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   onClick={() => handleEdit(post)}
//                   className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
//                 >
//                   {t[lang].edit}
//                 </button>
//                 <button
//                   onClick={() => handleDelete(post.id)}
//                   className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
//                 >
//                   {t[lang].delete}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import React from "react";
import { Plus, Calendar, Clock, Image } from "lucide-react";

export default function PostsList({
  posts = [],
  lang = "en",
  handleEdit = () => {},
  handleDelete = () => {},
  categories = [],
}) {
  const isAr = lang === "ar";

  const t = {
    ar: {
      publishedPosts: "المقالات المنشورة",
      noPosts: "لا توجد مقالات بعد",
      startAdding: "ابدأ بإضافة أول مقال طبي",
      newPost: "مقال جديد",
      edit: "تعديل",
      delete: "حذف",
      featuredBadge: "مميز",
      minutes: "دقائق",
    },
    en: {
      publishedPosts: "Published Posts",
      noPosts: "No posts yet",
      startAdding: "Start by adding your first medical post",
      newPost: "New Post",
      edit: "Edit",
      delete: "Delete",
      featuredBadge: "Featured",
      minutes: "min",
    },
  };

  if (posts.length === 0) {
    return (
      <div className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl md:rounded-3xl shadow-xl p-8 md:p-16 text-center border-2 border-cyan-100">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
          <Image className="w-10 h-10 md:w-12 md:h-12 text-cyan-600" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
          {t[lang].noPosts}
        </h3>
        <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
          {t[lang].startAdding}
        </p>
        <button
          onClick={() => handleEdit(null)}
          className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold hover:from-cyan-700 hover:to-cyan-800 inline-flex items-center gap-2 md:gap-3 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          <Plus className="w-5 h-5 md:w-6 md:h-6" />
          {t[lang].newPost}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          {t[lang].publishedPosts} ({posts.length})
        </h2>
      </div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Image */}
            <div className="w-full md:w-56 h-48 md:h-36 flex-shrink-0 relative group">
              <img
                src={
                  post.image ||
                  "https://via.placeholder.com/300x200?text=No+Image"
                }
                alt={isAr ? post.titleAr : post.titleEn}
                className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-md group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2 leading-tight hover:text-cyan-600 transition-colors">
                      {isAr ? post.titleAr : post.titleEn}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm font-medium">
                      {isAr ? post.titleEn : post.titleAr}
                    </p>
                  </div>
                  {post.featured && (
                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-bold shadow-md flex-shrink-0 w-fit">
                      ⭐ {t[lang].featuredBadge}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 md:gap-5 text-xs md:text-sm mb-3 md:mb-4">
                  <span className="flex items-center gap-1.5 md:gap-2 text-gray-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-600" />
                    {isAr ? post.dateAr : post.dateEn}
                  </span>
                  <span className="flex items-center gap-1.5 md:gap-2 text-gray-500 font-medium">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-600" />
                    {post.readTime} {t[lang].minutes}
                  </span>
                  <span className="bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-bold border border-cyan-200">
                    {
                      categories.find((c) => c.id === post.category)?.[
                        isAr ? "nameAr" : "nameEn"
                      ]
                    }
                  </span>
                </div>

                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 leading-relaxed">
                  {isAr ? post.excerptAr : post.excerptEn}
                </p>
              </div>

              <div className="flex gap-2 md:gap-3">
                <button
                  onClick={() => handleEdit(post)}
                  className="flex-1 md:flex-none bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  {t[lang].edit}
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="flex-1 md:flex-none bg-gradient-to-r from-red-600 to-red-700 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-bold hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  {t[lang].delete}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
