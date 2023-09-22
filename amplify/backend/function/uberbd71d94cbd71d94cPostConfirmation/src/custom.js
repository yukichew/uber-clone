const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  // Check if it is a new user
  if (event.request.userAttributes.sub) {
    console.log('Error: No user was written to DynamoDB');
    context.done(null, event);
    return;
  }

  // Save the user to DynamoDB
  const params = {
    Item: {
      id: {S: event.request.userAttributes.sub}, // primary key - S means string
      __typename: {S: 'User'},
      username: {S: event.userName},
      email: {S: event.request.userAttributes.email},
      createdAt: {S: new Date().toISOString()},
      updatedAt: {S: new Date().toISOString()},
    },
    TableName: process.env.USERTABLE,
  };

  try {
    await ddb.putItem(params).promise(); // save the user to DynamoDB
    console.log('Success');
  } catch (err) {
    console.log('Error', err);
  }

  context.done(null, event);
};
