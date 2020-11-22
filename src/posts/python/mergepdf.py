import sys
import os
from PyPDF2 import PdfFileReader, PdfFileWriter, PdfFileMerger


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

def cat_pdf_2(input_files, output_stream):
	merger = PdfFileMerger()
	for input_file in input_files:
		merger.append(open(input_file, 'rb'))
	merger.write(output_stream)


if __name__ == "__main__":
	root = sys.argv[1] # This is the directory containing the PDFs you want to merge
	new_file_name = "merged.pdf"
	new_file_path = os.path.join(root, new_file_name)
	o_stream = open(new_file_path, 'wb')
	i_files = [(root + '/' + x) for x in os.listdir(root) if x.endswith(".pdf") and x != new_file_name]
	cat_pdf(i_files, o_stream) # Method 1 
	# cat_pdf_2(i_files, o_stream) # Method 2
	o_stream.close()