import { UserInterface } from '../interfaces/user.interface'

function getUserObject (id: string, state: string, name ?: string, birthDateStr ?: string): UserInterface {
  const userObject: UserInterface = {
    id, state
  }
  if (name) {
    userObject.name = name
  }
  if (birthDateStr) {
    userObject.birthDate = new Date(birthDateStr)
  }
  return userObject
}

export { getUserObject }
