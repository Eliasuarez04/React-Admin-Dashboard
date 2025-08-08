import { kpis, barData, pieData } from "./data/dashboardData"
import KpiCard from "./components/KpiCard"
import BarChartSection from "./components/BarChartSection"
import PieChartSection from "./components/PieChartSection"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Dashboard Admin</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {kpis.map((kpi, i) => (
          <KpiCard key={i} title={kpi.title} value={kpi.value} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <BarChartSection data={barData} />
        <PieChartSection data={pieData} />
      </div>
    </div>
  )
}

export default App

