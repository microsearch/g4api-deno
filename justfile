_list:
    @just --list

g4api-local:
    npx swagger-typescript-api \
        -p http://localhost:5000/swagger/v1/swagger.json \
        --output {{ justfile_directory() }}
    deno fmt {{ justfile_directory() }}/Api.ts

g4api-dev:
    npx swagger-typescript-api \
        -p https://g4-dev.v1.mrcapi.net/swagger/v1/swagger.json \
        --output {{ justfile_directory() }}
    deno fmt {{ justfile_directory() }}/Api.ts