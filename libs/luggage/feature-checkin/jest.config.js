module.exports = {
  name: 'luggage-feature-checkin',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/luggage/feature-checkin',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
