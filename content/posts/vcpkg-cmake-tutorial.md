---
title: "Installing Libraries for C++ with Vcpkg and CMake"
date: 2021-12-19T19:51:55-05:00
draft: false
tags: [
    "tutorial",
    "programming",
    "c++",
    "vcpkg",
    "cmake",
    "vscode",
]
---

## Trouble Shooting

Most errors occur because of `CMakePresets.json` or `CMakeSettings.json`. I have proper samples
available at https://github.com/elibroftw/cpp-vcpkg-cmake-example.

## Software Prerequisties

- Anyone of the following IDEs
  - [Visual Studio Code](https://code.visualstudio.com/download)
  - [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) if on Windows for the compiler
  - Any IDE that has pretty good CMake integration
  - Otherwise, you will need to use `cmake` yourself
- Any of the following compilers
  - [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) if on Windows
  - `gcc` (Linux)
  - MSYS2/Mingw `gcc` (Windows)
  - `clang` (MacOS?)
- `git`

## Installing CMake

You will need [CMake 3.21+](https://cmake.org/download/) in order to use the Visual Studio 2022 compiler through VSCode.
The installer does most of the work, so you won't have to manually add `cmake` to PATH.

For VS Code, you will need to install the "C/C++ Extension" and the "CMake Tools" extensions.

### Installing Vcpkg

1. Clone [vcpkg](https://github.com/microsoft/vcpkg) into a directory that won't bother you in your day to day life
   - For me, that would be `C:\Users\maste\Documents\GitHub\vcpkg`
   - Use `git clone https://github.com/microsoft/vcpkg.git` or GitHub desktop
2. Run the Vcpkg bootstrap script
   - Windows: `"./bootstrap-vcpkg" -disableMetrics`
   - Unix: `./bootstrap-vcpkg.sh -disableMetrics`
3. Modify environment variables
   - Add the vcpkg cloned directory to `PATH`
     - On Windows, use Windows search for "envir"
     - On Linux, open your `.bashrc` file and add `export PATH=$PATH:~/vcpkg` to your `.bashrc` file
   - Set `VCPKG_ROOT` as the same value you added to `PATH`
   - Set `VCPKG_DEFAULT_TRIPLET` to `x64-windows` on Windows, or your computers triplet
     - Valid architectures are: x86, x64, arm, arm64 and wasm32.
     - Valid OS names are `'windows', 'linux', 'macos'` (I'm unsure about the macos part)
4. Enable vcpkg packages to be used in VS/MSBuild:
   - `vcpkg integrate install`
   - copy the path to vcpkg.cmake for use later

You can now install packages using `vcpkg install <lib>` and search for them using `vcpkg search <lib>`.
In the next section, we'll be integrating `vcpkg` within a CMake project.

## Integrating Vcpkg into a new CMake Project

In this section we'll be creating a CMake C++ project that will make an HTTP request using the `cpr` library.

1. Create a CMake project in Visual Studio or VSCode
    - Ensure IDE is configured to use `CMakePresets.json`
    - VS: open visual studio and click "Create a new project" and search for "CMake Project"
    - VSCode: open an empty folder in VSCode and use "CMake: Quick Start" from the command palette (Ctrl + Shift + P)

2. Setting the CMake toolchain file to `vcpkg.cmake`
    - Open CMakePresets.json [example](https://github.com/elibroftw/cpp-vcpkg-cmake-example/blob/master/CMakePresets.json)
    - Add the following under `configurePresets[0] > cacheVariables`

        ```json
        "CMAKE_TOOLCHAIN_FILE": {
            "value": "$env{VCPKG_ROOT}/scripts/buildsystems/vcpkg.cmake",
            "type": "FILEPATH"
        },
        ```

    - If using `cmake` from the command line on Linux, add `-DCMAKE_TOOLCHAIN_FILE=$VCPKG_ROOT/scripts/buildsystems/vcpkg.cmake`
3. Create a `vcpkg` response file to maintain portability
   - Create `vcpkg_rf.txt` in the root directory with the contents:

    ```bash
    install
    cpr
    ```

4. Install dependencies using `vcpkg "@vcpkg_rf.txt" [optional arguments]`
5. For each library installed, you'll see instructions for what to add or modify in your `CMakeLists.txt`
   - For `cpr`, that would be

   ```cmake
    find_package(cpr CONFIG REQUIRED)
    target_link_libraries(PROJECT_NAME PRIVATE cpr::cpr)
   ```

   - For more than one library, you only need one `target_link_libraries` rather than one for each additional library

6. Now let's code. In the main cpp file, type the following:

    ```cpp
    #include <cpr/cpr.h>
    #include <iostream>

    int main()
    {
        cpr::Response r = cpr::Get(cpr::Url{ "https://api.github.com/repos/whoshuu/cpr/contributors" },
            cpr::Authentication{ "user", "pass" },
            cpr::Parameters{ {"anon", "true"}, {"key", "value"} });
        r.status_code;                  // 200
        r.header["content-type"];       // application/json; charset=utf-8
        r.text;                         // JSON text string
        std::cout << r.text << std::endl;
        return 0;
    }
    ```

7. Let's test our build
   - If something doesn't work, you may need to configure/delete CMake cache using your IDE or doing it manually
   - In Visual Studio, just click the green play button
   - In Visual Studio Code, you can use the "Build: Target" and select "run" from the command palette

If the steps didn't work for you, you can follow [this tutorial video](https://youtu.be/FeBzSYiWkEU).
The video has an example of opening a project in VSCode that was made in Visual Studio.

## Video

{{< youtube FeBzSYiWkEU >}}
