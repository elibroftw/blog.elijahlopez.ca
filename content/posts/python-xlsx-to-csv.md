---
title: "How to Convert xlsx to csv With Python"
date: 2023-02-10T18:34:17-05:00
draft: false
tags:
  - tutorial
  - programming
  - python
---

Try using https://github.com/dilshod/xlsx2csv first.

If you search this question online, you'll get the slowest answer ever which is to use pandas or xlrd. But I will show you a method
which works on Windows and only requires you have excel installed.

When I first needed this done, the fastest way was to call a VBS script in Python, but today when I was
taking a look at the tiny script, I decided to translate the VB to Python and this is what I got.

```py
import argparse
import os

CSV_FORMAT = 6

def xlsx_to_csv(in_file: str, dest_file: str, sheet=1):
    import win32com.client
    in_file = os.path.abspath(in_file)
    dest_file = os.path.abspath(dest_file)
    xl = win32com.client.Dispatch('Excel.Application')
    oBook = xl.Workbooks.Open(in_file)
    oBook.Worksheets(sheet).Activate
    if os.path.exists(dest_file):
        os.remove(dest_file)
    oBook.SaveAs(dest_file, CSV_FORMAT)
    oBook.Close(False)
    xl.Quit()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Data Science Utilities')
    subparsers = parser.add_subparsers(title='subcommands', description='valid subcommands', help='additional help', dest='subcommand')

    xlsx_converter = subparsers.add_parser('tocsv', help='convert an xlsx file to a csv file')
    xlsx_converter.add_argument('xlsx_in_file', type=str, help='input xlsx file')
    xlsx_converter.add_argument('csv_out_file', type=str, help='output csv file')

    args = parser.parse_args()
    if args.subcommand == 'tocsv':
        xlsx_to_csv(args.xlsx_in_file, args.csv_out_file)
    else:
        parser.print_help()
```
