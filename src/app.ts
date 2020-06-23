import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './router.ts';

const env = config();
const HOST = env.HOST
const PORT = env.PORT

const app = new Application();

app.use(oakCors({ origin: '*' }))
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}.`);
await app.listen(`${HOST}:${PORT}`);