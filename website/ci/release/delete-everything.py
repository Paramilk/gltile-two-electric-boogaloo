import pathlib
import os

WORKSPACE = pathlib.Path(os.environ['GITHUB_WORKSPACE'])


def main():
    for file in WORKSPACE.iterdir():
        if WORKSPACE / 'website' in file.parents or WORKSPACE / '.git' in file.parents:
            continue

        print(f"Removing {file.absolute()}")
        os.remove(file)


if __name__ == "__main__":
    main()
