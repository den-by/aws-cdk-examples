import { Stack, StackProps, aws_appsync as appsync, aws_dynamodb as dynamodb, CfnOutput, App } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BillingMode } from "aws-cdk-lib/aws-dynamodb";

export class YourProjectStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new appsync.GraphqlApi(this, 'Api', {
      name: 'demo',
      definition: appsync.Definition.fromFile('graphql/schema.graphql'), // Use this to define the schema in-line
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.IAM,
        },
      },
      xrayEnabled: true,
    });

    const demoTable = new dynamodb.Table(this, 'DemoTable', {
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING,
      },
      billingMode: BillingMode.PAY_PER_REQUEST,
    });

    const demoDS = api.addDynamoDbDataSource('demoDataSource', demoTable);

// Resolver for the Query "getDemos" that scans the DynamoDb table and returns the entire list.
// Resolver Mapping Template Reference:
// https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-dynamodb.html
    demoDS.createResolver('QueryGetDemosResolver', {
      typeName: 'Query',
      fieldName: 'getDemos',
      requestMappingTemplate: appsync.MappingTemplate.dynamoDbScanTable(),
      responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultList(),
    });

// Resolver for the Mutation "addDemo" that puts the item into the DynamoDb table.
    demoDS.createResolver('MutationAddDemoResolver', {
      typeName: 'Mutation',
      fieldName: 'addDemo',
      requestMappingTemplate: appsync.MappingTemplate.dynamoDbPutItem(
        appsync.PrimaryKey.partition('id').auto(),
        appsync.Values.projecting('input'),
      ),
      responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultItem(),
    });

//To enable DynamoDB read consistency with the `MappingTemplate`:
    demoDS.createResolver('QueryGetDemosConsistentResolver', {
      typeName: 'Query',
      fieldName: 'getDemosConsistent',
      requestMappingTemplate: appsync.MappingTemplate.dynamoDbScanTable(true),
      responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultList(),
    });

    // Output the API URL
    new CfnOutput(this, 'GraphQLAPIURL', {
      value: api.graphqlUrl,
    });
  }
}

const app = new App();
new YourProjectStack(app, 'YourProjectStack');

