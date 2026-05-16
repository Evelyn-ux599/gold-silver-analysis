interface GradientOrbProps {
  size: number;
  color: string;
  className?: string;
  opacity?: number;
}

export default function GradientOrb({ size, color, className = "", opacity = 0.4 }: GradientOrbProps) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} ${opacity * 100}%, transparent 70%)`,
      }}
    />
  );
}
