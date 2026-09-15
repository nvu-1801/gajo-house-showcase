import codecs
import re

content = codecs.open('src/data/rooms.ts', 'r', encoding='utf-8').read()

# Replace the mangled part exactly
old_chunk = '''    "galleryTop": {
      "src": "images/ga-moc/gallery-top-new.png",
      "label": "BỒN TẮM THẢO MỘC"
    },
      },
      {
        "label": "GIƯỜNG",
        "value": "King + Sofa"'''

new_chunk = '''    "galleryTop": {
      "src": "images/ga-moc/gallery-top-new.png",
      "label": "BỒN TẮM THẢO MỘC"
    },
    "gallerySub": [
      {
        "src": "images/ga-moc/IMG_5955.jpg",
        "label": "BỒN TẮM THẢO MỘC"
      },
      {
        "src": "images/ga-moc/netflix-new-2.jpg",
        "label": "NETFLIX & MÁY CHIẾU HD"
      }
    ],
    "specs": [
      {
        "label": "DIỆN TÍCH",
        "value": "45 m²"
      },
      {
        "label": "GIƯỜNG",
        "value": "King + Sofa"'''

content = content.replace(old_chunk, new_chunk)
codecs.open('src/data/rooms.ts', 'w', encoding='utf-8').write(content)
print('Fixed')
