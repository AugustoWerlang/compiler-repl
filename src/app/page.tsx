import fs from "node:fs/promises";
import path from "path";
import Repl from "./Repl";

export const dynamic = "force-dynamic";

export default async function Page() {
  const examplesDir = path.join(process.cwd(), "public", "examples");
  const exampleFilesList = await fs.readdir(examplesDir);
  const exampleFiles: Record<string, string> = {};
  for (const file of exampleFilesList) {
    const filePath = path.join(examplesDir, file);
    exampleFiles[file] = await fs.readFile(filePath, "utf-8");
  }

  return (
    <div>
      <Repl exampleFiles={exampleFiles} />
    </div>
  );
}
