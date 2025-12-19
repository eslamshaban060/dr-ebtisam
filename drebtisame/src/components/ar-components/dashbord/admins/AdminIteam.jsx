import Popup from "../../dashboard/components/popup";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { User, Mail, Phone, Calendar, Trash2 } from "lucide-react";

const AdminIteam = ({ message, onDelete, lan }) => {
  const [show2, setShow2] = useState(false);

  if (message.role === "owner") {
    return;
  }
  return (
    <div className=" w-full">
      <div className="w-full   backdrop-blur-sm flex items-center justify-center p-1 animate-in fade-in duration-200 ">
        <div className="bg-[var(--wh)] rounded-2xl p-6 w-full  transform animate-in zoom-in-95 duration-200">
          {/* Icon for small screens */}
          <div className="flex items-center  flex-row-reverse  justify-between ">
            <div
              className="w-16 h-16 rounded-full bg-[var(--re)]/10 flex items-center justify-center"
              onClick={() => setShow2(true)}
            >
              <Trash2 size={32} className="text-[var(--re)]" />
            </div>
            <div className="flex items-center gap-6 py-3">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[var(--db)] flex items-center justify-center text-[var(--wh)] shadow-xl shadow-[var(--db)]/20 group-hover:scale-105 transition-transform duration-300">
                  <User
                    size={32}
                    strokeWidth={2.5}
                    className="sm:w-10 sm:h-10"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-[var(--wh)]"></div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-xl sm:text-2xl text-[var(--db)] truncate mb-1">
                  {message.name}
                </h3>
                <p className="text-sm text-[var(--db)]/60 font-medium">
                  {lan === "en" ? "Administrator" : "مشرف"}
                </p>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Card */}
            <div className="flex items-center gap-3 bg-[var(--lb-2)]/30 rounded-2xl p-4 hover:bg-[var(--lb-2)]/50 transition-all border border-[var(--lb-2)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--db)] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Mail size={22} className="text-[var(--wh)]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[var(--db)]/60 font-medium mb-1">
                  {lan === "en" ? "Email Address" : "البريد الإلكتروني"}
                </p>
                <p
                  className="text-sm font-semibold text-[var(--db)] truncate"
                  title={message.email}
                >
                  {message.email}
                </p>
              </div>
            </div>
            {/* Phone Card */}
            <div className="flex items-center gap-3 bg-[var(--lb-2)]/30 rounded-2xl p-4 hover:bg-[var(--lb-2)]/50 transition-all border border-[var(--lb-2)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--db)] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Phone size={22} className="text-[var(--wh)]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[var(--db)]/60 font-medium mb-1">
                  {lan === "en" ? "Phone Number" : "رقم الهاتف"}
                </p>
                <p className="text-sm font-semibold text-[var(--db)]">
                  {message.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[var(--lb-2)]/30 rounded-2xl p-4 hover:bg-[var(--lb-2)]/50 transition-all border border-[var(--lb-2)] sm:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-[var(--db)] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Calendar size={22} className="text-[var(--wh)]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[var(--db)]/60 font-medium mb-1">
                  {lan === "en" ? "Join Date" : "تاريخ الانضمام"}
                </p>
                <p className="text-sm font-semibold text-[var(--db)]">
                  {message.created_at.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* logout popup  */}
      <div className=" relative z-50 ">
        <div className="   absolute   z-[100]">
          {show2 && (
            <Popup
              show={show2}
              setShow={setShow2}
              id={message.id}
              email={message.email}
              fun={onDelete}
              lan={lan}
              text={
                lan === "en"
                  ? "Are you sure you want to delete this admin"
                  : "هل أنت متأكد أنك تريد حذف هذا المشرف؟"
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminIteam;
