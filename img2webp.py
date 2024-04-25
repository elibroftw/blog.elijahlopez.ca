import glob
from pathlib import Path
from PIL import Image
import os

for file in glob.iglob('static/images/**/*.*', recursive=True):
  img_path = Path(file)
  if img_path.suffix != '.webp':
    size_original = os.path.getsize(img_path)

    quality = 100
    webp_path = img_path.with_suffix('.webp')
    Image.open(img_path).save(webp_path, 'webp', quality=quality)
    while os.path.getsize(webp_path) > size_original:
      Image.open(img_path).save(webp_path, 'webp', quality=quality)
      quality -= 1
    print('deleted:', img_path)
    os.remove(img_path)
