import DataOrbit from "@/components/DataOrbit";
import CounterCard from "@/components/CounterCard";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const experience = [
  {
    period: "Sep 2024 — Present",
    role: "Applications Systems Data & Reporting Analyst",
    company: "Mount Rogers Community Services",
    location: "Wytheville, VA",
    points: [
      "Developed and maintained 20+ Power BI dashboards for clinical, operational, compliance, and financial KPIs.",
      "Integrated Snowflake with Power BI and used SQL to extract, transform, validate, and model enterprise healthcare data.",
      "Automated recurring reporting workflows, reducing manual reporting effort by approximately 40%.",
      "Identified and resolved 300+ data inconsistencies monthly to improve reporting reliability.",
      "Developed SQL and DAX logic for appointment attendance, no-show rates, bed utilization, productivity, PHQ-9, WHODAS, and clinical outcomes.",
      "Prepared validated datasets for CCBHC, SAMHSA, grants, audits, and state and federal compliance reporting.",
    ],
  },
  {
    period: "Jan 2023 — Sep 2024",
    role: "Business System Analyst",
    company: "SICL - America",
    location: "Lebanon, NH",
    points: [
      "Designed ETL pipelines to extract structured and unstructured data from Epic and Cerner EHR systems.",
      "Authored optimized SQL queries that reduced data extraction time by 15%.",
      "Processed 50,000+ HL7/XML files annually to support quality reporting and operational analytics.",
      "Improved data quality by 25% through validation rules, transformation logic, and standardized data structures.",
      "Collaborated with clinical and IT teams to refine workflows and improve stakeholder satisfaction.",
      "Developed documentation and data dictionaries to standardize reporting definitions across teams.",
    ],
  },
  {
    period: "Jan 2022 — May 2022",
    role: "Data Analyst",
    company: "Indiana University",
    location: "Indianapolis, IN",
    points: [
      "Analyzed research datasets containing 200,000+ records using SPSS, STATA, and R.",
      "Built predictive models using Decision Trees and Random Forest methods.",
      "Developed Power BI dashboards for faculty stakeholders to support data-driven research decisions.",
    ],
  },
  {
    period: "May 2019 — Dec 2020",
    role: "Data Analyst",
    company: "Government General Hospital",
    location: "India",
    points: [
      "Analyzed patient demographics, medication, and workflow data using advanced Excel functions.",
      "Built dashboards to track clinical metrics including length of stay, utilization, and census.",
      "Supported physicians and nursing staff with operational data insights.",
    ],
  },
];

const skillGroups = [
  {
    title: "Data & SQL",
    description:
      "Querying, transforming, validating, and modeling data for reporting and analytics.",
    items: [
      "SQL",
      "T-SQL",
      "PL/SQL",
      "Python",
      "Pandas",
      "NumPy",
      "R",
      "DuckDB",
      "REDCap",
    ],
  },
  {
    title: "Analytics & BI",
    description:
      "Building decision-support solutions across operational, clinical, and executive reporting.",
    items: [
      "Power BI",
      "DAX",
      "Tableau",
      "Excel",
      "Power Query",
      "Pivot Tables",
      "KPI Design",
      "Report Automation",
    ],
  },
  {
    title: "Data Engineering & Cloud",
    description:
      "Developing data pipelines, integrations, and scalable analytical workflows.",
    items: [
      "ETL Pipelines",
      "Snowflake",
      "REST APIs",
      "Data Modeling",
      "Git",
      "GitHub",
      "Cloud Deployment",
    ],
  },
  {
    title: "Healthcare Data",
    description:
      "Clinical systems, interoperability, healthcare analytics, compliance, and data quality.",
    items: [
      "Epic EHR",
      "Cerner EHR",
      "Credible EMR",
      "HL7/XML",
      "Clinical KPIs",
      "HIPAA",
      "CCBHC",
      "SAMHSA",
      "Data Governance",
      "Data Quality",
    ],
  },
  {
    title: "AI & Applications",
    description:
      "Applying AI and automation to analytical workflows and data applications.",
    items: [
      "AI-assisted Analytics",
      "Prompt Engineering",
      "Streamlit",
      "LLM Workflows",
      "Automation",
      "Natural Language → SQL",
    ],
  },
  {
    title: "Machine Learning",
    description:
      "Applied statistical and predictive methods for analytical and research use cases.",
    items: [
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "Gradient Boosting",
      "XGBoost",
    ],
  },
];

const projects = [
  {
    eyebrow: "DATA ENGINEERING · DATA QUALITY · HEALTHCARE",
    title: "HealthFlow",
    subtitle: "Healthcare Data Trust Platform",
    description:
      "A cloud-hosted healthcare data trust platform built with Python, SQL, Streamlit, DuckDB, and REST APIs. It integrates public healthcare datasets and provides automated validation, trust scoring, audit logs, lineage, pipeline monitoring, and test coverage.",
    tags: [
      "Python",
      "SQL",
      "Streamlit",
      "DuckDB",
      "REST APIs",
      "Data Quality",
    ],
    features: [
      "CMS hospital data integration",
      "ClinicalTrials.gov integration",
      "Automated validation",
      "Trust scoring",
      "Audit logs",
      "Data lineage",
      "Pipeline monitoring",
      "70+ automated tests",
    ],
    liveUrl:
      "https://healthflow-data-trust-platform-kwkfypzkt4qibaueasxrel.streamlit.app/",
    githubUrl:
      "https://github.com/rahulbyrapuneni/healthflow-data-trust-platform",
  },
  {
    eyebrow: "AI · SQL · HEALTHCARE",
    title: "CareQuery AI",
    subtitle: "Conversational Healthcare Analytics",
    description:
      "A local AI analytics application that converts natural-language questions into SQL, allowing users to explore structured healthcare data conversationally.",
    tags: ["Python", "SQLite", "Ollama", "Streamlit", "NL → SQL"],
    githubUrl: "https://github.com/rahulbyrapuneni/carequery-ai",
  },
  {
    eyebrow: "DATA INTEGRATION · ETL",
    title: "Healthcare Data Merger",
    subtitle: "File & API Data Integration Tool",
    description:
      "A browser-based data integration application designed to combine datasets from files and APIs into a single analytical workflow.",
    tags: ["Python", "Pandas", "APIs", "Streamlit", "ETL"],
    githubUrl: "https://github.com/rahulbyrapuneni/data-integration-tool",
  },
  {
    eyebrow: "POWER BI · HEALTHCARE ANALYTICS",
    title: "Behavioral Health Analytics",
    subtitle: "Clinical & Operational Intelligence",
    description:
      "Power BI and SQL solutions used to track appointment attendance, no-show rates, bed utilization, productivity, PHQ-9, WHODAS, clinical outcomes, compliance measures, and operational performance.",
    tags: ["Power BI", "SQL", "DAX", "Snowflake", "Healthcare"],
  },
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen pt-28">
        <div className="grid-overlay absolute inset-0 opacity-45" />

        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 px-5 py-16 md:px-8 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal>
            <p className="section-label text-xs font-semibold text-blue-300">
              HEALTHCARE DATA · ANALYTICS · ENGINEERING · AI
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[5.3rem]">
              Turning complex healthcare data into{" "}
              <span className="text-gradient">trusted decisions.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              I&apos;m Rahul Byrapuneni, a healthcare data and analytics
              professional building Power BI solutions, SQL-driven reporting,
              data pipelines, AI applications, and reliable analytical systems.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
              My experience spans behavioral health analytics, Epic and Cerner
              data integration, Snowflake, healthcare reporting, data quality,
              and AI-assisted analytics.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 font-semibold text-[#0b1220] transition hover:-translate-y-1"
              >
                View selected work
              </a>

              <a
                href="/Rahul_Byrapuneni_Resume.docx"
                className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:-translate-y-1 hover:border-white/35 hover:bg-white/5"
              >
                Resume ↗
              </a>

              <a
                href="https://github.com/rahulbyrapuneni"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:-translate-y-1 hover:border-white/35 hover:bg-white/5"
              >
                GitHub ↗
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-[var(--muted)]">
              <a
                href="https://www.linkedin.com/in/rahul-byrapuneni-1138782a9/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://healthflow-data-trust-platform-kwkfypzkt4qibaueasxrel.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                HealthFlow Live ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <DataOrbit />
          </Reveal>
        </div>
      </section>

      {/* IMPACT */}
      <section className="border-y border-white/10 bg-white/[.018]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-7 sm:grid-cols-2 md:px-8 lg:grid-cols-5">
          <CounterCard value="20+" label="Power BI dashboards" />
          <CounterCard value="40%" label="Manual reporting reduced" />
          <CounterCard value="300+" label="Data issues resolved monthly" />
          <CounterCard value="50K+" label="HL7/XML files annually" />
          <CounterCard value="25%" label="Data quality improvement" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal>
            <p className="section-label text-xs font-semibold text-blue-300">
              ABOUT
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Clinical context meets data engineering.
            </h2>
          </Reveal>

          <Reveal
            delay={0.08}
            className="space-y-6 text-lg leading-8 text-[var(--muted)]"
          >
            <p>
              My work combines healthcare domain knowledge with analytics,
              business intelligence, data engineering, and data quality.
              I&apos;ve worked with behavioral health data, hospital systems,
              clinical reporting, operational metrics, and regulatory
              reporting.
            </p>

            <p>
              I build SQL and DAX logic, Power BI dashboards, ETL pipelines,
              data models, validation workflows, and analytical applications
              that make complex information easier to trust and use.
            </p>

            <p>
              My clinical and health informatics background helps me understand
              not only how data moves through a system, but why the metrics,
              workflows, and outcomes behind that data matter.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-y border-white/10 bg-white/[.018] py-28"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="section-label text-xs font-semibold text-blue-300">
              SELECTED WORK
            </p>

            <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
                Products built around real healthcare and data problems.
              </h2>

              <p className="max-w-md text-[var(--muted)]">
                Projects spanning data quality, analytics, AI, healthcare
                reporting, and data integration.
              </p>
            </div>
          </Reveal>

          {/* FEATURED HEALTHFLOW */}
          <Reveal delay={0.08} className="mt-14">
            <article className="glass overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1">
              <div className="grid lg:grid-cols-[1.05fr_.95fr]">
                <div className="p-7 sm:p-10">
                  <p className="text-xs font-semibold tracking-[.16em] text-blue-300">
                    {projects[0].eyebrow}
                  </p>

                  <h3 className="mt-5 text-3xl font-semibold">
                    {projects[0].title}
                  </h3>

                  <p className="mt-2 text-sm text-blue-200">
                    {projects[0].subtitle}
                  </p>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                    {projects[0].description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {projects[0].features?.map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm">
                        <span className="text-blue-300">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {projects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[.035] px-3 py-2 text-xs text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href={projects[0].liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-5 py-3 font-semibold text-[#0b1220] transition hover:-translate-y-1"
                    >
                      Live demo ↗
                    </a>

                    <a
                      href={projects[0].githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 px-5 py-3 font-semibold transition hover:border-white/30 hover:bg-white/5"
                    >
                      Source code ↗
                    </a>
                  </div>
                </div>

                <div className="project-frame min-h-[430px] border-t border-white/10 p-6 lg:border-l lg:border-t-0">
                  <div className="h-full rounded-2xl border border-white/10 bg-[#f7f9fc] p-5 text-[#17324d] shadow-2xl">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <div>
                        <strong className="text-lg">HealthFlow</strong>
                        <p className="mt-1 text-xs text-slate-500">
                          Enterprise Data Trust
                        </p>
                      </div>

                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Healthy
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {[
                        ["Trust Score", "98.7%"],
                        ["Records", "25,420"],
                        ["Exceptions", "143"],
                        ["Critical", "7"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-xl border border-slate-200 bg-white p-4"
                        >
                          <p className="text-xs text-slate-500">{label}</p>
                          <p className="mt-1 text-xl font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-sm font-semibold">
                        Dataset quality monitoring
                      </p>

                      <div className="mt-4 space-y-4">
                        {[
                          ["CMS Hospitals", 99],
                          ["Clinical Trials", 97],
                          ["Claims", 98],
                          ["Appointments", 94],
                        ].map(([label, score]) => (
                          <div key={String(label)}>
                            <div className="mb-1 flex justify-between text-xs text-slate-500">
                              <span>{label}</span>
                              <span>{score}%</span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className="h-full rounded-full bg-[#17324d]"
                                style={{
                                  width: `${Number(score)}%`,
                                }}
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

          {/* OTHER PROJECTS */}
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {projects.slice(1).map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <article className="glass flex h-full flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                  <p className="text-xs font-semibold tracking-[.16em] text-blue-300">
                    {project.eyebrow}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-blue-200">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl ? (
                    <div className="mt-auto pt-8">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-blue-200 transition hover:text-white"
                      >
                        View project ↗
                      </a>
                    </div>
                  ) : (
                    <div className="mt-auto pt-8">
                      <span className="text-sm text-[var(--muted)]">
                        Professional work
                      </span>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="section-label text-xs font-semibold text-blue-300">
              EXPERIENCE
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Healthcare analytics experience backed by measurable impact.
            </h2>
          </Reveal>

          <div className="mt-14">
            {experience.map((item, index) => (
              <Reveal key={item.period} delay={index * 0.04}>
                <article className="grid gap-5 border-t border-white/10 py-10 md:grid-cols-[210px_1fr]">
                  <div>
                    <p className="text-sm font-semibold text-blue-200">
                      {item.period}
                    </p>

                    <p className="mt-2 text-xs text-[var(--muted)]">
                      {item.location}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">{item.role}</h3>

                    <p className="mt-1 text-[var(--muted)]">{item.company}</p>

                    <ul className="mt-6 grid gap-3 text-[var(--muted)] lg:grid-cols-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-7">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
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

      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-white/10 bg-white/[.018] py-28"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="section-label text-xs font-semibold text-blue-300">
              TECHNOLOGY
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Tools I use across analytics, engineering, healthcare, and AI.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.04}>
                <article className="glass h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold">{group.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <Reveal>
          <p className="section-label text-xs font-semibold text-blue-300">
            EDUCATION
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
            Healthcare expertise strengthened by informatics and analytics.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <article className="glass h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-1">
              <p className="text-sm text-blue-200">2021 — 2022</p>

              <h3 className="mt-3 text-2xl font-semibold">
                Master of Science in Informatics
              </h3>

              <p className="mt-2 text-[var(--muted)]">
                Indiana University–Purdue University Indianapolis
              </p>

              <p className="mt-5 leading-7 text-[var(--muted)]">
                Focused on health information systems, analytics, healthcare
                data standards, clinical information systems, statistics, and
                healthcare privacy.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="glass h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-1">
              <p className="text-sm text-blue-200">2014 — 2020</p>

              <h3 className="mt-3 text-2xl font-semibold">
                Doctor of Pharmacy
              </h3>

              <p className="mt-2 text-[var(--muted)]">
                Acharya Nagarjuna University, India
              </p>

              <p className="mt-5 leading-7 text-[var(--muted)]">
                Built a clinical foundation in pharmacology, medication
                management, patient care, and healthcare delivery.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 py-20 md:px-8">
        <Reveal className="glass mx-auto max-w-7xl overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="section-label text-xs font-semibold text-blue-300">
                LET&apos;S CONNECT
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
                Looking for someone who understands both healthcare and data?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                I&apos;m interested in opportunities across healthcare
                analytics, business intelligence, data engineering, and
                AI-enabled data products.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:flex-col">
              <a
                href="mailto:rahulbyrapuneni@gmail.com"
                className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[#0b1220] transition hover:-translate-y-1"
              >
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/rahul-byrapuneni-1138782a9/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/5"
              >
                LinkedIn ↗
              </a>

              <a
                href="/Rahul_Byrapuneni_Resume.docx"
                className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/5"
              >
                Resume ↗
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-10 text-sm text-[var(--muted)] sm:flex-row sm:justify-between md:px-8">
        <p>© 2026 Rahul Byrapuneni</p>
        <p>Healthcare Data · Analytics · Engineering · AI</p>
      </footer>
    </main>
  );
}