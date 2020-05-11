module.exports = {
  name: 'bonus-miles',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/bonus-miles',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
