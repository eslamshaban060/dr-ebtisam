"use client";
import { useState } from "react";
import Avatar2 from "../../../../public/user/avatar-2.png";
import { articles } from "../../../components/ar-components/dashboard/components/data";


const ArticlePage = () => {
  const [myArticles, setMyArticles] = useState([...articles]);
  const latestArticle = myArticles.slice(-4);
  const goToArticle = (id) => {
    alert(id);
  };
  const [show, setShow] = useState(false);
  return (
    <>
      {/* blogger popup  */}
      {show && (
        <div
          className={`${show ? "transform-[scale(1)]" : "transform-[scale(0)]"}  fixed transition   inset-0 bg-black/40 z-50 backdrop-blur-[4px] flex justify-center items-center `}
        >
          <div className="box flex bg-[var(--wh)] lg:w-[clamp(300px,40dvw,100%)] w-[clamp(300px,80dvw,100%)] rounded-3xl h-80 p-10 gap-10 items-center justify-evenly flex-col ">
            <p className=" w-full lg:w-[100%] text-shadow-lg text-center text-[var(--nv)] font-medium lg:text-3xl text-2xl md:leading-12">
              اضغطي على الزر للانتقال إلى Blogger وكتابة مقالة جديدة.
            </p>
            <div className="btns flex gap-5 sm:gap-12">
                            <button
                className="rounded-xl lg:text-xl border-2 text-lg  leading-[24px] lg:py-5 lg:px-10 px-8 py-3 bg-[var(--nv)] text-[var(--wh)] "
                onClick={() => {
                  alert();
                  setShow(false);
                }}
              >
                انتقال
              </button>
              <button
                className="rounded-xl lg:text-xl border-2 text-lg  leading-[24px] lg:py-5 lg:px-10 px-8 py-3 bg-[var(--wh)] text-[var(--nv)] "
                onClick={() => setShow(false)}
              >
                إلغاء
              </button>

            </div>
          </div>
        </div>
      )}
      <section className="h-[75dvh] overflow-y-auto  bg-[var(--lb)] p-2">
        {/* welcome message  */}
        <div className=" article-message border w-full  min-h-[256px] md:py-0 py-4 rounded-2xl ">
          <div className="w-full h-full flex justify-center gap-5 items-center px-7   md:flex-row flex-col ">
            <div className="image relative flex justify-center items-center z-10  p-4 flex-1">
              <img
                src={Avatar2.src}
                alt="..."
                className="md:w-[225px] md:h-[245px] w-[200px] h-[190px] min-w-[190px] mx-auto  md:translate-y-[17px] xl:-translate-x-[40px] -translate-x-[10px] "
              />
              <div className="circle md:size-[210px] size-[150px]  bg-[var(--tb)] top-14   rounded-full absolute -z-1 "></div>
            </div>
            <div className="text sm:text-2xl text-lg text-[var(--wh)] font-semibold text-center flex-2 ">
              أهلاً دكتورة️، هذا هو
              <span className="text-[var(--tb)]"> قسم مقالاتك!</span> من هنا
              يمكنك متابعة وقراءة كل مقالاتك الطبية.
            </div>
          </div>
        </div>
        <div className="actions w-full mt-16 flex flex-col gap-10 justify-center items-center ">
          <p className=" line before:w-full before:h-[5px]  before:absolute before:-bottom-4 before:rounded-2xl   relative md:text-3xl text-lg leading-[24px] text-shadow-lg font-semibold  text-[var(--nv)]">
            اختاري ما ترغبين بالقيام به
          </p>
          <div className="buttons w-full p-5 grid gap-16 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            <button
              onClick={() => alert("sdjfi")}
              className="bg-img-1 sm:p-10 p-1 h-48 flex  active:scale-[0.9] transition rounded-2xl items-center justify-center font-semibold md:text-2xl text-lg text-shadow-lg text-[var(--wh)] "
            >
              اكتشفي جميع مقالاتك الطبية هنا
            </button>
            <button
              onClick={()=>setShow(true)}
              className="bg-img-2 sm:p-10 p-1 h-48 flex  active:scale-[0.9] transition rounded-2xl items-center justify-center font-semibold md:text-2xl text-lg text-shadow-lg text-[var(--wh)] "
            >
              من هنا يمكنكِ البدء بكتابة مقالتكِ الجديدة
            </button>
          </div>
        </div>
        <div className="latest  w-full mt-16 flex flex-col gap-10 justify-center items-center ">
          <p className=" line before:w-full before:h-[5px]  before:absolute before:-bottom-4 before:rounded-2xl   relative md:text-3xl text-lg leading-[24px] text-shadow-lg font-semibold  text-[var(--nv)]">
            اكتشفي مقالاتك الأخيرة
          </p>
          <div className="articles flex flex-col gap-10 p-5">
            {latestArticle.map((article) => (
              <div
                key={article.id}
                onClick={() => goToArticle(article.id)}
                className="article cursor-pointer transition hover:transform-[translateY(-5px)_scaleX(1.01)] hover:shadow-[var(--shadow-2)] shadow-[var(--shadow-1)] flex md:flex-row flex-col bg-[var(--wh)]/50 lg:h-[240px] overflow-hidden rounded-2xl "
              >
                <div className="image h-full lg:w-[240px] md:w-[260px] w-full  ">
                  <img
                    src={article.image.src}
                    alt=""
                    className="h-full w-full max-w-[280px] mx-auto"
                  />
                </div>
                <div className="text md:px-10 px-2 py-5 flex  justify-between flex-col flex-2">
                  <div className="all pt-5">
                    <h2 className="mb-5 font-medium md:text-xl sm:text-[16px] text-sm lg:leading-[24px]  ">
                      {article.title}
                    </h2>
                    <p className="text-[var(--bk)]/70 md:text-sm text-[12px]">
                      {article.description}
                    </p>
                  </div>
                  <div className="date text-left md:text-sm text-[12px] ">
                    {article.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ArticlePage;
