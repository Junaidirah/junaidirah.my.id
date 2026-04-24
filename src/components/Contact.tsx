import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Tawaran Pekerjaan");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!name || !message) {
      alert("System Error: USER_NAME and MESSAGE_BODY are required.");
      return;
    }

    const subject = `[${category}] Pesan dari ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nKategori: ${category}\n\nPesan:\n${message}`;

    window.location.href = `mailto:junaidirahmat02@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="py-xl mt-xl" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Context & Metadata */}
        <div className="lg:col-span-4 space-y-12">
          <section>
            <h2 className="font-h1 text-h1 text-primary mb-4">Contact Me</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              I would love to hear from you. Whether you have a project idea, a
              potential collaboration, or just want to say hello, feel free to
              reach out.
            </p>
          </section>

          <section className="space-y-6">
            <h3 className="font-label-caps text-label-caps text-outline uppercase">
              DIRECT_CHANNELS
            </h3>
            <div className="space-y-4">
              <a
                className="flex items-center gap-4 p-4 border border-outline-variant bg-surface hover:bg-surface-container transition-colors group"
                href="mailto:root@phys-backend.io"
              >
                <span className="material-symbols-outlined text-primary">
                  alternate_email
                </span>
                <div>
                  <p className="font-label-caps text-[10px] text-outline uppercase">
                    SMTP
                  </p>
                  <p className="font-code text-code text-on-surface">
                    root@phys-backend.io
                  </p>
                </div>
              </a>
              <a
                className="flex items-center gap-4 p-4 border border-outline-variant bg-surface hover:bg-surface-container transition-colors group"
                href="#"
              >
                <span className="material-symbols-outlined text-primary">
                  link
                </span>
                <div>
                  <p className="font-label-caps text-[10px] text-outline uppercase">
                    LINKEDIN
                  </p>
                  <p className="font-code text-code text-on-surface">
                    /in/physics-arch
                  </p>
                </div>
              </a>
              <a
                className="flex items-center gap-4 p-4 border border-outline-variant bg-surface hover:bg-surface-container transition-colors group"
                href="#"
              >
                <span className="material-symbols-outlined text-primary">
                  code
                </span>
                <div>
                  <p className="font-label-caps text-[10px] text-outline uppercase">
                    GITHUB
                  </p>
                  <p className="font-code text-code text-on-surface">
                    github.com/phys-dev
                  </p>
                </div>
              </a>
            </div>
          </section>

          <div className="p-6 bg-surface-container-low border-l-4 border-primary">
            <p className="font-code text-sm text-on-surface-variant italic">
              "Mathematics is the language in which God has written the
              universe. Documentation is the language in which we write our
              systems."
            </p>
          </div>
        </div>

        {/* Right Column: Terminal UI */}
        <div className="lg:col-span-8">
          <div className="shadow-2xl rounded-lg overflow-hidden border border-outline-variant bg-[#0f172a] text-slate-300">
            {/* Terminal Header */}
            <div className="bg-[#020617] px-4 py-3 flex items-center justify-between border-b border-outline-variant">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-code text-xs text-slate-500">
                bash — contact_module.sh — 80x24
              </div>
              <div className="w-12"></div>
            </div>

            {/* Terminal Body */}
            <div className="p-8 font-code text-code min-h-[500px] flex flex-col gap-6 relative">
              <div className="space-y-1">
                <p className="text-slate-400">
                  Last login: {new Date().toDateString()} on ttys001
                </p>
                <p className="text-[#38bdf8]">
                  Starting secure transmission protocol...
                </p>
                <p className="text-[#38bdf8]">
                  Target: PHYS_BACKEND_PORTFOLIO_INBOX
                </p>
              </div>

              <div className="space-y-4 flex-1">
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <span className="text-[#60a5fa]">$</span>
                    <span className="text-slate-400">USER_NAME:</span>
                  </label>
                  <input
                    autoComplete="off"
                    className="bg-transparent border-none outline-none ring-0 p-0 text-white w-full font-code focus:ring-0 focus:outline-none"
                    placeholder="Enter your name..."
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <span className="text-[#60a5fa]">$</span>
                    <span className="text-slate-400">EMAIL_ADDR:</span>
                  </label>
                  <input
                    autoComplete="off"
                    className="bg-transparent border-none outline-none ring-0 p-0 text-white w-full font-code focus:ring-0 focus:outline-none"
                    placeholder="user@domain.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <span className="text-[#60a5fa]">$</span>
                    <span className="text-slate-400">CATEGORY:</span>
                  </label>
                  <select
                    className="bg-transparent border-none outline-none ring-0 p-0 text-[#38bdf8] w-full font-code focus:ring-0 focus:outline-none appearance-none cursor-pointer"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option
                      className="bg-[#0f172a] text-white"
                      value="Tawaran Pekerjaan"
                    >
                      Tawaran Pekerjaan
                    </option>
                    <option
                      className="bg-[#0f172a] text-white"
                      value="Kolaborasi"
                    >
                      Kolaborasi
                    </option>
                    <option className="bg-[#0f172a] text-white" value="Umum">
                      Umum
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <span className="text-[#60a5fa]">$</span>
                    <span className="text-slate-400">MESSAGE_BODY:</span>
                  </label>
                  <textarea
                    className="bg-transparent border-none outline-none ring-0 p-0 text-white w-full font-code resize-none focus:ring-0 focus:outline-none"
                    placeholder="Transmission payload..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[#60a5fa]">$</span>
                  <span className="text-slate-400">STATUS:</span>
                  <span className="text-[#38bdf8] uppercase">
                    Awaiting Input
                  </span>
                  <span className="w-2 h-[1em] bg-on-primary-container ml-1 animate-pulse"></span>
                </div>
                <button
                  onClick={handleSend}
                  className="bg-[#60a5fa] text-[#0f172a] px-6 py-2 font-bold hover:bg-white transition-colors"
                >
                  EXECUTE_SEND
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-3 gap-8 w-full">
              <div className="border border-outline-variant p-4 text-center bg-surface transition-colors">
                <p className="font-label-caps text-outline text-[10px]">
                  UPTIME
                </p>
                <p className="font-code text-primary">99.98%</p>
              </div>
              <div className="border border-outline-variant p-4 text-center bg-surface transition-colors">
                <p className="font-label-caps text-outline text-[10px]">
                  LATENCY
                </p>
                <p className="font-code text-primary">24ms</p>
              </div>
              <div className="border border-outline-variant p-4 text-center bg-surface transition-colors">
                <p className="font-label-caps text-outline text-[10px]">
                  ENCRYPTION
                </p>
                <p className="font-code text-primary">AES-256</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
