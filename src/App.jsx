// Map each linked URL to its local screenshot
const screenshotMap = {
  'https://deepmind.google/models/genie/': '/screenshots/deepmind-genie.png',
  'https://ltx.studio/': '/screenshots/ltx-studio.png',
  'https://home.otoy.com/': '/screenshots/otoy.png',
  'https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release': '/screenshots/khronos.png',
  'https://conference.blender.org/2024/': '/screenshots/blender-conference.png',
  'https://docs.blender.org/api/current/info_overview.html': '/screenshots/blender-api.png',
};

function getDomain(url) {
  try { return new URL(url).hostname.replace('www.', ''); } catch { return url; }
}

function LinkCard({ href, label }) {
  const domain = getDomain(href);
  const screenshot = screenshotMap[href];
  return (
    <a
      href={href}
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-theme-blue-bright/20 bg-theme-blue-deep/10 transition-all hover:-translate-y-1 hover:border-theme-pink/60 hover:shadow-xl hover:shadow-theme-blue-bright/10"
    >
      <div className="aspect-video w-full overflow-hidden relative bg-black">
        <img
          src={screenshot}
          alt={`${label} screenshot`}
          className="w-full h-full object-cover object-top opacity-85 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-2 right-3 text-[10px] font-mono text-white/40">{domain}</div>
      </div>
      <div className="p-3 border-t border-theme-blue-bright/10 flex items-center justify-between">
        <span className="text-sm font-medium text-theme-blue-light truncate">{label}</span>
        <svg className="w-4 h-4 text-theme-blue-bright group-hover:text-theme-pink transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
      </div>
    </a>
  );
}

import { useState } from 'react';

export default function App() {
  const [activeTheme, setActiveTheme] = useState(null);

  const faq = [
    {
      q: "What was the main takeaway from the talk?",
      a: "AI is rapidly reshaping rendering, filmmaking, and interactive media, but storytelling, taste, and artist control remain the most important factors.",
      links: [
        { label: "Google DeepMind Genie", href: "https://deepmind.google/models/genie/" },
        { label: "LTX Studio", href: "https://ltx.studio/" }
      ]
    },
    {
      q: "What does 'the future of rendering is neural' mean?",
      a: "More of the rendering pipeline may be assisted or driven by machine learning rather than relying only on traditional rasterization or ray tracing. The talk positioned this as an evolution of rendering workflows, not the disappearance of artists.",
      links: [
        { label: "OTOY", href: "https://home.otoy.com/" },
        { label: "Genie", href: "https://deepmind.google/models/genie/" }
      ]
    },
    {
      q: "What are world models?",
      a: "World models are AI systems that generate interactive environments in real time. Unlike a fixed video clip, they aim to create explorable scenes that respond to movement and input.",
      links: [
        { label: "Genie world model overview", href: "https://deepmind.google/models/genie/" }
      ]
    },
    {
      q: "What are the current limitations of world models?",
      a: "Persistence, consistency, and memory are still major issues. Generated worlds can drift, hallucinate, or lose coherence over longer interactions.",
      links: [
        { label: "Genie limitations", href: "https://deepmind.google/models/genie/" }
      ]
    },
    {
      q: "Why do Gaussian splats matter?",
      a: "They are emerging as an important 3D representation for captured scenes, volumetric media, and fast rendering. They were discussed as part of the shift toward more spatial and point-based media workflows.",
      links: [
        { label: "Khronos glTF Gaussian Splatting", href: "https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release" }
      ]
    },
    {
      q: "How does this affect filmmakers?",
      a: "The biggest shift is moving from waiting for renders to directing and iterating live. AI may reduce production cost, increase experimentation, and make ambitious visual work more accessible to smaller creators.",
      links: [
        { label: "LTX Studio", href: "https://ltx.studio/" },
        { label: "OTOY", href: "https://home.otoy.com/" }
      ]
    },
    {
      q: "Will AI replace artists?",
      a: "The talk did not argue for total replacement. Instead, AI was framed as a powerful new layer in the pipeline that still depends on human judgment, narrative skill, taste, and creative direction.",
      links: []
    },
    {
      q: "What was Blender's role in the discussion?",
      a: "Blender was framed as a creator-first, community-driven tool ecosystem that values extensibility and artist control, especially as new AI-native workflows begin to emerge.",
      links: [
        { label: "Blender Conference", href: "https://conference.blender.org/2024/" },
        { label: "Blender Python API", href: "https://docs.blender.org/api/current/info_overview.html" }
      ]
    }
  ];

  const notes = [
    "AI has advanced dramatically over the last year, especially in rendering, video generation, and interactive media.",
    "Rendering is moving toward a more neural, real-time, and AI-assisted future.",
    "The talk suggested that agent-driven interfaces may eventually replace many traditional app-based workflows.",
    "AI-assisted rendering is not entirely new; machine learning has already been part of rendering pipelines for years.",
    "The question is increasingly about how much of the process is generated versus directed by artists.",
    "Real-time neural rendering was framed as a major step forward.",
    "Gaussian splats and other point-based 3D formats were presented as important for the future of volumetric and spatial media.",
    "Volumetric and interactive media may become more central than flat image-based presentation.",
    "World models were discussed as systems that can generate explorable environments in real time.",
    "Current world models still struggle with consistency, persistence, and memory.",
    "Even with those flaws, world models appear promising for simulation, games, previs, and interactive storytelling.",
    "The creative process is shifting from waiting on renders to directing and iterating while results are generated live.",
    "AI may lower the barrier for smaller studios and independent creators to produce ambitious visual work.",
    "Lower production cost could create space for more experimentation and creative risk-taking.",
    "The speakers emphasized that better tools do not automatically make better films.",
    "Story, taste, authorship, and human creative judgment remain the center of the process.",
    "AI can also improve localization, language adaptation, and distribution workflows.",
    "The future likely includes closer integration between movies, games, simulation, and interactive experiences.",
    "The strongest recurring theme was that technology should remain in service of story."
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-neutral-100 font-sans selection:bg-theme-pink/30">
      <header className="border-b border-theme-blue-deep/30 bg-gradient-to-b from-theme-blue-deep/10 to-[#020817] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(12,112,242,0.25),rgba(255,255,255,0))]"></div>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 relative z-10">
          <div className="inline-flex rounded-full border border-theme-blue-bright/30 bg-theme-blue-bright/10 px-4 py-1 text-sm text-theme-blue-light backdrop-blur-md">
            Conference recap
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-theme-blue-light via-theme-pink to-theme-orange" style={{ fontFamily: '"Offside", sans-serif' }}>
            The Future of Production
          </h1>
          <h2 className="mt-3 text-xl sm:text-2xl font-medium">
            <a href="https://rendercon2026.com/" target="_blank" rel="noreferrer" className="text-theme-blue-light underline decoration-theme-pink/40 underline-offset-4 transition hover:text-white hover:decoration-theme-pink">
              Notes from Rendercon 2026
            </a>
          </h2>
          <p className="mt-4 text-xl font-medium text-theme-blue-light flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-orange"></span> W. Hollywood, August 16th
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-theme-blue-light/80 sm:text-lg">
            A one-page summary of major ideas from the discussion around AI rendering,
            world models, Blender, Gaussian splats, filmmaking workflows, and the
            future of artist-directed creative tools.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <section className="space-y-8">
          <div className="rounded-3xl border border-theme-blue-deep/30 bg-theme-blue-deep/5 p-8 shadow-xl shadow-theme-blue-bright/5 backdrop-blur-sm transition-all hover:border-theme-blue-bright/40">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
              <span className="bg-theme-blue-deep/30 p-2 rounded-lg text-theme-pink">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
              </span>
              Key notes
            </h2>
            <ul className="mt-6 space-y-4 text-theme-blue-light">
              {notes
                .filter(note => !activeTheme || note.toLowerCase().includes(activeTheme.toLowerCase()))
                .map((note, index) => (
                <li key={index} className="flex gap-4 leading-relaxed group">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-theme-orange transition-colors group-hover:bg-theme-pink" />
                  <span className="text-theme-blue-light/80 group-hover:text-theme-blue-light transition-colors">{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-theme-blue-deep/30 bg-theme-blue-deep/5 p-8 shadow-xl shadow-theme-blue-bright/5 backdrop-blur-sm transition-all hover:border-theme-blue-bright/40">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
              <span className="bg-theme-blue-deep/30 p-2 rounded-lg text-theme-pink">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              </span>
              FAQ
            </h2>
            <div className="mt-8 space-y-6">
              {faq
                .filter(item => !activeTheme || item.q.toLowerCase().includes(activeTheme.toLowerCase()) || item.a.toLowerCase().includes(activeTheme.toLowerCase()))
                .map((item, index) => (
                <div key={index} className="rounded-2xl border border-theme-blue-deep/30 bg-black/30 p-6 transition-all hover:bg-theme-blue-deep/20 hover:border-theme-pink/30">
                  <h3 className="text-xl font-semibold text-theme-blue-light">{item.q}</h3>
                  <p className="mt-3 leading-relaxed text-theme-blue-light/70">{item.a}</p>
                  {item.links.length > 0 && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.links.map((link) => (
                        <LinkCard key={link.href} href={link.href} label={link.label} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-8 sticky top-8 self-start">
          <div className="rounded-3xl border border-theme-blue-deep/30 bg-theme-blue-deep/5 p-8 shadow-xl shadow-theme-blue-bright/5 backdrop-blur-sm transition-all hover:border-theme-blue-bright/40">
            <h2 className="text-xl font-bold mb-6 text-white">Core themes</h2>
            <div className="flex flex-wrap gap-2.5">
              {[
                "AI rendering",
                "world models",
                "real-time workflows",
                "Gaussian splats",
                "Blender",
                "OTOY",
                "LTX",
                "filmmaking",
                "storytelling",
                "artist control"
              ].map((tag) => {
                const isActive = activeTheme === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setActiveTheme(activeTheme === tag ? null : tag)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all cursor-pointer ${
                      isActive 
                        ? 'border-theme-pink bg-theme-pink text-white shadow-lg shadow-theme-pink/20'
                        : 'border-theme-blue-deep/70 bg-theme-blue-deep/20 text-theme-blue-light hover:bg-theme-blue-deep/40'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-theme-blue-deep/30 bg-theme-blue-deep/5 p-8 shadow-xl shadow-theme-blue-bright/5 backdrop-blur-sm transition-all hover:border-theme-blue-bright/40">
            <h2 className="text-xl font-bold mb-4 text-white">Event framing</h2>
            <p className="leading-relaxed text-theme-blue-light/80">
              These notes organize a raw, auto-transcribed conference discussion into a
              more usable format. The emphasis throughout is on how fast the landscape is
              changing, while also holding onto a clear principle: <strong className="text-theme-blue-light font-bold">technology should stay
                in service of story and creative intent.</strong>
            </p>
          </div>

          <div className="rounded-3xl border border-theme-blue-deep/30 bg-theme-blue-deep/5 p-8 shadow-xl shadow-theme-blue-bright/5 backdrop-blur-sm transition-all hover:border-theme-blue-bright/40">
            <h2 className="text-xl font-bold mb-6 text-white">Reference links</h2>
            <ul className="space-y-4">
              {[
                ["Google DeepMind Genie", "https://deepmind.google/models/genie/"],
                ["LTX Studio", "https://ltx.studio/"],
                ["OTOY", "https://home.otoy.com/"],
                ["Khronos Gaussian Splatting", "https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release"],
                ["Blender Conference", "https://conference.blender.org/2024/"],
                ["Blender Python API", "https://docs.blender.org/api/current/info_overview.html"]
              ].map(([label, href]) => (
                <li key={label}>
                  <LinkCard href={href} label={label} />
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
