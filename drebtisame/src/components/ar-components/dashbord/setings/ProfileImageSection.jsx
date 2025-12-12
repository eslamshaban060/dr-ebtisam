import { Camera, Trash2 } from "lucide-react";

export default function ProfileImageSection({
  profileImage,
  setProfileImage,
  handleImageUpload,
  texts,
}) {
  return (
    <div className="flex col-span-1 flex-col items-center mb-8">
      <div className="relative mb-4">
        <div
          className="w-32 h-32 rounded-full overflow-hidden border-4"
          style={{ borderColor: "var(--lb)" }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <label
          htmlFor="image-upload"
          className="absolute bottom-0 right-0 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-110"
          style={{ backgroundColor: "var(--nv)" }}
        >
          <Camera size={20} style={{ color: "var(--wh)" }} />
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={() => setProfileImage("https://via.placeholder.com/400")}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:opacity-90"
        style={{
          color: "var(--re)",
          backgroundColor: "var(--pink)",
        }}
      >
        <Trash2 size={16} />
        {texts.delete}
      </button>
    </div>
  );
}
