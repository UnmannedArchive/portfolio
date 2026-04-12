"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { contact } from "@/lib/contact";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `Message from ${name || "portfolio visitor"}`;
    const body = `From: ${name}\nReply-to: ${email}\n\n${message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card mt-8 space-y-4 rounded-lg p-6"
    >
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
        Write Me
      </p>
      <p className="text-xs text-white/30">
        Opens your email app with this note pre-filled — no backend required.
      </p>
      <div>
        <label htmlFor="cf-name" className="sr-only">
          Name
        </label>
        <input
          id="cf-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full rounded border border-white/10 bg-black/80 px-4 py-2.5 text-sm text-white/70 placeholder:text-white/25 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/10"
        />
      </div>
      <div>
        <label htmlFor="cf-email" className="sr-only">
          Your email
        </label>
        <input
          id="cf-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full rounded border border-white/10 bg-black/80 px-4 py-2.5 text-sm text-white/70 placeholder:text-white/25 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/10"
        />
      </div>
      <div>
        <label htmlFor="cf-msg" className="sr-only">
          Message
        </label>
        <textarea
          id="cf-msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What would you like to talk about?"
          rows={4}
          className="w-full resize-y rounded border border-white/10 bg-black/80 px-4 py-2.5 text-sm text-white/70 placeholder:text-white/25 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/10"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-sm border border-white/20 bg-white/[0.05] py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.1] hover:shadow-[0_0_30px_-6px_rgba(255,255,255,0.15)] sm:w-auto sm:px-8"
      >
        Compose Email
      </button>
    </form>
  );
}
