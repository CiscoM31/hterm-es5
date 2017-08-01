# HTERM-M31

To rebuild the hterm, follow this guide 

https://chromium.googlesource.com/apps/libapps/+/HEAD/hterm/doc/embed.md

NOTE: Noticed issue with hterm build. On MacOS you will need to change `-w0` flag to `-b0` or build script will fail.

Built file you will need to output into src folder, and after that run `gulp` to generate final bundle in dist folder