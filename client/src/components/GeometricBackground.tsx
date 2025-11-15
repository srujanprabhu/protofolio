export function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <svg
        className="absolute w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/20"
            />
          </pattern>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        <circle cx="10%" cy="20%" r="120" fill="url(#grad1)" className="animate-pulse" style={{ animationDuration: "4s" }} />
        <circle cx="90%" cy="80%" r="80" fill="url(#grad1)" className="animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
        <circle cx="80%" cy="20%" r="60" fill="url(#grad1)" className="animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }} />
        
        <polygon
          points="5,5 25,15 15,35"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDuration: "7s" }}
        />
      </svg>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />
    </div>
  );
}
