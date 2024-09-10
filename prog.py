def read_and_display_file(input_file):
    try:
        with open(input_file ,'r') as file:
            content = file.read()
            print("Content of the file:")
            print(content)
    except FileNotFoundError:
        print(f"Error: {input_file} not found.")
	    
def read_and_output_file(input_file,output_file):
    try:
        with open(input_file, 'r') as infile, open(output_file, 'w') as outfile:
            for line in infile:
                words = line.split()
                for word in words:
                    if word.isdigit():
                        outfile.write(word + '\n')
        print(f"Integers have been written to {output_file}.")
    except FileNotFoundError:
        print(f"Error: {input_file} not found.")
       
def wordchecking(input_file, output_file):     
    try:
        with open(input_file, 'r') as infile, open(output_file, 'w') as outfile: 
            for line in infile:
                words = line.split()
                for word in words:
                    if  all(not char.isalpha() for char in word):
                        outfile.write(word + '\n')
                        print(word)
        print(f"Non-alphabetic words have been written to {output_file}.")
    except FileNotFoundError:
        print(f"Error: {input_file} not found.")
        
def reverse_words(input_file, output_file):
    try:
        with open(input_file,'r') as infile, open(output_file,'w') as outfile:
            for line in infile:
                words = line.split()
                for word in words:
                    revstring = word[::-1]
                    outfile.write(revstring + " ")   
        print(f"Words have been reversed and written to {output_file}.")
    except FileNotFoundError:
        print(f"Error: {input_file} not found.")
        
        

        
input_file = 'input_text.txt'
output_file = 'output_txt.txt'

# read_and_display_file(input_file)
# read_and_output_file(input_file,output_file)
wordchecking(input_file,output_file)
reverse_words(input_file, output_file)
