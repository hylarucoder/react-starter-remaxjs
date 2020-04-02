import camelcaseKeys from 'camelcase-keys'
import snakeCaseKeys from 'snakecase-keys'

export function camelCaseDeep(obj: Record<string, any>) {
  return camelcaseKeys(obj, { deep: true })
}

export function snakeCaseDeep(obj: Record<string, any>) {
  return snakeCaseKeys(obj, {
    deep: true,
  })
}
