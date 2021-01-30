import { APIGatewayProxyEvent } from "aws-lambda";
import axios, { AxiosResponse } from "axios";

export const handler = async function (
    event: APIGatewayProxyEvent,
    context: any
) {
    const quote: AxiosResponse = await axios.get("http://quotes.stormconsultancy.co.uk/random.json");
    // console.log(quote.data);

    return {
        statusCode: 200,
        body: JSON.stringify(quote.data)
    }
};