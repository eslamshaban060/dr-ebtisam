import MessageItem from "./MessageItem";
import AdminIteam from "../admins/AdminIteam";
import NotifiyItem from "../notification/NotifiyItem";

const MessageList = ({ messages, onDelete, page, lan }) => (
  <div className="w-full mt-5  grid sm:grid-cols-2  md:flex md:flex-col overflow-x-hiddenflex-col px-1 md:px-5 rounded-3xl pt-8 pb-5 gap-10 justify-center items-center bg-[var(--lg)]/40">
    {messages.map((msg) => {
      return (
        <>
          {page === "admin" ? (
            <AdminIteam
              key={msg.id}
              message={msg}
              lan={lan}
              onDelete={onDelete}
            />
          ) : page === "massages" ? (
            <MessageItem
              key={msg.id}
              message={msg}
              lan={lan}
              onDelete={onDelete}
            />
          ) : (
            <NotifiyItem
              key={msg.id}
              notifiy={msg}
              lan={lan}
              onDelete={onDelete}
            />
          )}
        </>
      );
    })}
  </div>
);

export default MessageList;
