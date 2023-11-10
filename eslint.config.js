import matijaoe from '@matijaoe/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default matijaoe(
  {
    propsDestructure: true,
  },
  unocss.configs.flat,
)
