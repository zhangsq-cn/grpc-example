const ecommerce = require("./proto")
const grpc = require("@grpc/grpc-js")
const { v4: uuidv4 } = require("uuid")

const client = new ecommerce.ProductInfo("localhost:50051", grpc.credentials.createInsecure())
// console.log(ecommerce.ProductInfo.prototype)
// console.log("=====================")
// console.log(client.addProduct.toString())

async function addProduct(productInfo) {
  return new Promise((resolve, reject) => {
    client.addProduct(productInfo, (err, res) => {
      if (err) {
        console.error("Error: ", err)
        reject(err)
      } else {
        resolve(res.value)
      }
    })
  })
}

async function getProduct(id) {
  return new Promise((resolve, reject) => {
    client.getProduct({ value: id }, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}


(async () => {
  const id = await addProduct({
    id: uuidv4(),
    name: "Apple iPhone 12",
    description: "Meet Apple iPhone 11. All-new dual-camera system with Ultra Wide and Night mode.",
    price: 1000
  })

  console.log(id)
  const product = await getProduct(id)
  console.log(product)
})()


