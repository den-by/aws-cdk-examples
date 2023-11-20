import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class S3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true
    });
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'S3Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
