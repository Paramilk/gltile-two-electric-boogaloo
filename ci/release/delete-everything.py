import pathlib
import os
import shutil

WORKSPACE = pathlib.Path(os.environ['GITHUB_WORKSPACE'])


def main():
    for file in WORKSPACE.iterdir():
        if WORKSPACE / 'website' in file.parents or WORKSPACE / '.git' in file.parents:
            continue

        print(f"Removing {file.absolute()}")
        shutil.rmtree(file, ignore_errors=True)


if __name__ == "__main__":
    main()
