import DataOrbit from "@/components/DataOrbit";
import CounterCard from "@/components/CounterCard";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const experience = [
  {
    period: "Sep 2024 — Present",
    role: "Applications Systems Data & Reporting Analyst",
    company: "Mount Rogers Community Services",
    points: [
      "Built 20+ Power BI dashboards for clinical, operational, and compliance KPIs.",
      "Automated recurring reports, reducing manual reporting effort by 40%.",
      "Resolved 300+ data inconsistencies monthly and improved reporting reliability.",
      "Designed relational data structures and prepared data for compliance reporting.",
    ],
  },
  {
    period: "Jan 2023 — Sep 2024",
    role: "Business System Analyst",
    company: "SICL America",
    points: [
      "Designed ETL workflows for structured and unstructured Epic and Cerner data.",
      "Optimized SQL queries, reducing extraction time by 15%.",
      "Processed more than 50,000 HL7 XML files annually.",
      "Improved data quality by 25% through validation and standardization.",
    ],
  },
  {
    period: "Jan 2022 — May 2022",
    role: "Data Analyst",
    company: "Indiana University",
    points: [
      "Analyzed research datasets containing more than 200,000 records.",
      "Used R, SPSS, and STATA for statistical and predictive analysis.",
      "Developed Power BI dashboards for faculty stakeholders.",
    ],
  },
  {
    period: "May 2019 — Dec 2020",
    role: "Data Analyst",
    company: "Government General Hospital",
    points: [
      "Analyzed patient, medication, and workflow data.",
      "Built dashboards for length of stay, utilization, and census metrics.",
      "Supported clinical teams with operational insights.",
    ],
  },
];

const skillGroups = [
  {
    title: "Data Engineering",
    items: ["SQL", "Python", "ETL", "APIs", "Microsoft Fabric", "DuckDB", "Spark"],
  },
  {
    title: "Analytics & BI",
    items: ["Power BI", "DAX", "Tableau", "Excel", "Data Modeling", "KPI Design"],
  },
  {
    title: "AI & Data Science",
    items: ["AI-assisted Analytics", "Automation", "Regression", "Random Forest", "XGBoost"],
  },
  {
    title: "Platforms & Domain",
    items: ["Epic", "Cerner", "Credible", "HL7/XML", "REDCap", "HIPAA", "Data Governance"],
  },
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <Navbar />

      <section className="relative min-h-screen pt-28">
        <div className="grid-overlay absolute inset-0 opacity-45" />
        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 px-5 py-16 md:px-8 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal>
            <p className="section-label text-xs font-semibold text-blue-300">
              DATA · AI · ANALYTICS · ENGINEERING
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[5.7rem]">
              I build data products that turn complexity into{" "}
              <span className="text-gradient">clarity.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              I&apos;m Rahul Byrapuneni, a data and AI professional focused on
              reliable pipelines, modern analytics, business intelligence, and
              intelligent workflows.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 font-semibold text-[#0b1220] transition hover:-translate-y-1"
              >
                Explore my work
              </a>
              <a
                href="/Rahul_Byrapuneni_Resume.docx"
                className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:border-white/35 hover:bg-white/5"
              >
                Download resume
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-[var(--muted)]">
              <a className="hover:text-white" href="https://github.com/rahulbyrapuneni" target="_blank">
                GitHub ↗
              </a>
              <a className="hover:text-white" href="https://www.linkedin.com/" target="_blank">
                LinkedIn ↗
              </a>
              <a
                className="hover:text-white"
                href="https://healthflow-data-trust-platform-kwkfypzkt4qibaueasxrel.streamlit.app/"
                target="_blank"
              >
                HealthFlow ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <DataOrbit />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.018]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-7 sm:grid-cols-2 md:px-8 lg:grid-cols-5">
          <CounterCard value="20+" label="Power BI dashboards" />
          <CounterCard value="40%" label="Reporting effort reduced" />
          <CounterCard value="300+" label="Issues resolved monthly" />
          <CounterCard value="50K+" label="HL7/XML files annually" />
          <CounterCard value="200K+" label="Research records analyzed" />
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal>
            <p className="section-label text-xs font-semibold text-blue-300">ABOUT</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Practical solutions. Trusted data. Better decisions.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="space-y-6 text-lg leading-8 text-[var(--muted)]">
            <p>
              I work across analytics, reporting, data engineering, and data quality.
              My experience includes building dashboards, integrating data from
              multiple systems, optimizing SQL, automating recurring workflows, and
              supporting operational, research, and compliance needs.
            </p>
            <p>
              I enjoy working where technical problem-solving meets business context:
              understanding what users need, improving the reliability of the data,
              and delivering a solution people can actually use.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="experience" className="border-y border-white/10 bg-white/[.018] py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="section-label text-xs font-semibold text-blue-300">EXPERIENCE</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Experience built across data, systems, and analytics.
            </h2>
          </Reveal>

          <div className="mt-14">
            {experience.map((item, index) => (
              <Reveal key={item.period} delay={index * 0.04}>
                <article className="grid gap-5 border-t border-white/10 py-9 md:grid-cols-[190px_1fr]">
                  <p className="text-sm font-semibold text-blue-200">{item.period}</p>
                  <div>
                    <h3 className="text-2xl font-semibold">{item.role}</h3>
                    <p className="mt-1 text-[var(--muted)]">{item.company}</p>
                    <ul className="mt-5 grid gap-2 text-[var(--muted)] lg:grid-cols-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <Reveal>
          <p className="section-label text-xs font-semibold text-blue-300">SKILLS</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
            A toolkit for building end-to-end data solutions.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <article className="glass h-full rounded-3xl p-7">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[.035] px-3 py-2 text-sm text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-white/[.018] py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="section-label text-xs font-semibold text-blue-300">FEATURED PROJECT</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              HealthFlow
            </h2>
            <p className="mt-3 text-lg text-[var(--muted)]">
              Healthcare Data Trust Platform
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-12">
            <article className="glass overflow-hidden rounded-[2rem]">
              <div className="grid lg:grid-cols-[1.05fr_.95fr]">
                <div className="p-7 sm:p-10">
                  <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
                    A cloud-hosted prototype that combines public and synthetic data
                    with automated validation, trust scoring, pipeline monitoring,
                    audit logs, data lineage, and interactive analytics.
                  </p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      "Automated quality validation",
                      "CMS and ClinicalTrials.gov APIs",
                      "Trust score monitoring",
                      "Pipeline execution history",
                      "Audit logs and data lineage",
                      "70+ automated tests",
                    ].map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm">
                        <span className="text-blue-300">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href="https://healthflow-data-trust-platform-kwkfypzkt4qibaueasxrel.streamlit.app/"
                      target="_blank"
                      className="rounded-full bg-white px-5 py-3 font-semibold text-[#0b1220]"
                    >
                      Live demo ↗
                    </a>
                    <a
                      href="https://github.com/rahulbyrapuneni/healthflow-data-trust-platform"
                      target="_blank"
                      className="rounded-full border border-white/15 px-5 py-3 font-semibold hover:bg-white/5"
                    >
                      View code ↗
                    </a>
                  </div>
                </div>

                <div className="project-frame min-h-[420px] border-t border-white/10 p-6 lg:border-l lg:border-t-0">
                  <div className="h-full rounded-2xl border border-white/10 bg-[#f7f9fc] p-4 text-[#17324d] shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <strong>HealthFlow</strong>
                      <span className="text-xs text-slate-500">Enterprise Data Trust</span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {[
                        ["Trust Score", "98.7%"],
                        ["Records", "25,420"],
                        ["Exceptions", "143"],
                        ["Critical", "7"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-lg border border-slate-200 p-3">
                          <p className="text-xs text-slate-500">{label}</p>
                          <p className="mt-1 text-xl font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-lg border border-slate-200 p-4">
                      <p className="text-sm font-semibold">Datasets monitored</p>
                      <div className="mt-3 space-y-3">
                        {[88, 72, 94, 61].map((width, index) => (
                          <div key={index}>
                            <div className="mb-1 flex justify-between text-xs text-slate-500">
                              <span>{["CMS Hospitals", "Clinical Trials", "Claims", "Appointments"][index]}</span>
                              <span>{[99, 97, 98, 94][index]}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-slate-100">
                              <div
                                className="h-2 rounded-full bg-[#17324d]"
                                style={{ width: `${width}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Reveal>
              <article className="glass rounded-3xl p-7">
                <p className="text-xs tracking-[.16em] text-blue-300">PROJECT</p>
                <h3 className="mt-3 text-2xl font-semibold">Enterprise Data Governance Platform</h3>
                <p className="mt-4 text-[var(--muted)]">
                  Designed SQL-driven data quality checks and a cloud-hosted dashboard
                  combining metadata, lineage, and enterprise quality metrics.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.06}>
              <article className="glass rounded-3xl p-7">
                <p className="text-xs tracking-[.16em] text-blue-300">PROJECT</p>
                <h3 className="mt-3 text-2xl font-semibold">Behavioral Health Grant Analytics</h3>
                <p className="mt-4 text-[var(--muted)]">
                  Consolidated financial, service, and operational data into a Power BI
                  solution supporting grant tracking and funding decisions.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <Reveal>
          <p className="section-label text-xs font-semibold text-blue-300">EDUCATION</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
            Education shaped by data and clinical science.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <article className="glass rounded-3xl p-7">
              <p className="text-sm text-blue-200">2021 — 2022</p>
              <h3 className="mt-3 text-2xl font-semibold">M.S. in Health Informatics</h3>
              <p className="mt-2 text-[var(--muted)]">
                Indiana University–Purdue University Indianapolis
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="glass rounded-3xl p-7">
              <p className="text-sm text-blue-200">2014 — 2020</p>
              <h3 className="mt-3 text-2xl font-semibold">Doctor of Pharmacy</h3>
              <p className="mt-2 text-[var(--muted)]">
                Acharya Nagarjuna University, India
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-10 md:px-8">
        <Reveal className="glass mx-auto max-w-7xl rounded-[2rem] p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="section-label text-xs font-semibold text-blue-300">LET&apos;S CONNECT</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em]">
                Interested in solving meaningful data problems.
              </h2>
              <p className="mt-4 max-w-2xl text-[var(--muted)]">
                I&apos;m open to opportunities across data analytics, data engineering,
                business intelligence, and AI-enabled data solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:rahulbyrapuneni@gmail.com"
                className="rounded-full bg-white px-6 py-3 font-semibold text-[#0b1220]"
              >
                Email me
              </a>
              <a
                href="https://github.com/rahulbyrapuneni"
                target="_blank"
                className="rounded-full border border-white/15 px-6 py-3 font-semibold hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-10 text-sm text-[var(--muted)] sm:flex-row sm:justify-between md:px-8">
        <p>© 2026 Rahul Byrapuneni</p>
        <p>Data · AI · Analytics · Engineering</p>
      </footer>
    </main>
  );
}
