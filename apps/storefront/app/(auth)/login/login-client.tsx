'use client';

import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("./login-form"), { 
  ssr: false,
  loading: () => <div className="animate-pulse space-y-6">
    <div className="h-10 bg-on-surface/5 rounded" />
    <div className="h-10 bg-on-surface/5 rounded" />
    <div className="h-12 bg-primary/20 rounded-lg" />
  </div>
});

export default function LoginClient() {
  return <LoginForm />;
}
