import fs from "node:fs/promises";

import Repl from "./Repl";

export const dynamic = "force-dynamic";

export default async function Page() {
  const exampleFilesList = await fs.readdir("./examples");
  const exampleFiles: Record<string, string> = {};
  for (const file of exampleFilesList) {
    exampleFiles[file] = await fs.readFile(`./examples/${file}`, "utf-8");
  }

  return (
    <div>
      <Repl exampleFiles={exampleFiles} />
    </div>
  );
}
