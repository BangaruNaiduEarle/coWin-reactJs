// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccineByGender} = props

  const vaccinationByGender = vaccineByGender.map(item => ({
    count: item.count,
    gender: item.gender,
  }))

  return (
    <>
      <h1 className="coverageHeading">Vaccination by gender </h1>

      <ResponsiveContainer
        width={1000}
        height={300}
        className="barChartCoverage"
      >
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByGender}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
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

export default VaccinationByGender
