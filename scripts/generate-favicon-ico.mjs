import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const pub = join(dirname(fileURLToPath(import.meta.url)), "..", "public")

const sizes = [16, 32]
const images = sizes.map((s) => ({
  size: s,
  data: readFileSync(join(pub, `favicon-${s}x${s}.png`)),
}))

// ICO header: 6 bytes, then directory entries (16 bytes each), then image data
const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0) // reserved
header.writeUInt16LE(1, 2) // type: icon
header.writeUInt16LE(images.length, 4)

const entries = []
let offset = 6 + images.length * 16

for (const { size, data } of images) {
  const entry = Buffer.alloc(16)
  entry.writeUInt8(size === 256 ? 0 : size, 0) // width (0 = 256)
  entry.writeUInt8(size === 256 ? 0 : size, 1) // height
  entry.writeUInt8(0, 2) // palette colors
  entry.writeUInt8(0, 3) // reserved
  entry.writeUInt16LE(1, 4) // color planes
  entry.writeUInt16LE(32, 6) // bits per pixel
  entry.writeUInt32LE(data.length, 8)
  entry.writeUInt32LE(offset, 12)
  entries.push(entry)
  offset += data.length
}

writeFileSync(
  join(pub, "favicon.ico"),
  Buffer.concat([header, ...entries, ...images.map((i) => i.data)]),
)
console.log("favicon.ico written")
