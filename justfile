_list:
    @just --list

g4api-local:
    fnm use 20 --install-if-missing
    npx swagger-typescript-api@13.1.3 \
        --path http://localhost:5000/swagger/v1/swagger.json \
        --output {{ justfile_directory() }} \
        --name Api.ts
    deno fmt {{ justfile_directory() }}/Api.ts

g4api-dev:
    fnm use 20 --install-if-missing
    npx swagger-typescript-api@13.1.3 generate \
        --path https://g4-dev.v1.mrcapi.net/swagger/v1/swagger.json \
        --output {{ justfile_directory() }} \
        --name Api.ts
    deno fmt {{ justfile_directory() }}/Api.ts