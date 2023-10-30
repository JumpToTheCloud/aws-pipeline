import { awscdk } from 'projen';
import { TrailingComma } from 'projen/lib/javascript/prettier';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Jump to the Cloud',
  authorAddress: 'antonio.marquez@jumptothecloud.tech',
  cdkVersion: '2.103.0',
  constructsVersion: '10.3.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'aws-pipeline',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:JumpToTheCloud/aws-pipeline.git',
  prettier: true,
  prettierOptions: {
    settings: {
      trailingComma: TrailingComma.ES5,
      singleQuote: true,
      bracketSpacing: true,
      semi: true,
    },
  },
  devDeps: ['commitizen', 'cz-customizable'],
  packageName: '@jttc/aws-pipeline',
});

project.addTask('commit', {
  exec: './node_modules/cz-customizable/standalone.js',
});
project.synth();
