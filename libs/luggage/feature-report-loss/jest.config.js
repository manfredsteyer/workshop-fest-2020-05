module.exports = {
  name: 'luggage-feature-report-loss',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/luggage/feature-report-loss',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
