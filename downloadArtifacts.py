import os
import shutil
import requests

build_number = input("Enter the Build_number: ")

# API endpoint and headers
api_url = f"https://circleci.com/api/v2/project/github/riju377/cypress-circleci-snapshot/{build_number}/artifacts"
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Circle-Token": "CCIPAT_LRuf2amSDCgMAqYtMjawZ1_bd12c8ed789f8138451d78ed2001463306c82c3b"  # Replace with your CircleCI token
}

# Send GET request to the API
response = requests.get(api_url, headers=headers)
data = response.json()

# Check if the request was successful
if response.status_code == 200:

    # # Delete directories "diff" and "comp" if they exist
    # if os.path.exists("diff"):
    #     shutil.rmtree("diff")
    # if os.path.exists("comp"):
    #     shutil.rmtree("comp")

    # Process the items in the response JSON
    for item in data['items']:
        file_path = item['path']
        file_url = item['url']

        # Extract the filename from the path
        filename = os.path.basename(file_path)

        # Create the directory if it doesn't exist
        directory = os.path.dirname(file_path)
        if not os.path.exists(directory):
            os.makedirs(directory)

        # Download the image file
        response = requests.get(file_url, headers=headers)
        if response.status_code == 200:
            # Save the image in the specified path
            save_path = os.path.join(os.getcwd(), file_path)
            with open(save_path, 'wb') as f:
                f.write(response.content)
            print(f"Downloaded image: {save_path}")
        else:
            print(f"Failed to download image: {filename}")
else:
    print("API request failed.")
