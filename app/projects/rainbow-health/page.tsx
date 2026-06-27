export const metadata = {
  title: 'Rainbow Health',
  description: 'Rainbow Health Project',
}

export default function RainbowHealthPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Rainbow Health</h1>
      <iframe
        src="/projects/rainbow-health/rainbowHealth_patient.html"
        className="w-full border rounded-lg"
        style={{minHeight: 'calc(100vh - 200px' }}
        title="Rainbow Health Project"
        />
    </div>
  )
}