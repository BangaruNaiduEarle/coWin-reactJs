// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inprogress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {coWinData: '', apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const responseData = await fetch(vaccinationDataApiUrl)

    if (responseData.ok === true) {
      const data = await responseData.json()

      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({
        coWinData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const {coWinData, apiStatus} = this.state

    return (
      <div className="main-bg-container">
        <div className="coWinHeadingContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <p className="coWinMainHeading">co-WIN</p>
        </div>
        <h1 className="coWinHeading">CoWin Vaccination in india</h1>

        {coWinData === '' ? (
          <div data-testid="loader" className="loading">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <div className="vaccineCoverage">
              <VaccinationCoverage
                vaccineByDate={coWinData.last7DaysVaccination}
              />
            </div>

            <div className="vaccineCoverage">
              <VaccinationByGender
                vaccineByGender={coWinData.vaccinationByGender}
              />
            </div>

            <div className="vaccineCoverage">
              <VaccinationByAge vaccineByAge={coWinData.vaccinationByAge} />
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CowinDashboard
