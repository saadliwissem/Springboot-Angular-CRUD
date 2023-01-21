def add_text_to_file(file_path):
    with open(file_path, "r") as file:
        lines = file.readlines()
    with open(file_path, "w") as file:
        for line in lines:
            file.write(f'"{line.strip()}",\n')

add_text_to_file(".\poste.txt")