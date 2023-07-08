import os
import subprocess

# Specify the paths to the folders
diff_path = "/home/circleci/cypress-circleci-snapshot/cypress-visual-screenshots/diff"
comparison_path = "/home/circleci/cypress-circleci-snapshot/cypress-visual-screenshots/comparison"
baseline_path = "/home/circleci/cypress-circleci-snapshot/cypress-visual-screenshots/baseline"

# Store the files present in the baseline folder before running npm command
baseline_files_before = os.listdir(baseline_path)


# Run the commands separately
subprocess.run("set +e", shell=True, executable="/bin/bash")
subprocess.run("npm run cy:run", shell=True, executable="/bin/bash")

# Check the exit status of tests
result = subprocess.run("echo $?", shell=True, executable="/bin/bash", capture_output=True)
exit_status = int(result.stdout.decode().strip())

# Handle the if condition
if exit_status != 0:
    # Perform actions when the condition is true
    subprocess.run("echo 'EXIT_CODE=1' >> $BASH_ENV", shell=True, executable="/bin/bash")

subprocess.run("set -e", shell=True, executable="/bin/bash")

# Get the list of file names in the diff folder
diff_files = os.listdir(diff_path)

# Get the list of file names in the comparison folder
comparison_files = os.listdir(comparison_path)

# Get the updated list of file names in the baseline folder after running the npm command
baseline_files_after = os.listdir(baseline_path)

# Delete files in the comparison folder that don't have matching names in the diff folder
for file_name in comparison_files:
    file_path = os.path.join(comparison_path, file_name)

    # Check if the file is not present in the diff folder
    if file_name not in diff_files:
        
        # Check if the file was present in the baseline before running the npm command
        if file_name in baseline_files_before:
            os.remove(file_path)
            print(f"Deleted file: {file_path}")
