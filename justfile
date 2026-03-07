_list:
    @just --list

_g4api PATH:
    fnm use 20 --install-if-missing
    npx swagger-typescript-api@13.3.0 generate \
        --no-client --no-components --no-routes --no-context \
        --path {{ PATH }} \
        --output {{ justfile_directory() }} \
        --name Api.ts
    deno fmt {{ justfile_directory() }}/Api.ts

g4api-local: (_g4api "http://localhost:5000/swagger/v1/swagger.json")

g4api-dev: (_g4api "https://g4-dev.v1.mrcapi.net/swagger/v1/swagger.json")