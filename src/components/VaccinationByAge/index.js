// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccineByAge} = props

  return (
    <>
      <h1 className="coverageHeading">Vaccination by age </h1>

      <ResponsiveContainer
        className="barChartCoverage"
        width={1000}
        height={300}
      >
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccineByAge}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#fecba6" />
            <Cell name="44-60" fill="#b3d23f" />
            <Cell name="Above 60" fill="#a44c9e" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default VaccinationByAge
