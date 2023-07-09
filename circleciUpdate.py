import os
import subprocess

# Specify the paths to the folders
diff_path = "/home/circleci/cypress-circleci-snapshot/cypress-visual-screenshots/diff"
comparison_path = "/home/circleci/cypress-circleci-snapshot/cypress-visual-screenshots/comparison"
baseline_path = "/home/circleci/cypress-circleci-snapshot/cypress-visual-screenshots/baseline"

# Store the files present in the baseline folder before running npm command
baseline_files_before = os.listdir(baseline_path)

command = r'''
set +e
npm run cy:run
# Check the exit status of tests
CURR_STATUS=$?
if [ $CURR_STATUS -ne 0 ]; then
    echo "EXIT_CODE=1" >> $BASH_ENV
fi
set -e
'''

exit_code = subprocess.call(["/bin/sh", "-c", command])



# Get the list of file names in the diff folder
diff_files = os.listdir(diff_path)

# Get the list of file names in the comparison folder
comparison_files = os.listdir(comparison_path)


# Delete files in the comparison folder that don't have matching names in the diff folder
for file_name in comparison_files:
    file_path = os.path.join(comparison_path, file_name)

    # Check if the file is not present in the diff folder
    if file_name not in diff_files:
        
        # Check if the file was present in the baseline before running the npm command
        if file_name in baseline_files_before:
            os.remove(file_path)
            print(f"Deleted file: {file_path}")
