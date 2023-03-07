// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccineByDate} = props

  const vaccinationByDate = vaccineByDate.map(item => ({
    vaccineDate: item.vaccine_date,
    dose1: item.dose_1,
    dose2: item.dose_2,
  }))

  console.log(vaccinationByDate)

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <>
      <h1 className="coverageHeading">Vaccination Coverage</h1>
      <BarChart
        className="barChartCoverage"
        data={vaccinationByDate}
        margin={{top: 30}}
        width={1000}
        height={500}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />

        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',

            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />

        <Bar dataKey="dose1" name="Dose1" fill="#1f77b4" barSize="20%" />
        <Bar dataKey="dose2" name="Dose2" fill="#f54394" barSize="20%" />
      </BarChart>
    </>
  )
}

export default VaccinationCoverage
