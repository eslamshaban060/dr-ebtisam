import MessageItem from "./MessageItem";
import AdminIteam from "../admins/AdminIteam";

const MessageList = ({ messages, onDelete, page }) => (
  <div className="w-full mt-5 flex flex-col px-10 rounded-3xl pt-12 pb-5 gap-10 justify-center items-center bg-[var(--lg)]/40">
    {messages.map((msg) => {
      return (
        <>
          {page === "admin" ? (
            <AdminIteam key={msg.id} message={msg} onDelete={onDelete} />
          ) : (
            <MessageItem key={msg.id} message={msg} onDelete={onDelete} />
          )}
        </>
      );
    })}
  </div>
);

export default MessageList;
