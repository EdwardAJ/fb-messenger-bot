/* eslint-disable no-undef */
import { expect } from 'chai'
import {
  isDateValid,
  setCurrentYear,
  setNextYear,
  hasBirthdayPassed
} from '../utils/date.util'

describe('Date utils', () => {
  it('should return isDateValid to false', () => {
    const dateStr = '1999'
    const isValid = isDateValid(dateStr)
    expect(isValid).to.be.equal(false)
  })

  it('should return isDateValid to false', () => {
    const dateStr = '1999-13-12'
    const isValid = isDateValid(dateStr)
    expect(isValid).to.be.equal(true)
  })

  it('should change date to have current year', () => {
    const date = new Date('1999-13-12')
    const currentDate = setCurrentYear(date)
    expect(currentDate.getFullYear()).to.be.equal(2021)
  })

  it('should change date to have next year', () => {
    const date = new Date('1999-13-12')
    const nextYearDate = setNextYear(date)
    expect(nextYearDate.getFullYear()).to.be.equal(2022)
  })

  it('should return hasBirthdayPassed to true', () => {
    const birthDate = new Date('2021-01-09')
    const hasPassed = hasBirthdayPassed(birthDate)
    expect(hasPassed).to.be.equal(true)
  })

  it('should return hasBirthdayPassed to false', () => {
    const birthDate = new Date('2021-12-31')
    const hasPassed = hasBirthdayPassed(birthDate)
    expect(hasPassed).to.be.equal(false)
  })
})
