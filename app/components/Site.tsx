"use client";

import { useLang } from "./LangContext";
import LangSwitcher from "./LangSwitcher";

export default function Site() {
  const { t } = useLang();

  const services = [
    { title: t("s1_title"), desc: t("s1_desc"), tag: t("s1_tag") },
    { title: t("s2_title"), desc: t("s2_desc"), tag: t("s2_tag") },
    { title: t("s3_title"), desc: t("s3_desc"), tag: t("s3_tag") },
    { title: t("s4_title"), desc: t("s4_desc"), tag: t("s4_tag") },
    { title: t("s5_title"), desc: t("s5_desc"), tag: t("s5_tag") },
    { title: t("s6_title"), desc: t("s6_desc"), tag: t("s6_tag") },
  ];

  return (
    <main className="flex-1">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#">
            <img src="/logo-nav.svg" alt="TiMMA" className="h-10" />
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
            <a href="#about" className="hover:text-red-500 transition-colors">
              {t("nav_coach")}
            </a>
            <a
              href="#services"
              className="hover:text-red-500 transition-colors"
            >
              {t("nav_training")}
            </a>
            <a
              href="#contact"
              className="hover:text-red-500 transition-colors"
            >
              {t("nav_contact")}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <LangSwitcher />
            <a
              href="https://instagram.com/timmafightnyc"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm hover:text-red-500 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              @timmafightnyc
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-800 rounded-full blur-[96px]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="text-red-500 uppercase tracking-[0.3em] text-sm font-medium mb-6">
            {t("hero_location")}
          </p>
          <img
            src="/logo.svg"
            alt="TiMMA Fighting Academy"
            className="h-24 md:h-32 lg:h-40 mx-auto mb-6"
          />
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            {t("hero_disciplines")}
          </p>
          <p className="text-gray-500 mb-10">{t("hero_levels")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold uppercase tracking-wider transition-colors"
            >
              {t("hero_cta")}
            </a>
            <a
              href="#about"
              className="border border-gray-600 hover:border-red-600 text-white px-8 py-4 text-lg font-bold uppercase tracking-wider transition-colors"
            >
              {t("hero_cta2")}
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-red-900/20 bg-red-950/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-black text-red-600">
                6-1
              </p>
              <p className="text-gray-500 mt-2 uppercase text-sm tracking-wider">
                {t("stat_record")}
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-red-600">
                2x
              </p>
              <p className="text-gray-500 mt-2 uppercase text-sm tracking-wider">
                {t("stat_champion")}
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-red-600">
                UFC
              </p>
              <p className="text-gray-500 mt-2 uppercase text-sm tracking-wider">
                {t("stat_ufc")}
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-red-600">
                6+
              </p>
              <p className="text-gray-500 mt-2 uppercase text-sm tracking-wider">
                {t("stat_kids")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Coach */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
                {t("about_label")}
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                Timur
                <br />
                Gasanov
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t("about_bio1") }} />
                <p dangerouslySetInnerHTML={{ __html: t("about_bio2") }} />
                <p>{t("about_bio3")}</p>
              </div>
              <a
                href="https://instagram.com/gasanovtimma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 text-red-500 hover:text-red-400 font-medium transition-colors"
              >
                {t("about_ig")}
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-red-950/30 to-gray-900 rounded-lg border border-red-900/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-black text-red-600/20">TiMMA</p>
                  <p className="text-gray-600 mt-4 text-sm">
                    {t("about_photo")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-transparent via-red-950/5 to-transparent"
      >
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-red-500 uppercase tracking-[0.3em] text-sm font-medium mb-4 text-center">
            {t("services_label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">
            {t("services_title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-950 border border-red-900/20 p-8 hover:border-red-600/40 transition-colors group"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-950/50 px-3 py-1">
                  {service.tag}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
                {t("location_label")}
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                Brooklyn
                <br />
                <span className="text-gray-500">NYC</span>
              </h2>
              <p className="text-gray-400 mb-2">{t("location_address")}</p>
              <p className="text-gray-500 text-sm">{t("location_extra")}</p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border border-red-900/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.5!2d-73.98!3d40.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM0JzQ4LjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TiMMA Fighting Academy location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section
        id="contact"
        className="py-24 bg-red-950/10 border-t border-red-900/20"
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-red-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
            {t("contact_label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
            {t("contact_title")}
          </h2>
          <p className="text-gray-400 mb-10">{t("contact_desc")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/timmafightnyc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold uppercase tracking-wider transition-colors"
            >
              DM @timmafightnyc
            </a>
            <a
              href="https://instagram.com/gasanovtimma"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-red-600 text-white px-8 py-4 text-lg font-bold uppercase tracking-wider transition-colors"
            >
              @gasanovtimma
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 text-sm">
          <p className="font-bold text-lg mb-2">
            Ti<span className="text-red-600">MMA</span> Fighting Academy
          </p>
          <p>{t("footer_address")}</p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} TiMMA Fighting Academy
          </p>
        </div>
      </footer>
    </main>
  );
}
