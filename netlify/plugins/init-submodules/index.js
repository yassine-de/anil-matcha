const { execSync } = require('child_process')

module.exports = {
  onPreBuild: async ({ utils }) => {
    try {
      execSync('git submodule update --init --recursive', { stdio: 'inherit' })
    } catch (error) {
      utils.build.failBuild('Failed to initialize git submodules', { error })
    }
  },
}
