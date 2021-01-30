import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, Handler } from 'aws-lambda';


// export async function handler(event: any, context: Context) {
//     try {
//       const response = await fetch('https://api.chucknorris.io/jokes/random');
//       if (!response.ok) {
//         // NOT res.status >= 200 && res.status < 300
//         return { statusCode: response.status, body: response.statusText };
//       }
//       const data = await response.json();

//       return {
//         statusCode: 200,
//         body: JSON.stringify({ msg: data.value })
//       };
//     } catch (err) {
//       console.log(err); // output to netlify function log
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
//       };
//     }
//   }

// const handler: Handler = async (event: any, context: Context): Promise<APIGatewayProxyResult> => {
//     return {
//         statusCode: 200,
//         body: JSON.stringify({
//             msg: `Hello world ${Math.floor(Math.random() * 10)}`
//         })
//     }
// }

// export default handler;


export const handler = async function (
    event: APIGatewayProxyEvent,
    context: any
) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            msg: `Hello world ${Math.floor(Math.random() * 10)}`
        })
    }
};