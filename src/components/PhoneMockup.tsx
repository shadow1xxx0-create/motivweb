"use client";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-notch" />
      <div className="relative w-full aspect-[9/19.5] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
