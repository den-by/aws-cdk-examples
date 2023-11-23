import { Stack, StackProps, App } from "aws-cdk-lib";
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";
import { Runtime } from "aws-cdk-lib/aws-lambda";

class MyCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const myLambda = new lambda.NodejsFunction(this, 'MyFunction', {
      entry: 'dist/index.js',
      handler: 'handler',
      runtime: Runtime.NODEJS_18_X,
    });

    new apigateway.LambdaRestApi(this, 'MyEndpoint', {
      handler: myLambda
    });
  }
}

const app = new App();
new MyCdkStack(app, 'MyCdkStack');
