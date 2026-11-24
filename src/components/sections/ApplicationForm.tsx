"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faPaperPlane,
  faCheck,
  faUpload,
  faPen,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { openPositions } from "@/lib/constants/openPositions";
import { internshipBenefits } from "@/lib/constants/internshipPrograms";
import { submitForm } from "@/lib/constants/submitForm";
import { validateResume, uploadResume } from "@/lib/constants/resume";

type Answers = {
  name: string;
  email: string;
  phone: string;
  position: string;
  portfolio: string;
  linkedin: string;
  resume: string; // display name only; the file itself lives in resumeFile
  message: string;
};

type StepDef = {
  key: keyof Answers;
  label: string;
  type: "text" | "email" | "tel" | "url" | "select" | "file" | "textarea";
  prompt: (a: Answers) => string;
  hint?: string;
  placeholder?: string;
  required: boolean;
};

const emptyAnswers: Answers = {
  name: "",
  email: "",
  phone: "",
  position: "",
  portfolio: "",
  linkedin: "",
  resume: "",
  message: "",
};

const positionOptions = [
  ...openPositions.map((p) => p.title),
  "Internship",
  "Freelance Collaboration",
  "General Application",
];

const firstName = (a: Answers) => a.name.trim().split(" ")[0] || "there";

const steps: StepDef[] = [
  {
    key: "name",
    label: "Name",
    type: "text",
    prompt: () => "Hi there! I'm here to help with your application. What's your name?",
    placeholder: "Your full name",
    required: true,
  },
  {
    key: "email",
    label: "Email",
    type: "email",
    prompt: (a) => `Nice to meet you, ${firstName(a)}! What's the best email to reach you at?`,
    hint: "We'll only use this to follow up on your application.",
    placeholder: "you@email.com",
    required: true,
  },
  {
    key: "phone",
    label: "Phone",
    type: "tel",
    prompt: () => "And a phone number where we can reach you?",
    placeholder: "+91 00000 00000",
    required: true,
  },
  {
    key: "position",
    label: "Position",
    type: "select",
    prompt: () => "Which role are you most excited about?",
    required: true,
  },
  {
    key: "portfolio",
    label: "Portfolio",
    type: "url",
    prompt: () => "Got a portfolio you'd like to share?",
    hint: "Optional, but it helps us see your work firsthand.",
    placeholder: "https://",
    required: false,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    type: "url",
    prompt: () => "Any LinkedIn profile you'd like to add?",
    hint: "Optional",
    placeholder: "https://linkedin.com/in/...",
    required: false,
  },
  {
    key: "resume",
    label: "Resume",
    type: "file",
    prompt: () => "Want to attach your resume?",
    hint: "Optional. PDF, DOC or DOCX, up to 5MB.",
    required: false,
  },
  {
    key: "message",
    label: "Message",
    type: "textarea",
    prompt: (a) => `Last thing, ${firstName(a)}. Anything else you'd like us to know?`,
    hint: "This is your chance to stand out. Tell us why you'd be a great fit.",
    placeholder: "Share your story, skills, or what excites you about this role...",
    required: false,
  },
];

const trustPoints = internshipBenefits.slice(0, 3);

const inputClass =
  "w-full rounded-xl border border-[#262626] bg-[#1a1a1a] px-4 py-3 font-body text-sm text-white placeholder:text-[#4d4d4d] transition-colors focus:border-[#FF8A00] focus:outline-none";

export default function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [reviewing, setReviewing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("Sending...");
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const current = steps[step];
  const value = answers[current.key];

  // "Apply For This Role" buttons elsewhere on the page fire this event so
  // the role is already chosen when the applicant reaches the form.
  useEffect(() => {
    function onSelectRole(e: Event) {
      const role = (e as CustomEvent<string>).detail;
      if (!role) return;
      if (submitted) {
        setAnswers({ ...emptyAnswers, position: role });
        setResumeFile(null);
        setResumeUrl(null);
        setStep(0);
        setReviewing(false);
        setSubmitted(false);
      } else {
        setAnswers((prev) => ({ ...prev, position: role }));
      }
    }
    window.addEventListener("apply-for-role", onSelectRole);
    return () => window.removeEventListener("apply-for-role", onSelectRole);
  }, [submitted]);

  function updateAnswer(key: keyof Answers, val: string) {
    setAnswers((prev) => ({ ...prev, [key]: val }));
  }

  function goNext() {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setReviewing(true);
    }
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    if (current.required && !value) return;
    goNext();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    // Clear the input so choosing the same file again still fires onChange
    e.target.value = "";
    if (!file) return;

    const problem = validateResume(file);
    if (problem) {
      setFileError(problem);
      return;
    }
    setFileError(null);
    setResumeFile(file);
    setResumeUrl(null); // a new file means any earlier upload is stale
    updateAnswer("resume", file.name);
  }

  function removeFile() {
    setResumeFile(null);
    setResumeUrl(null);
    setFileError(null);
    updateAnswer("resume", "");
  }

  async function handleSubmit() {
    if (sending) return;
    setError(null);

    // Bots fill the hidden field. Pretend it worked and drop the submission.
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    setSending(true);

    // Upload the resume first, and only once even if the send is retried
    let url = resumeUrl;
    if (resumeFile && !url) {
      setStatus("Uploading resume...");
      const up = await uploadResume(resumeFile);
      if (!up.ok) {
        setSending(false);
        setError(up.message);
        return;
      }
      url = up.url;
      setResumeUrl(url);
    }

    setStatus("Sending...");
    const fd = new FormData();
    fd.append("name", answers.name);
    fd.append("email", answers.email);
    fd.append("phone", answers.phone);
    fd.append("position", answers.position);
    fd.append("portfolio", answers.portfolio);
    fd.append("linkedin", answers.linkedin);
    fd.append("message", answers.message);
    if (url) fd.append("resume_link", url);
    fd.append("_subject", `New application: ${answers.position || "General"}`);

    const result = await submitForm("application", fd);
    setSending(false);

    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.message);
    }
  }

  const answeredSteps = steps.slice(0, step);

  return (
    <Section bgSecondary id="apply" className="scroll-mt-20">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-0 h-[480px] w-[480px] rounded-full opacity-20 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,138,0,0.5) 0%, rgba(255,138,0,0) 70%)",
          }}
        />

        <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px]">
          <div className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-body text-sm font-semibold uppercase tracking-[0.15em] text-[#FF8A00]"
            >
              Join The Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
            >
              Apply{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #FF8A00, #FFB347)" }}
              >
                Now
              </span>
            </motion.h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
            {/* Left panel: progress and reassurance */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="flex items-center gap-3 rounded-2xl border border-[#262626] bg-[#151515] p-5 lg:flex-col lg:items-start lg:gap-4 lg:p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF8A00]/10 text-[#FF8A00]">
                  <FontAwesomeIcon icon={faRobot} className="h-4.5 w-4.5" />
                </span>
                <div className="lg:w-full">
                  <p className="font-heading text-sm font-semibold text-white">
                    Application Assistant
                  </p>
                  <p className="mt-0.5 font-body text-xs text-[#A3A3A3]">
                    A guided form, not real AI. Just one question at a time.
                  </p>
                </div>
              </div>

              <div className="mt-5 hidden gap-2 lg:flex">
                {steps.map((s, i) => (
                  <span
                    key={s.key}
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                      i < step || reviewing || submitted
                        ? "bg-[#FF8A00]"
                        : i === step
                        ? "bg-[#FF8A00]/50"
                        : "bg-[#262626]"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-2 hidden font-body text-xs text-[#A3A3A3] lg:block">
                {submitted
                  ? "Application sent"
                  : reviewing
                  ? "Ready to review"
                  : `Question ${step + 1} of ${steps.length}`}
              </p>

              <div className="mt-6 hidden rounded-2xl border border-[#262626] bg-[#151515] p-6 lg:block">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#FF8A00]">
                  Why Join Us
                </span>
                <ul className="mt-4 space-y-3.5">
                  {trustPoints.map((point) => (
                    <li key={point.label} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF8A00]/10 text-[#FF8A00]">
                        <FontAwesomeIcon icon={point.icon} className="h-3 w-3" />
                      </span>
                      <span className="font-body text-sm text-white">{point.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: chat-style form */}
            <div className="relative rounded-2xl border border-[#262626] bg-[#151515] p-6 md:p-8">
              {/* Honeypot, hidden from people and screen readers */}
              <div aria-hidden style={{ position: "absolute", left: "-9999px" }}>
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF8A00]/10 text-[#FF8A00]">
                    <FontAwesomeIcon icon={faCheck} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-white">
                    Thanks, {firstName(answers)}!
                  </h3>
                  <p className="mt-2 max-w-sm font-body text-sm leading-relaxed text-[#A3A3A3]">
                    Your application has been received. Our team will review it
                    and get in touch.
                  </p>
                </motion.div>
              ) : reviewing ? (
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Review Your Application
                  </h3>
                  <div className="mt-5 space-y-3">
                    {steps.map((s, i) => {
                      const v = answers[s.key];
                      if (!v) return null;
                      return (
                        <div
                          key={s.key}
                          className="flex items-start justify-between gap-4 border-b border-[#262626] pb-3"
                        >
                          <div className="min-w-0">
                            <p className="font-body text-xs uppercase tracking-wide text-[#A3A3A3]">
                              {s.label}
                            </p>
                            <p className="mt-1 break-words font-body text-sm text-white">{v}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setReviewing(false);
                              setStep(i);
                            }}
                            className="flex shrink-0 items-center gap-1.5 font-body text-xs font-medium text-[#FF8A00] hover:underline"
                          >
                            <FontAwesomeIcon icon={faPen} className="h-2.5 w-2.5" />
                            Edit
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={sending}
                    className="mt-7 flex items-center gap-2 rounded-full bg-[#FF8A00] px-6 py-3 font-body text-sm font-semibold text-[#0D0D0D] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {sending ? status : "Submit Application"}
                    <FontAwesomeIcon
                      icon={sending ? faSpinner : faPaperPlane}
                      className={`h-3.5 w-3.5 ${sending ? "animate-spin" : ""}`}
                    />
                  </button>

                  {error && (
                    <p role="alert" className="mt-4 font-body text-sm text-red-400">
                      {error}
                    </p>
                  )}
                </div>
              ) : (
                <>
                  <div className="mb-6 max-h-[260px] space-y-4 overflow-y-auto pr-1">
                    {answeredSteps.map((s) => (
                      <div key={s.key} className="space-y-2">
                        <div className="flex items-start gap-2.5">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF8A00]/10 text-[#FF8A00]">
                            <FontAwesomeIcon icon={faRobot} className="h-3 w-3" />
                          </span>
                          <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#1a1a1a] px-4 py-2.5 font-body text-sm text-[#A3A3A3]">
                            {s.prompt(answers)}
                          </p>
                        </div>
                        {answers[s.key] && (
                          <div className="flex justify-end">
                            <p className="max-w-[85%] break-words rounded-2xl rounded-tr-sm bg-[#FF8A00]/10 px-4 py-2.5 font-body text-sm text-white">
                              {answers[s.key]}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.key}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF8A00]/10 text-[#FF8A00]">
                          <FontAwesomeIcon icon={faRobot} className="h-3 w-3" />
                        </span>
                        <div className="max-w-[85%]">
                          <p className="rounded-2xl rounded-tl-sm bg-[#1a1a1a] px-4 py-2.5 font-body text-sm text-white">
                            {current.prompt(answers)}
                          </p>
                          {current.hint && (
                            <p className="mt-1.5 font-body text-xs italic text-[#A3A3A3]">
                              {current.hint}
                            </p>
                          )}
                        </div>
                      </div>

                      <form onSubmit={handleNext} className="ml-9 mt-4">
                        {current.type === "select" ? (
                          <select
                            required={current.required}
                            value={value}
                            onChange={(e) => updateAnswer(current.key, e.target.value)}
                            className={inputClass}
                          >
                            <option value="" disabled>
                              Select a role
                            </option>
                            {positionOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : current.type === "textarea" ? (
                          <textarea
                            rows={3}
                            value={value}
                            onChange={(e) => updateAnswer(current.key, e.target.value)}
                            placeholder={current.placeholder}
                            className={`${inputClass} resize-none`}
                          />
                        ) : current.type === "file" ? (
                          <>
                            <label
                              htmlFor="resume-upload"
                              className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-[#262626] bg-[#1a1a1a] px-4 py-3.5 transition-colors hover:border-[#FF8A00]/40"
                            >
                              <span className="min-w-0 truncate font-body text-sm text-[#A3A3A3]">
                                {value || "Choose a PDF, DOC or DOCX (max 5MB)"}
                              </span>
                              <FontAwesomeIcon
                                icon={faUpload}
                                className="h-4 w-4 shrink-0 text-[#FF8A00]"
                              />
                              <input
                                id="resume-upload"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                onChange={handleFileChange}
                              />
                            </label>
                            {value && (
                              <button
                                type="button"
                                onClick={removeFile}
                                className="mt-2 font-body text-xs text-[#A3A3A3] hover:text-white"
                              >
                                Remove file
                              </button>
                            )}
                            {fileError && (
                              <p role="alert" className="mt-2 font-body text-xs text-red-400">
                                {fileError}
                              </p>
                            )}
                          </>
                        ) : (
                          <input
                            required={current.required}
                            type={current.type}
                            value={value}
                            onChange={(e) => updateAnswer(current.key, e.target.value)}
                            placeholder={current.placeholder}
                            className={inputClass}
                          />
                        )}

                        <div className="mt-4 flex items-center gap-4">
                          <button
                            type="submit"
                            className="flex items-center gap-2 rounded-full bg-[#FF8A00] px-6 py-2.5 font-body text-sm font-semibold text-[#0D0D0D] transition-transform hover:scale-[1.02]"
                          >
                            {step === steps.length - 1 ? "Review" : "Continue"}
                            <FontAwesomeIcon icon={faPaperPlane} className="h-3 w-3" />
                          </button>
                          {!current.required && (
                            <button
                              type="button"
                              onClick={goNext}
                              className="font-body text-sm text-[#A3A3A3] hover:text-white"
                            >
                              Skip
                            </button>
                          )}
                        </div>
                      </form>
                    </motion.div>
                  </AnimatePresence>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}