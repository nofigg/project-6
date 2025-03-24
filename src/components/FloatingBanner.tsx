function FloatingBanner() {
  const emailSubject = "Nolan, let's get to work. 🚀";
  const emailLink = `mailto:nfigueroa06@gmail.com?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <div id="banner" className="mb-8">
      <a href={emailLink} className="block transition-opacity hover:opacity-80">
        <div className="flex items-center justify-between gap-x-6 rounded-xl bg-gray-800/95 px-6 py-2.5 backdrop-blur-sm sm:py-3 sm:pl-4 sm:pr-3.5">
          <div className="text-sm leading-6 text-white">
            <strong className="block font-semibold lg:inline">Now Open To Work</strong>
            <span className="mx-2 hidden lg:inline-block">
              <svg viewBox="0 0 2 2" aria-hidden="true" className="inline h-0.5 w-0.5 fill-current">
                <circle cx={1} cy={1} r={1} />
              </svg>
            </span>
            <div className="flex items-center gap-1 lg:inline">
              <span className="block lg:inline">Let's build something amazing together</span>
              <span aria-hidden="true" className="inline-block">
                &rarr;
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default FloatingBanner;
