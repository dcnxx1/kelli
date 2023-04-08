import { PheroClient } from "../phero.generated";


const client = new PheroClient(fetch);

async function main() {
  const message = await client.helloWorldService.helloWorld('Jim')
  console.log(message) // `Hi there, Jim!`
}

main()
