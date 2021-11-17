import json
import os
import pathlib
import pprint

WORKSPACE = os.environ['GITHUB_WORKSPACE']


def main():
    people = json.load(open(f"{WORKSPACE}/website/people.json"))
    validation_error = False

    for uid, person in people.items():
        if not pathlib.Path(f"{WORKSPACE}/website/{person.get('image')}").exists():
            print(f"Invalid image value \"{person.get('image')}\": image does not exist:")
            pprint.pprint((uid, person))
            print()
            validation_error = True

    if validation_error:
        print("One or more validation errors occoured, exiting.")
        exit(1)


if __name__ == "__main__":
    main()
