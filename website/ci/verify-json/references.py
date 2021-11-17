import json
import os
import pprint

WORKSPACE = os.environ['GITHUB_WORKSPACE']


def main():
    messages = json.load(open(f"{WORKSPACE}/website/messages.json"))
    people = json.load(open(f"{WORKSPACE}/website/people.json"))
    validation_error = False

    for message in messages:
        if message.get("from") not in people:
            print(f"Invalid from value \"{message.get('from')}\":")
            pprint.pprint(message)
            print()
            validation_error = True

    if validation_error:
        print("One or more validation errors occoured, exiting.")
        exit(1)


if __name__ == "__main__":
    main()
