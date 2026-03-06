export default function DownloadBanner() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a
          href="https://play.google.com/store/apps/details?id=com.ilham.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-black font-semibold rounded-full hover:shadow-[0_0_24px_rgba(0,255,135,0.4)] transition-all text-lg"
        >
          Download Free on Google Play
        </a>
      </div>
    </section>
  );
}
