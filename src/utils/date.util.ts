function isDateValid (dateStr: string): boolean {
  return dateStr.match(/^\d{4}-\d{2}-\d{2}$/) !== null
}

function getMillisecondsInOneDay () {
  return 24 * 3600 * 1000
}

function getCurrentDate (): Date {
  return new Date()
}

function setCurrentYear (date: Date): Date {
  date.setFullYear(getCurrentDate().getFullYear())
  return date
}

function setNextYear (date: Date): Date {
  date.setFullYear(getCurrentDate().getFullYear() + 1)
  return date
}

function hasBirthdayPassed (birthDate: Date): boolean {
  return birthDate.getTime() < getCurrentDate().getTime()
}

function getDaysToNextBirthDate (nextBirthDate: Date): number {
  const timeDifferences = nextBirthDate.getTime() - getCurrentDate().getTime()
  return Math.ceil(timeDifferences / getMillisecondsInOneDay())
}

export {
  isDateValid,
  setCurrentYear,
  setNextYear,
  hasBirthdayPassed,
  getDaysToNextBirthDate
}
