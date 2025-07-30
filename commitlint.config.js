module.exports = {
  extends: ['@commitlint/cli', '@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation changes
        'style',    // Code style (formatting, missing semicolons)
        'refactor', // Code refactoring (no functional changes)
        'test',     // Adding tests
        'chore',    // Build process or tooling changes
        'perf',     // Performance improvement
        'revert',   // Revert a previous commit
        'ci',       // CI/CD related changes
        'build',    // Build system or dependency changes
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
    // 'type-case': [2, 'always', 'lower-case'],
    // 'type-empty': [2, 'never'],
    // 'subject-max-length': [2, 'always', 72],
    // 'body-max-line-length': [2, 'always', 100],
    // 'footer-max-line-length': [2, 'always', 100],
  },
};