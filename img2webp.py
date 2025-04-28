import glob
from pathlib import Path
from PIL import Image
import os


def convert_img(file):
    img_path = Path(file)
    if img_path.suffix.lower() in {".jpg", ".jpeg", ".png"}:
        size_original = os.path.getsize(img_path)

        quality = 100
        webp_path = img_path.with_suffix(".webp")
        Image.open(img_path).save(webp_path, "webp", quality=quality)
        while os.path.getsize(webp_path) > size_original:
            Image.open(img_path).save(webp_path, "webp", quality=quality)
            quality -= 1
        print("deleted:", img_path)
        os.remove(img_path)


for file in glob.iglob("static/images/**/*.*", recursive=True):
    convert_img(file)

for file in glob.iglob("content/posts/**/*.*", recursive=True):
    convert_img(file)
