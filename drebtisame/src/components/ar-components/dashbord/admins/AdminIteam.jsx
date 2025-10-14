import Popup from "../../dashboard/components/popup";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const AdminIteam = ({ message, onDelete, lan }) => {
  const [show2, setShow2] = useState(false);

  if (message.role === "owner") {
    return;
  }
  return (
    <div className="w-[100%] block mx-auto ">
      {/* <div className="flex w-[100%] flex-col md:flex-row cursor-pointer transition hover:transform-[translateY(-5px)_scaleX(1.01)] hover:shadow-[var(--shadow-2)] justify-between items-center min-h-[85px] py-6 px-5 bg-[var(--lb-2)]/45 rounded-xl">
        <span className="md:inline block md:text-[18px] text-[14px]">
          {message.name}
        </span>
        <span className="md:inline block md:text-[18px] text-[14px]">
          {message.email}
        </span>
        <span className="md:inline block md:text-[18px] text-[14px]">
          {message.phone}
        </span>
        <span className="md:inline block md:text-[18px] text-[14px]">
          {message.created_at.slice(0, 10)}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setShow2(true)}
            className="min-w-[105px] border flex-1 min-h-[50px] hover:shadow-[var(--shadow-1)] transition cursor-pointer hover:transform-[scale(1.1)] active:transform-[scale(0.95)] hover:bg-[var(--re)] hover:text-[var(--lg)] text-[var(--re)] md:text-[13px] font-semibold text-[13px] px-3 py-1 rounded-lg"
          >
            حذف
          </button>
        </div>
      </div> */}
      <div className="flex w-[80vw] py-8 sm:w-full flex-col md:flex-row justify-between items-center gap-3 md:gap-0 bg-[var(--lb-2)]/45 rounded-xl p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-2)]">
        {/* Icon for small screens */}
        <div className="flex items-center gap-2">
          <span className="md:hidden inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--db)] text-[var(--wh)] text-[38px]">
            <FaUser />
          </span>
          <span className="md:inline hidden font-semibold text-[18px] text-[var(--db)]">
            {message.name}
          </span>
        </div>

        {/* Info Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-5 text-center md:text-start w-full md:w-auto">
          <span className="block md:hidden font-semibold text-[18px] text-[var(--db)]">
            {message.name}
          </span>
          <span className="text-[15px] text-[var(--db)]">{message.email}</span>
          <span className="text-[15px] text-[var(--db)]">{message.phone}</span>
          <span className="text-[15px] text-[var(--db)]">
            {message.created_at.slice(0, 10)}
          </span>
        </div>

        {/* Delete button */}
        <button
          onClick={() => setShow2(true)}
          className="min-w-[105px] border border-[var(--re)] hover:bg-[var(--re)] hover:text-[var(--lg)] text-[var(--re)] md:text-[13px] font-semibold text-[13px] px-3 py-2 rounded-lg transition hover:shadow-[var(--shadow-1)] active:scale-95"
        >
          {lan === "en" ? "Delete" : " حذف"}
        </button>
      </div>

      {/* logout popup  */}
      <div className=" absolute ">
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
  );
};

export default AdminIteam;
