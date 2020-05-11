module.exports = {
  name: 'dashboard-api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/dashboard-api',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
