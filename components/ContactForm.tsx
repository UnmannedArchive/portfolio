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
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent/70">
        Write Me
      </p>
      <p className="text-xs text-chrome-mist">
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
          className="w-full rounded border border-white/10 bg-chrome-void/80 px-4 py-2.5 text-sm text-chrome-steel placeholder:text-chrome-mist/50 focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20"
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
          className="w-full rounded border border-white/10 bg-chrome-void/80 px-4 py-2.5 text-sm text-chrome-steel placeholder:text-chrome-mist/50 focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20"
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
          className="w-full resize-y rounded border border-white/10 bg-chrome-void/80 px-4 py-2.5 text-sm text-chrome-steel placeholder:text-chrome-mist/50 focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-sm bg-accent py-2.5 text-sm font-semibold text-white transition hover:bg-accent/90 hover:shadow-[0_0_30px_-6px_rgba(59,130,246,0.5)] sm:w-auto sm:px-8"
      >
        Compose Email
      </button>
    </form>
  );
}
