# grpc-example
Example gRPC implementation using Go and NodeJS

## Generage pb code

```
$ cd protobuf
$ protoc -I ecommerce ecommerce/project_info.proto --go_out=plugins=grpc:../server/modules/ecommerce
$ protoc -I ecommerce ecommerce/project_info.proto --go_out=plugins=grpc:../client/modules/ecommerce
```
