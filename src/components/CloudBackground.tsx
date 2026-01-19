export function CloudBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50" />
      
      {/* Animated clouds */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
        <div className="cloud cloud-4" />
        <div className="cloud cloud-5" />
      </div>

      <style>{`
        .cloud {
          position: absolute;
          background: linear-gradient(135deg, rgba(255, 223, 186, 0.4), rgba(255, 237, 213, 0.3));
          border-radius: 100px;
          filter: blur(40px);
          animation: float linear infinite;
        }

        .cloud-1 {
          width: 400px;
          height: 200px;
          top: 10%;
          left: -200px;
          animation-duration: 45s;
        }

        .cloud-2 {
          width: 300px;
          height: 150px;
          top: 30%;
          right: -150px;
          animation-duration: 55s;
          animation-delay: -10s;
        }

        .cloud-3 {
          width: 500px;
          height: 250px;
          top: 60%;
          left: -250px;
          animation-duration: 65s;
          animation-delay: -20s;
        }

        .cloud-4 {
          width: 350px;
          height: 175px;
          bottom: 10%;
          right: -175px;
          animation-duration: 50s;
          animation-delay: -30s;
        }

        .cloud-5 {
          width: 450px;
          height: 225px;
          top: 50%;
          left: 50%;
          animation-duration: 60s;
          animation-delay: -15s;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-50px, 50px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
