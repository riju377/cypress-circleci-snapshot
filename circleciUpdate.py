import os
# import shutil

# Specify the paths to the two folders
diff_path = "/home/circleci/cypress-circleci-snapshot/cypress-visual-screenshots/diff"
comparison_path = "/home/circleci/cypress-circleci-snapshot/cypress-visual-screenshots/comparison"

# Get the list of file names in folder1
diff_files = os.listdir(diff_path)

# Get the list of file names in folder2
comparison_files = os.listdir(comparison_path)

# Delete files in folder2 that don't have matching names in folder1
for file_name in comparison_files:
    if file_name not in diff_files:
        file_path = os.path.join(comparison_path, file_name)
        os.remove(file_path)
        print(f"Deleted file: {file_path}")


# folder3_path = "/home/circleci/cypress-circleci-snapshot/cypress-visual-screenshots/baseline"
# comparison_files = os.listdir(comparison_path)

# # Iterate over the files in folder2
# for file_name in comparison_files:
#     file2_path = os.path.join(comparison_path, file_name)
#     file3_path = os.path.join(folder3_path, file_name)

#     # Check if the file exists in folder3
#     if os.path.isfile(file3_path):
#         # Remove the existing file in folder3
#         os.remove(file3_path)

#     # Copy the file from folder2 to folder3
#     shutil.copy(file2_path, folder3_path)
#     print(f"Updated file: {file3_path}")
