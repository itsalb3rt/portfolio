import { Resvg } from "@resvg/resvg-js"
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const pub = join(root, "public")

const render = (svg, width, height, background) => {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    background,
  })
  return resvg.render().asPng()
}

const og = readFileSync(join(pub, "og-card.svg"), "utf8")
const logo = readFileSync(join(pub, "favicon.svg"), "utf8")

const out = [
  ["og-image.png", render(og, 1200, 630)],
  ["apple-touch-icon.png", render(logo, 180, 180, "#0b0b0d")],
  ["favicon-32x32.png", render(logo, 32, 32)],
  ["favicon-16x16.png", render(logo, 16, 16)],
  ["icon-192.png", render(logo, 192, 192, "#0b0b0d")],
  ["icon-512.png", render(logo, 512, 512, "#0b0b0d")],
]

mkdirSync(pub, { recursive: true })
for (const [name, buf] of out) {
  writeFileSync(join(pub, name), buf)
  console.log(`${name} ${(buf.length / 1024).toFixed(1)} KB`)
}
