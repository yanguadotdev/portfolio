import { heroCopy as esHeroCopy, projectsList as esProjectsList } from './site-data'
import { heroCopy as enHeroCopy, projectsList as enProjectsList } from './site-data.en'

export function getHeroCopy(locale: string = 'es') {
  switch (locale) {
    case 'en':
      return enHeroCopy
    case 'es':
    default:
      return esHeroCopy
  }
}

export function getProjectsList(locale: string = 'es') {
  switch (locale) {
    case 'en':
      return enProjectsList
    case 'es':
    default:
      return esProjectsList
  }
}
