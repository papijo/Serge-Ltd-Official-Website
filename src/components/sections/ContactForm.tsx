"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ENQUIRY_TYPES = [
  { value: "consulting", label: "Corporate Consulting" },
  { value: "digital", label: "Digital Transformation" },
  { value: "data", label: "Data & Strategy" },
  { value: "capital", label: "Capital & Governance" },
  { value: "government", label: "Government & Public Sector" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="p-8 border border-[#2da68a] text-[#2da68a] font-sans text-sm leading-relaxed"
        style={{ background: "rgba(45,166,138,0.05)" }}
        role="status"
        aria-live="polite"
      >
        Your enquiry has been received. A partner will respond within two business days.
      </div>
    );
  }

  return (
    <div>
      <h2
        className="m-0 mb-2 text-[#e2ecf0]"
        style={{
          fontFamily: "var(--f-display)",
          fontSize: "clamp(20px,2vw,28px)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
        }}
      >
        Request an Introduction
      </h2>
      <p className="mb-8 text-sm text-[#6b90a0]" style={{ maxWidth: "46ch" }}>
        Every inquiry is reviewed by a senior partner. We respond within two business days.
      </p>

      <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-4">
        <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <Input
            type="text"
            name="name"
            placeholder="Full name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-none border-[rgba(175,208,222,0.22)] bg-[rgba(175,208,222,0.06)] text-[#e2ecf0] placeholder:text-[#6b90a0] focus-visible:ring-0 focus-visible:border-[#f9ac43]"
          />
          <Input
            type="text"
            name="company"
            placeholder="Organisation"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="rounded-none border-[rgba(175,208,222,0.22)] bg-[rgba(175,208,222,0.06)] text-[#e2ecf0] placeholder:text-[#6b90a0] focus-visible:ring-0 focus-visible:border-[#f9ac43]"
          />
        </div>

        <Input
          type="email"
          name="email"
          placeholder="Work email address"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="rounded-none border-[rgba(175,208,222,0.22)] bg-[rgba(175,208,222,0.06)] text-[#e2ecf0] placeholder:text-[#6b90a0] focus-visible:ring-0 focus-visible:border-[#f9ac43]"
        />

        <Select
          value={form.subject}
          onValueChange={(val) => setForm({ ...form, subject: val ?? "" })}
        >
          <SelectTrigger className="rounded-none border-[rgba(175,208,222,0.22)] bg-[rgba(175,208,222,0.06)] text-[#e2ecf0] focus:ring-0 focus:border-[#f9ac43]">
            <SelectValue placeholder="Nature of enquiry" className="text-[#6b90a0]" />
          </SelectTrigger>
          <SelectContent className="rounded-none border-[rgba(175,208,222,0.22)] bg-[#0c3245] text-[#e2ecf0]">
            {ENQUIRY_TYPES.map((type) => (
              <SelectItem
                key={type.value}
                value={type.value}
                className="text-[#e2ecf0] focus:bg-[rgba(249,172,67,0.15)] focus:text-[#f9ac43]"
              >
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Textarea
          name="message"
          placeholder="Brief description of the decision or mandate you are facing"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="rounded-none border-[rgba(175,208,222,0.22)] bg-[rgba(175,208,222,0.06)] text-[#e2ecf0] placeholder:text-[#6b90a0] focus-visible:ring-0 focus-visible:border-[#f9ac43] resize-none"
        />

        <Button
          type="submit"
          className="self-start rounded-none bg-[#ff7b2e] hover:bg-[#f9ac43] text-white font-sans font-semibold uppercase px-8 py-3 h-auto transition-colors"
          style={{ fontSize: 12, letterSpacing: "0.18em" }}
        >
          Submit Enquiry →
        </Button>
      </form>
    </div>
  );
}
