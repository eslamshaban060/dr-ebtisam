"use client";

export default function BackgroundBlobs() {
  return (
    <>
      {/* خلفية متحركة ناعمة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <span className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-teal-200/30 rounded-full blur-3xl animate-float1" />
        <span className="absolute top-1/3 -left-32 w-[420px] h-[420px] bg-cyan-200/30 rounded-full blur-3xl animate-float2" />
      </div>

      <style jsx>{`
        @keyframes float1 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, 50px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes float2 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(50px, -40px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .animate-float1 {
          animation: float1 20s ease-in-out infinite;
        }

        .animate-float2 {
          animation: float2 24s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
