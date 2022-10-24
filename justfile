_list:
    @just --list

g4api-dev:
    npx swagger-typescript-api \
        -p https://g4-dev.v1.mrcapi.net/swagger/v1/swagger.json \
        --output {{ justfile_directory() }}
    deno fmt {{ justfile_directory() }}/Api.ts