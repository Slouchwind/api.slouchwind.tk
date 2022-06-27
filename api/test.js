export default function handler(request, response) {
    const { name } = request.query;
    response.status(200).send(`Hello ${name}!`);
    response.status(200).send("\n");
    response.status(200).send(request.query);
}