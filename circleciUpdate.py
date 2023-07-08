import os

# Specify the paths to the two folders
diff_path = "/home/circleci/cypress-circleci-snapshot/cypress-visual-screenshots/diff"
comparison_path = "/home/circleci/cypress-circleci-snapshot/cypress-visual-screenshots/comparison"

# Get the list of file names in folder1
diff_files = os.listdir(diff_path)

# Get the list of file names in folder2
comparison_files = os.listdir(comparison_path)

# Delete files in folder2 that don't have matching names in folder1
for file_name in comparison_files:
    file_path = os.path.join(comparison_path, file_name)

    # Check if the file is not present in the diff folder
    if file_name not in diff_files:
        
        # Check if the file is not present in the baseline folder
        baseline_path = os.path.join("/home/circleci/cypress-circleci-snapshot/cypress-visual-screenshots/baseline", file_name)
        if not os.path.exists(baseline_path):
            continue  # Skip deletion if the file is not in baseline

    # Delete the file
    os.remove(file_path)
    print(f"Deleted file: {file_path}")
