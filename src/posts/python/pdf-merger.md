---
path: "/posts/python/pdf-merger"
date: "October 2nd 2020"
title: "How to create your own custom PDF merger using PyPDF2"
topic: "Python"
---

<h2>Introduction</h2>

I'm sure there has been a time in our lives when we have wanted to merge some PDFs together for whatever reason. If you're on a Mac, then congrats to you because you don't need to worry about things like editing PDFs and whatnot. However, if you're a poor Windows user like me and did not pay for Adobe Acrobat Pro DC, then finding a solution for merging PDFs is not as easy. 

<p align="center">
<img width="400px" src="https://github.com/khxia/khxia.github.io/blob/dev2/src/posts/python/os_meme.jpg?raw=True"></img>
</p>

Of course, there are websites out there that can automatically merge PDFs for you and there are also free PDF editor apps out there which you can use to merge PDFs. However, there are concerns that people have when they use them. For example, if you are dealing with sensitive documents that contains your personal information (name, address, phone number, ID number) or confidential documents eg. official forms, company documents etc, then you may not want to use an online PDF merger tool since you don't want to be uploading those sensitive documents onto their servers. Free PDF editors apps eg. [soda PDF](https://www.sodapdf.com/) are riddled with ads and may require you to pay for premium at some point. 

Anyways, the point is that there may come a time where you want a quick and easy way to merge some PDFs, or manipulate any PDf. Thankfully, there is a Python library called [PyPDF2](http://mstamy2.github.io/PyPDF2/) that lets us do this easily. 

> <details>
> <summary>Stop the cap and gimme the code</summary>
> 
> No problem. You can see the full implementation of the PDF merger in the [Github repo](https://github.com/khxia/khxia.github.io/blob/dev2/src/posts/python/mergepdf.py)
> 
> </details>


<h2>Let's get started</h2>

So, PyPDF used to be a PDF toolkit that was released in 2005, however in 2011, some other people and a company called [Phaseit](http://phaseit.net/) made a new version of PyPDF *(they forked it)* that could do a wider range of tasks. PyPDF is now no longer being maintained and so everyone, even the creator of PyPDF recommends that we use PyPDF2 - and that is what we will do. 

> This guide will assume that you already have a Python environment set up and will also assume that you have some basic Python knowledge. 

<h3>Installation and Usage</h3>

There are two main ways that you can download the PyPDF2 library:

1. Download the source tarball in the PyPI page [here](https://pypi.org/project/PyPDF2/#files)
2. Or, install it directly through the `pip` command. 

```bash
$ pip install PyPDF2
```
<br>

> You can now import the library in your Python code!
```py
import PyPDF2 
```

<br>

<h2>Implementation</h2>

Even though PyPDF2 is a relatively broad toolkit and can do many PDF operations eg. 
- By-page splitting
- By-page concatentation 
- Merging 
- Page cropping 
- Document encryption and decryption
- Document introspection

Here, we will just focus on just **merging**. First of all, we need to get the names to our pdf files. For simplicity, I will assume that we want to merge every single pdf file in a folder. To do that we will need the help of the `os` and `sys` libraries. 

Our main function can then look something like this:

```py
if __name__ == "__main__":
	root = sys.argv[1] # This is the directory containing the PDFs you want to merge
	new_file_name = "merged.pdf"
	new_file_path = os.path.join(root, new_file_name)
	o_stream = open(new_file_path, 'wb')
	i_files = [(root + '/' + x) for x in os.listdir(root) if x.endswith(".pdf") and x != new_file_name]
	
    cat_pdf(i_files, o_stream) # Some function to combine our PDFs (we haven't defined this yet).
    
	o_stream.close()
```

If this looks confusing to you then don't worry, I will break it down for you.

The first line `root = sys.argv[1]` saves the first argument to the program into a variable called `root`. This is the root directory containing all of the PDF files that we want to merge. The following lines: 

```py
new_file_name = "merged.pdf"
new_file_path = os.path.join(root, new_file_name)
o_stream = open(new_file_path, 'wb')
```
<br>

Creates a new file using the `open()` function inside the same directory as the first argument with the name: `merged.pdf`. You can change this name to anything you want. However the `.pdf` extension is mandatory, otherwise your operating system may not know how to interpret the file. Notice, that we called `open()` using the `wb` options. This means that we can use the variable `o_stream` to write to this file in binary mode. If you don't specify `b` for binary mode, it will default to text mode - which is not what we want since PDFs contain more than just text.

Next we will create a list of our input files: 

```py
i_files = [(root + '/' + x) for x in os.listdir(root) if x.endswith(".pdf") and x != new_file_name]
```
<br>

This is just a really clean, Python-y way of saying: create a list called `i_files` that contains any filename in our directory that matches the condition `x.endswith(".pdf") and x != new_file_name`. What the `os.listdir(root)` does is it returns a list of the filenames of the directory specified by `root`. Hence, we can loop over it using the variable `x`. The code below does the exact same thing.

```py
i_files = []
for x in os.listdir(root):
    if x.endswith(".pdf") and x != new_file_name:
        i_files.append(x)
```
<br>

Now that we have done the preparatory work, we can call a function called `cat_pdf` (that we haven't defined yet) to do all the cool merging work, then we can call `o_stream.close()` to close our file.


Here comes the fun part: merging the PDFs. There are actually two different ways to do this. We will have a look at both of them. 

<p align="center">
<img width="400px" src="https://github.com/khxia/khxia.github.io/blob/dev2/src/posts/python/methods_meme.jpg?raw=True"></img>
</p>

<h3>Method 1</h3>

The first method is the read and write method. To do that we will need to import two methods from PyPDF2.

```py
from PyPDF2 import PdfFileReader, PdfFileWriter
```
<br>

> So our `cat_pdf` function will look something like this:

```py
def cat_pdf(input_files, output_stream):
	input_streams = []
	try:
		for input_file in input_files:
			input_streams.append(open(input_file, 'rb'))
		writer = PdfFileWriter()
		for reader in map(PdfFileReader, input_streams):
			for n in range(reader.getNumPages()):
				writer.addPage(reader.getPage(n))
		writer.write(output_stream)
	finally:
		for f in input_streams:
			f.close()
```

<br>

So the first thing we're going to do is create a new list `input_stream`, which will contain each PDF file that we want to merge in binary format. This is what these lines do:

```py
for input_file in input_files:
	input_streams.append(open(input_file, 'rb'))
```

<br>

So now, even though we have our PDF files in binary format, we still can't interpret them as PDF files. Which is why we need `PdfFileReader`. The following line basically uses the `map` function, which calls the `PdfFileReader` constructor on every item in `input_stream`, then we can loop over the new list. So now, `reader` will be a single PDF file that we have converted into a PyPDF2 readable format.

```py
for reader in map(PdfFileReader, input_streams):
```

What we're going to do after will be pretty simple. Using the methods of `PdfFileReader`: `.getNumPages` and `.getPage`, and the `.addPage` method of the `PdfFileWriter` class, we are able to iteratively add every single page of every PDF that we want merge into our `PdfFileWriter`. 

```py
writer.addPage(reader.getPage(n))
```

<br>

Then, in the end, we are able to write all this data into our new file `merged.pdf` by calling the `.write` method of `PdfFileWriter` on our output stream. The `PdfFileWriter` will hide all the complicated PDF/binary conversions that needs to be made. 


<h3>Method 2</h3>

So in the previous method, all we used the `PdfFileWriter` and the `PdfFileReader` to perform read and write operations for every page of a PDF. Though this is viable, it can be a little tedious. In fact, for merging, PyPDF2 provides an even more convenient tool called the `PdfFileMerger` which can shorten the process. 

```py
from PyPDF2 import PdfFileMerger
```

> With this class, our new `cat_pdf` function is a lot shorter:

```py
def cat_pdf_2(input_files, output_stream):
	merger = PdfFileMerger()
	for input_file in input_files:
		merger.append(open(input_file, 'rb'))
	merger.write(output_stream)
```

This one doesn't require much explanation. Using the `.append` method of the `PdfFileMerger`, we append the binary format of every PDF we want to merge, and then at the end we call `.write` to write all the PDFs into our output stream. The merger takes care of the rest for us. 

<h2>Conclusion</h2>

There we go, we have now created a simple program that can merge PDFs for us! While method 2 is perhaps the easier method, the flexibility that method 1 gives us is also quite attractive. Since it appends the PDFs on a page by page basis, we can omit certain pages, reorder pages, or do many of the other cool stuff that [PdfFileWriter](https://pythonhosted.org/PyPDF2/PdfFileWriter.html) provides eg. adding bookmarks, adding JavaScript, removing images, removing and adding links etc. 

That being said, PyPDF2 is **not** a universal PDF toolkit and does not "provide all possible PDF-related functionality" as stated in the official website (it also links [other PDF libraries](http://phaseit.net/claird/comp.text.pdf/PDF_toolkits.html) that you may find useful). However, PyPDF2 is pretty simple to setup and use, so if you are ever stuck in a bind, you know what to do.

Or you could buy Adobe Acrobat Pro and forget about every thing I just said. 

<p align="center">
<img width="300px" src="https://github.com/khxia/khxia.github.io/blob/dev2/src/posts/python/adobe_meme.jpg?raw=True"></img>
</p>