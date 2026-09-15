import codecs
import re

content = codecs.open('src/data/rooms.ts', 'r', encoding='utf-8').read()

# Fix ga-may heroImage and galleryTop
content = re.sub(
    r'(\"id\": \"ga-may\"[\s\S]*?\"heroImage\":\s*)\"[^\"]+\"',
    r'\1"images/ga-may/hero-new.png"',
    content
)
content = re.sub(
    r'(\"id\": \"ga-may\"[\s\S]*?\"galleryTop\":\s*\{\s*\"src\":\s*)\"[^\"]+\"',
    r'\1"images/ga-may/gallery-top-new.png"',
    content
)

# Fix ga-moc heroImage and galleryTop
content = re.sub(
    r'(\"id\": \"ga-moc\"[\s\S]*?\"heroImage\":\s*)\"[^\"]+\"',
    r'\1"images/ga-moc/hero-new.jpg"',
    content
)
content = re.sub(
    r'(\"id\": \"ga-moc\"[\s\S]*?\"galleryTop\":\s*\{\s*\"src\":\s*)\"[^\"]+\"',
    r'\1"images/ga-moc/gallery-top-new.png"',
    content
)

# Fix ga-moc netflix image
# The target is the second item in ga-moc gallerySub which currently has src IMG_5915.jpg or whatever
old_netflix_chunk = '''        {
          "src": "images/ga-moc/IMG_5915.jpg",
          "label": "MẶT TIỀN ĐÓN NẮNG"
        }'''
new_netflix_chunk = '''        {
          "src": "images/ga-moc/netflix-new-2.jpg",
          "label": "NETFLIX & MÁY CHIẾU HD"
        }'''
content = content.replace(old_netflix_chunk, new_netflix_chunk)

codecs.open('src/data/rooms.ts', 'w', encoding='utf-8').write(content)
print('Fixed rooms.ts')
