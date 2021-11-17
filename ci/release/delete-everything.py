import pathlib
import os
import shutil

WORKSPACE = pathlib.Path(os.environ['GITHUB_WORKSPACE']).absolute()


def main():
    for file in WORKSPACE.iterdir():
        if file == WORKSPACE / '.git' or file == WORKSPACE / 'website':
            continue

        print(f"Removing {file.absolute()}")
        shutil.rmtree(file, ignore_errors=True)


if __name__ == "__main__":
    main()
