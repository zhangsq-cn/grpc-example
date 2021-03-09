const path = require("path")
const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")

const PROTO_PATH = path.join(__dirname, "protos/ecommerce/product_info.proto")
const def = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true 
})
const desc = grpc.loadPackageDefinition(def)

module.exports = desc.ecommerce
