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
      className="mt-8 space-y-4 rounded-lg border border-white/[0.1] bg-white/[0.02] p-6"
    >
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-chrome-mist">
        Write me
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
          className="w-full rounded border border-white/15 bg-chrome-void/80 px-4 py-2.5 text-sm text-chrome-steel placeholder:text-chrome-mist focus:border-white/30 focus:outline-none"
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
          className="w-full rounded border border-white/15 bg-chrome-void/80 px-4 py-2.5 text-sm text-chrome-steel placeholder:text-chrome-mist focus:border-white/30 focus:outline-none"
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
          className="w-full resize-y rounded border border-white/15 bg-chrome-void/80 px-4 py-2.5 text-sm text-chrome-steel placeholder:text-chrome-mist focus:border-white/30 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded bg-white py-2.5 text-sm font-semibold text-black transition hover:bg-chrome-ice sm:w-auto sm:px-8"
      >
        Compose email
      </button>
    </form>
  );
}
