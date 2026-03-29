'use client';

import dynamic from "next/dynamic";

const RegisterForm = dynamic(() => import("./register-form"), { 
  ssr: false,
  loading: () => <div className="animate-pulse space-y-6">
    <div className="h-10 bg-on-surface/5 rounded" />
    <div className="h-10 bg-on-surface/5 rounded" />
    <div className="grid grid-cols-2 gap-4">
      <div className="h-10 bg-on-surface/5 rounded" />
      <div className="h-10 bg-on-surface/5 rounded" />
    </div>
    <div className="h-12 bg-primary/20 rounded-lg" />
  </div>
});

export default function RegisterClient() {
  return <RegisterForm />;
}
