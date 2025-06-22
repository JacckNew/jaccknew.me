function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/JacckNew"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/dljk20"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">x</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:jack-fu0815@outlook.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">email</p>
          </a>
        </li>
      </ul>
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Blogroll</h3>
        <a
          className="flex items-center text-sm text-neutral-600 dark:text-neutral-300 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://yileics.github.io/portfolio/"
        >
          <ArrowIcon />
          <div className="ml-2">
            <p className="font-medium">Yilei's Portfolio</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Words freer than the wind</p>
          </div>
        </a>
      </div>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} JacckNew. <a href="/LICENSE">MIT License</a>.
        <br />
      </p>
    </footer>
  )
}
