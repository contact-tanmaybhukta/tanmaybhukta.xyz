import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

import Copyright from "./quartz/components/Copyright"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout({ defaults: { footer: [Copyright] } })
