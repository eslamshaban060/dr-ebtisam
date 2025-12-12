// import React from "react";
// import Header from "../../../../../src/components/ar-components/user/Header";
// import UsersData from "../../../../../src/components/en-components/login/usersData";
// const Login = () => {
//   return (
//     <div className=" w-[100vw] h-[110vh] md:h-[100vh] bg-[url('/user/userbg.jpg')] bg-cover bg-center">
//       <div className="absolute inset-0 h-[110vh] md:h-[100vh] bg-[#08294a]/10 backdrop-blur-sm"></div>
//       <div className=" relative  flex items-center justify-center z-10 w-full h-[100%]">
//         <div className=" max-w-[650px]  flex flex-col gap-5 w-[90%] h-auto min-h-[430px] bg-transparent">
//           {/* top part in the login page  */}
//           <div>
//             <Header
//               describtion="Please log in to access your account"
//               title="Welcome back, Doctor!"
//             />
//           </div>
//           <div>
//             <UsersData />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import Header from "../../../../../src/components/ar-components/user/Header";
import UsersData from "../../../../../src/components/en-components/login/usersData";

export default function Page() {
  return (
    <div className=" w-[100vw] h-[110vh] md:h-[100vh] bg-[url('/user/userbg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 h-[110vh] md:h-[100vh] bg-[#08294a]/10 backdrop-blur-sm"></div>
      <div className=" relative flex items-center justify-center z-10 w-full h-[100%]">
        <div className=" max-w-[650px] flex flex-col gap-5 w-[90%] h-auto min-h-[430px] bg-transparent">
          <div>
            <Header
              describtion="Please log in to access your account"
              title="Welcome back, Doctor!"
            />
          </div>
          <div>
            <UsersData />
          </div>
        </div>
      </div>
    </div>
  );
}
