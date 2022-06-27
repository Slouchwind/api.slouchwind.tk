export default function handler(request, response) {
    const { name } = request.query;
    response.status(200).send(`Hello ${name}!` + "\n");
    response.status(200).send(request.query);
}