const headers = {
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,DELETE',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

const sendResponse = (data) => ({
  statusCode: 200,
  body: JSON.stringify({ data }),
  headers,
});

const sendErrorResponse = (errorStatus, message) => ({
  statusCode: errorStatus,
  body: JSON.stringify({
    status: errorStatus,
    message: message || 'Something went wrong',
  }),
  headers,
});

module.exports = {
  sendResponse,
  sendErrorResponse,
};
