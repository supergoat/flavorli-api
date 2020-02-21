import AWS from 'aws-sdk';

let docClient = new AWS.DynamoDB.DocumentClient();

if (process.env.STAGE === 'dev') {
  docClient = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: `http://localhost:${process.env.DYNAMODB_PORT}`,
    accessKeyId: 'DEFAULT_ACCESS_KEY', // needed if you don't have aws credentials at all in env
    secretAccessKey: 'DEFAULT_SECRET', // needed if you don't have aws credentials at all in env
  });
}

const query = async <T>(params: AWS.DynamoDB.DocumentClient.QueryInput) => {
  const data: AWS.DynamoDB.DocumentClient.QueryOutput = await docClient
    .query(params)
    .promise();

  return data?.Items?.[0] as T;
};

const scan = async <T>(
  params: AWS.DynamoDB.DocumentClient.ScanInput,
): Promise<T> => {
  const data: AWS.DynamoDB.DocumentClient.ScanOutput = await docClient
    .scan(params)
    .promise();

  return (data?.Items as unknown) as T;
};

const batchGet = async <T>(
  params: AWS.DynamoDB.DocumentClient.BatchGetItemInput,
) => {
  const data: AWS.DynamoDB.DocumentClient.BatchGetItemOutput = await docClient
    .batchGet(params)
    .promise();

  return (data?.Responses as unknown) as T;
};

const put = async <T>(params: AWS.DynamoDB.DocumentClient.PutItemInput) => {
  const data: AWS.DynamoDB.DocumentClient.PutItemOutput = await docClient
    .query(params)
    .promise();

  return params.Item as T;
};

const update = async <T>(
  params: AWS.DynamoDB.DocumentClient.UpdateItemInput,
) => {
  const data: AWS.DynamoDB.DocumentClient.UpdateItemOutput = await docClient
    .update(params)
    .promise();

  return data.Attributes as T;
};

export const db = {query, scan, batchGet, put, update};
