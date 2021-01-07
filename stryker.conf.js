module.exports = (config) => {
  config.set({
    mutator: 'typescript',
    packageManager: 'npm',
    reporters: ['clear-text', 'progress'],
    testRunner: 'jest',
    coverageAnalysis: 'on',
    mutate: ['src/**/*.ts'],
  });
};
