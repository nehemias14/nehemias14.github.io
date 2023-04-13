# Save a file named `filenames.txt` to the same folder in this directory that contains all of the filenames of the games you want to add
# Must be all the same console type to  work
myfile = open("filenames.txt", "r")

# This is the console type. The acceptable parameters are the following:
# TODO Figure out acceptable core params
## Default is gba 
console = "gba"


myline = myfile.readline()
while myline:
    myline = myfile.readline()
    myline1 = myline.replace("\n", "")
    mylist = myline1.partition(".")
    with open("results.txt", "a") as f:
        f.write(f"""<rom-add console="{console}" game="{mylist[0]}" ext="{mylist[2]}"></rom-add>\n""")

        # Use the following if you do not want an ext attribute
        # f.write(f"""<rom-add console="{console}" game="{mylist[0]}"></rom-add>\n""")
