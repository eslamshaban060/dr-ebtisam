const MessageItem = ({ message, onDelete }) => (
  <div className="flex w-full cursor-pointer transition hover:transform-[translateY(-5px)_scaleX(1.01)] hover:shadow-[var(--shadow-2)] justify-between items-center min-h-[85px] py-6 px-5 bg-[var(--lb-2)]/45 rounded-xl">
    <span className="md:text-[18px] text-[14px]">{message.name}</span>
    <span className="md:text-[18px] text-[14px]">{message.date}</span>
    <span className="md:text-[18px] text-[14px]">{message.message}</span>
    <div className="flex gap-2">
      <button className="min-w-[125px] cursor-pointer transition hover:shadow-[var(--shadow-1)] hover:transform-[scale(1.1)] active:transform-[scale(0.95)] bg-[var(--gr)] min-h-[30px] flex-1 md:text-[13px] font-semibold text-[13px] text-white px-3 py-1 rounded-lg">
        عرض التفاصيل
      </button>
      <button
        onClick={() => onDelete(message.id)}
        className="min-w-[105px] border flex-1 min-h-[50px] hover:shadow-[var(--shadow-1)] transition cursor-pointer hover:transform-[scale(1.1)] active:transform-[scale(0.95)] hover:bg-[var(--re)] hover:text-[var(--lg)] text-[var(--re)] md:text-[13px] font-semibold text-[13px] px-3 py-1 rounded-lg"
      >
        حذف
      </button>
    </div>
  </div>
);

export default MessageItem;
