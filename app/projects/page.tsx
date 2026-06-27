// Projects page for displaying personal projects
export const metadata = {
  title: 'Projects',
  description: 'My personal projects and work.',
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">🌈 Rainbow Health</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            A patient-side health platform...
          </p>
          <a href="/projects/rainbow-health" className="text-blue-500">
            View Project →
          </a>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold">🎵 和弦识别系统</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            利用音频特征提取与机器学习方法，开发的音乐和弦自动识别系统，支持真实音频分析与和弦可视化。
          </p>
          <a href="https://github.com/yourgithub/music-chord-detector" target="_blank" className="text-blue-500">
            GitHub 链接
          </a>
        </div>

        <div>
          <h2 className="text-xl font-semibold">📊 DataVis Coursework</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            使用 D3.js 和 pandas 可视化 COVID 数据、暴力事件数据，展示地理与时间分布趋势。
          </p>
        </div>
      </div>
    </section>
  )
}