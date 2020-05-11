module.exports = {
  name: 'luggage',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/luggage',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
